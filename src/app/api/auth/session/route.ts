import { routeHandler } from '@/lib/routeHandler';
import { getUser } from '@/lib/supabase/queries';
import createSupabaseServerClient from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const sessionRouteHandler = async () => {
  const supabase = await createSupabaseServerClient();

  const user = await getUser(supabase);

  return NextResponse.json({
    success: true,
    message: 'Fetched session info',
    data: user,
  });
};

export const GET = routeHandler(sessionRouteHandler);
