import { routeHandler } from '@/lib/routeHandler';
import { TCustomUserSession } from '@/types/app';
import console from 'console';
import { NextRequest, NextResponse } from 'next/server';

const createHeadshotHander = async (
  request: NextRequest,
  { user }: { user: TCustomUserSession }
) => {
  console.log(user);
  const reqBody = await request.json();

  // TODO: Get required properties from reqBody

  // TODO: Validate them

  const url = new URL(`${process.env.HEADSHOTS_RUNPOD_API_BASE_URL}/run`);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${process.env.HEADSHOTS_RUNPOD_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({}), // TODO: Pass the required properties
  });

  // TODO: Based on the backend response, return the appropriate response to the frontend

  // TODO: Store the headshot in supabase database

  // TODO: Store the headshot files in supabase storage

  return NextResponse.json({ success: true, message: '', data: null });
};

export const POST = routeHandler(createHeadshotHander);
