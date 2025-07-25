import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const resolvedParam = url.searchParams.get('resolved');
    const resolved = resolvedParam === 'true';

    const incidents = await prisma.incident.findMany({
      where: { resolved },
      orderBy: { tsStart: 'desc' },
      include: { camera: true },
    });

    return NextResponse.json(incidents); 
  } catch (err) {
    console.error('🔥 API failed:', err);

   
    return NextResponse.json([]);
  }
}
