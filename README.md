```markdown
# SecureSight 

This project is a partial implementation of the SecureSight CCTV monitoring dashboard. It allows operators to view video footage, track AI-detected incidents (such as gun threats and unauthorized access), and resolve those incidents in a real-time interface.

This submission includes the frontend (Next.js 15 with Tailwind CSS) and backend API routes with a PostgreSQL database hosted on Supabase.

---

## Live Deployment

- **Live App**: [https://securesight-dashboard-olzl.vercel.app](https://securesight-dashboard-olzl.vercel.app)
- **GitHub Repository**: [https://github.com/kulkarnimanas732/securesight-dashboard](https://github.com/kulkarnimanas732/securesight-dashboard)

---

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **ORM**: Prisma
- **Deployment**: Vercel

---

## Folder Structure Overview
.
├── app/
│   ├── api/
│   │   └── incidents/
│   │       ├── \[id]/resolve/route.ts    # PATCH: resolve incident
│   │       └── route.ts                 # GET: unresolved incidents
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── IncidentPlayer.tsx
│   │   ├── IncidentList.tsx
│   │   ├── ControlBar.tsx
│   │   └── TimelineWidget.tsx           # Optional timeline (partial)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── lib/
│   └── prisma.ts                        # Prisma client config
│
├── prisma/
│   ├── schema.prisma                    # Prisma schema definition
│   └── seed.ts                          # Seed data for Supabase DB
│
├── public/                              # Static thumbnails
├── .env                                 # Contains DATABASE\_URL
├── next.config.js
├── tsconfig.json
└── package.json

````

---

## Implemented Features

### Navigation (Navbar)
- Static top navigation bar with links to Dashboard, Cameras, Scenes, Incidents, and Users.

### Incident Player (Left Panel)
- Displays a static placeholder video/image.
- Shows additional camera thumbnails below the main video panel.

### Incident List (Right Panel)
- Fetches unresolved incidents from the backend.
- Displays incident thumbnail, type, camera location, and timestamps.
- "Resolve" button triggers an optimistic UI transition and backend update.

### API Routes
- `GET /api/incidents?resolved=false`  
  Returns all unresolved incidents, sorted by most recent.
  
- `PATCH /api/incidents/:id/resolve`  
  Marks a specific incident as resolved and returns the updated object.

### Optional Timeline (Partially Implemented)
- SVG-based 24-hour timeline with visual incident markers and camera event rows.
- Time scrubber shown but not fully interactive.

---

## Data Model (Prisma Schema)

```prisma
model Camera {
  id        Int        @id @default(autoincrement())
  name      String
  location  String
  incidents Incident[]
}

model Incident {
  id           Int      @id @default(autoincrement())
  cameraId     Int
  camera       Camera   @relation(fields: [cameraId], references: [id])
  type         String
  tsStart      DateTime
  tsEnd        DateTime
  thumbnailUrl String
  resolved     Boolean  @default(false)
}
````

---

## Seed Data (Supabase)

The seed script (`prisma/seed.ts`) creates:

* **3 Cameras**: Shop Floor A, Vault, Entrance
* **12+ Incidents**:

  * Types: Unauthorized Access, Gun Threat, Face Recognised
  * Timestamps distributed over 24 hours
  * Placeholder thumbnail images from the `/public` directory

To run:

```bash
npx prisma db push
npx tsx prisma/seed.ts
```

---

## Supabase Setup

1. Create a project at [https://supabase.com](https://supabase.com)
2. Navigate to **Project Settings > Database** and copy the connection string.
3. In your `.env` file, add:

```env
DATABASE_URL=postgresql://username:password@host:port/dbname
```

4. Push schema and seed data:

```bash
npx prisma db push
npx tsx prisma/seed.ts
```

---

## Local Development

```bash
# Install dependencies
npm install

# Set up database
npx prisma db push
npx tsx prisma/seed.ts

# Start the development server
npm run dev
```

---

## Deployment (Vercel)

1. Push your repository to GitHub.
2. Connect the GitHub repository to [https://vercel.com](https://vercel.com)
3. In Vercel's project settings, add:

```
Environment Variable:
  DATABASE_URL = (Supabase connection string)
```

4. Deploy the application.

---

## Technical Decisions

* **Supabase** was selected for its managed PostgreSQL and integration with Prisma.
* **Next.js 15 App Router** was used for modern routing and API structuring.
* **Tailwind CSS** accelerated styling using a utility-first approach.
* **Prisma ORM** was used for efficient database access and seeding.
* Optimistic UI improves user experience for resolving incidents.

---

## Future Improvements

* Complete the interactive timeline (draggable scrubber, playback sync).
* Add search and filter capabilities for incidents.
* Enable actual video feeds instead of static thumbnails.
* Introduce camera switching and playback controls.
* Add Supabase Auth for user login and roles.
* Optimize UI for responsiveness and mobile support.

---


