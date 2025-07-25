// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Step 1: Create Cameras
  await prisma.camera.createMany({
    data: [
      { name: 'Shop Floor A', location: 'First Floor' },
      { name: 'Vault', location: 'Basement' },
      { name: 'Entrance', location: 'Ground Floor' },
    ],
  })

  // Step 2: Fetch Cameras
  const cameras = await prisma.camera.findMany()

  // Step 3: Define Types and Thumbnails (Now 4 thumbnails)
  const types = ['Unauthorised Access', 'Gun Threat', 'Face Recognised']
  const thumbnails = [
    '/thumbnails/thumb1.png',
    '/thumbnails/thumb2.png',
    '/thumbnails/thumb3.png',
    '/thumbnails/thumb4.png',
  ]

  // Step 4: Generate Incident Data
  const now = new Date()

  const incidents = Array.from({ length: 12 }).map((_, i) => {
    const start = new Date(now.getTime() - Math.random() * 1000 * 60 * 60 * 24)
    const end = new Date(start.getTime() + 5 * 60 * 1000) // 5 min duration

    return {
      cameraId: cameras[i % cameras.length].id,
      type: types[i % types.length],
      tsStart: start,
      tsEnd: end,
      thumbnailUrl: thumbnails[i % thumbnails.length],
      resolved: false,
    }
  })

  // Step 5: Insert Incidents
  await prisma.incident.createMany({ data: incidents })
  console.log('Seeded incidents into Supabase PostgreSQL')
}

// Run main() with error handling
main()
  .catch((e) => {
    console.error('Error while seeding:', e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())