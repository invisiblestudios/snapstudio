import { login } from '@/lib/auth';
import { BadRequestError } from '@/lib/httpErrors';
import { routeHandler } from '@/lib/routeHandler';
import { NextResponse } from 'next/server';

const loginRouteHandler = async (request: Request) => {
  const { email, password } = await request.json();

  if (!email || !password) {
    throw new BadRequestError('Email and password are required');
  }

  const { success, message, data } = await login({ email, password });

  const accessToken = data?.session.access_token;
  const refreshToken = data?.session.refresh_token;

  if (!success || !accessToken || !refreshToken) {
    throw new BadRequestError(message || 'Invalid credentials');
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

export const POST = routeHandler(loginRouteHandler, {
  isProtectedRoute: false,
});
