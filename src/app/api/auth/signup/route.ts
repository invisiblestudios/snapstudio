import { signup } from '@/lib/auth';
import { BadRequestError, InternalError } from '@/lib/httpErrors';
import { routeHandler } from '@/lib/routeHandler';
import { NextResponse } from 'next/server';

const signupRouteHandler = async (request: Request) => {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    throw new BadRequestError('Email and password are required');
  }

  const { success, message, data } = await signup({ name, email, password });

  if (!success) {
    throw new InternalError(message);
  }

  const accessToken = data?.session?.access_token;
  const refreshToken = data?.session?.refresh_token;

  if (!accessToken || !refreshToken) {
    throw new BadRequestError('Invalid access token or refresh token');
  }

  return NextResponse.json({
    success: true,
    message,
    data: {
      user: data.user,
      accessToken,
      refreshToken,
    },
  });
};

export const POST = routeHandler(signupRouteHandler, {
  isProtectedRoute: false,
});
