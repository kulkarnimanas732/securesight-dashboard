import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   // Await the params since it's now a Promise in Next.js 15
//   const { id: idParam } = await params;
//   const id = parseInt(idParam);

//   if (isNaN(id)) {
//     return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
//   }

//   const incident = await prisma.incident.findUnique({ where: { id } });

//   if (!incident) {
//     return NextResponse.json({ error: 'Incident not found' }, { status: 404 });
//   }

//   const updated = await prisma.incident.update({
//     where: { id },
//     data: { resolved: !incident.resolved },
//   });

//   return NextResponse.json(updated);
// }
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await params;
    const id = parseInt(idParam);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const incident = await prisma.incident.findUnique({ where: { id } });

    if (!incident) {
      return NextResponse.json({ error: 'Incident not found' }, { status: 404 });
    }

    const updated = await prisma.incident.update({
      where: { id },
      data: { resolved: !incident.resolved },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error('🔥 PATCH /api/incidents/:id/resolve failed:', err);

    return new NextResponse(
      JSON.stringify({ error: 'Something went wrong' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
