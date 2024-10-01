import { signup } from '@/lib/auth';
import { BadRequestError, InternalError } from '@/lib/httpErrors';
import { routeHandler } from '@/lib/routeHandler';
import { NextResponse } from 'next/server';

const signupRouteHandler = async (request: Request) => {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    throw new BadRequestError('Email and password are required');
  }

  const { success, message } = await signup({ name, email, password });

  if (!success) {
    throw new InternalError(message);
  }

  return NextResponse.json({
    success: true,
    message,
    data: null,
  });
};

export const POST = routeHandler(signupRouteHandler, {
  isProtectedRoute: false,
});
