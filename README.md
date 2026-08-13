# Maggs Engineering & Consultancy

Premium Next.js web app for **Maggs Engineering Group**.

Laser CNC structural design and fabrication: gates, privacy screens, wall cladding, signage, renovations, and general engineering.

## Brand

| Token | Value |
|---|---|
| Name | Maggs Engineering & Consultancy |
| Group | Maggs Engineering Group |
| Phone | 0772780125 |
| Orange | `#E65714` |
| Black | `#121212` |
| Paper | `#FAFAFA` |
| Tagline | Stylish. Secure. Built for you. |
| Gates from | £250 |

## Stack

- Next.js 15 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Three.js + React Three Fiber + Drei
- Framer Motion

## Pages

| Route | Description |
|---|---|
| `/` | Home with 3D hero gate + laser field |
| `/about` | Studio story |
| `/services` | Six fabrication services |
| `/portfolio` | Interactive project gallery |
| `/configurator` | Live 3D gate builder + estimate |
| `/process` | Four-stage method |
| `/contact` | Phone / email |
| `/quote` | Enquiry form (prefills from configurator) |

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Three.js scenes

1. **GateScene** - extrude-cut gate with orbit controls, pattern swaps, sparks
2. **LaserField** - moving laser beam, cut ring, particle field

## Licence

Private project for Maggs Engineering Group.
