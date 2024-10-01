import { routeHandler } from '@/lib/routeHandler';
import createSupabaseServerClient from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

const getTemplatesHander = async () => {
  const supabase = await createSupabaseServerClient();

  const templates = supabase
    .from('headshots')
    .select('id,name,description,image_preview_url');

  return NextResponse.json({
    success: true,
    message: 'Fetched templates',
    data: templates,
  });
};

export const GET = routeHandler(getTemplatesHander);
