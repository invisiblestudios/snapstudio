import { HttpError } from '@/lib/httpErrors';
import { TCustomUserSession } from '@/types/app';
import { NextRequest, NextResponse } from 'next/server';
import { getUser } from './supabase/queries';
import createSupabaseServerClient from './supabase/server';

type RouteHandlerWithoutSession<T extends Record<string, string | string[]>> = (
  req: NextRequest,
  context: { params: T }
) => Promise<NextResponse>;

type RouteHandlerWithSession<T extends Record<string, string | string[]>> = (
  req: NextRequest,
  context: { params: T; user: TCustomUserSession }
) => Promise<NextResponse>;

export function routeHandler<T extends Record<string, string | string[]>>(
  handler: RouteHandlerWithoutSession<T> | RouteHandlerWithSession<T>,
  { isProtectedRoute = true }: { isProtectedRoute?: boolean } = {}
) {
  return async (req: NextRequest, context: { params: T }) => {
    try {
      if (isProtectedRoute) {
        const supabase = await createSupabaseServerClient();
        const user = await getUser(supabase);

        if (!user || !user.id) {
          throw new HttpError('Unauthorized', 401);
        }

        return await (handler as RouteHandlerWithSession<T>)(req, {
          ...context,
          user,
        });
      }

      return await (handler as RouteHandlerWithoutSession<T>)(req, context);
    } catch (error) {
      if (error instanceof HttpError) {
        return NextResponse.json(
          {
            success: false,
            message: error.message,
            data: null,
          },
          { status: error.statusCode }
        );
      } else {
        console.error('Unexpected error:', error);

        return NextResponse.json(
          {
            success: false,
            message: 'An unexpected error occurred',
            data: null,
          },
          { status: 500 }
        );
      }
    }
  };
}
