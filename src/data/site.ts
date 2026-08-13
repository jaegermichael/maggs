export const brand = {
  name: "Maggs Engineering & Consultancy",
  shortName: "Maggs",
  group: "Maggs Engineering Group",
  phone: "0772780125",
  phoneHref: "tel:0772780125",
  email: "hello@maggsengineering.co.uk",
  emailHref: "mailto:hello@maggsengineering.co.uk",
  tagline: "Stylish. Secure. Built for you.",
  pricesFrom: 250,
  colors: {
    orange: "#E65714",
    black: "#121212",
    white: "#FAFAFA",
    charcoal: "#2A2A2A",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/configurator", label: "Configurator" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "gates",
    title: "Premium Gates",
    summary:
      "Driveway, pedestrian and courtyard gates cut for strength, automation and pattern work that reads at property scale.",
    image: "/images/gate-hero.jpg",
    from: 250,
    points: ["Laser CNC patterns", "Automation ready", "Powder coated finishes"],
  },
  {
    slug: "privacy-screens",
    title: "Privacy Screens",
    summary:
      "Perforated and decorative screens that filter light, define outdoor rooms and keep sightlines intentional.",
    image: "/images/privacy-screen.jpg",
    from: 320,
    points: ["Botanical & geometric cuts", "Balcony and boundary fit", "Bronze & charcoal finishes"],
  },
  {
    slug: "wall-cladding",
    title: "Wall Cladding",
    summary:
      "Facade and feature wall panels with controlled depth, shadow and rhythm for residential and commercial builds.",
    image: "/images/wall-cladding.jpg",
    from: 480,
    points: ["Modular panel systems", "Weathered metal options", "Architect collaboration"],
  },
  {
    slug: "signage",
    title: "Signage",
    summary:
      "Building identity, wayfinding and dimensional lettering fabricated for longevity and night presence.",
    image: "/images/signage.jpg",
    from: 180,
    points: ["Halo & face lit options", "Brushed steel & aluminium", "Site install support"],
  },
  {
    slug: "renovations",
    title: "Renovations",
    summary:
      "Metal upgrades for existing properties: entrances, balustrades, screens and coordinated outdoor details.",
    image: "/images/renovation.jpg",
    from: 400,
    points: ["Measured surveys", "Match existing architecture", "Fast turnaround packages"],
  },
  {
    slug: "general-engineering",
    title: "General Engineering",
    summary:
      "One-off brackets, frames, structural plates and custom components for builders and design teams.",
    image: "/images/workshop.jpg",
    from: 120,
    points: ["Prototype to batch", "Tight tolerances", "Workshop capacity on demand"],
  },
];

export const portfolio = [
  {
    id: "ridge-gate",
    title: "Ridge House Gate",
    category: "Gates",
    location: "Surrey",
    material: "Mild steel · powder coat",
    image: "/images/gate-hero.jpg",
    blurb: "Geometric driveway gate with matching pedestrian leaf and automation prep.",
  },
  {
    id: "leaf-screen",
    title: "Leaf Screen Series",
    category: "Screens",
    location: "Kent",
    material: "Aluminium · bronze",
    image: "/images/privacy-screen.jpg",
    blurb: "Botanical privacy run for a courtyard terrace with layered shadow play.",
  },
  {
    id: "northlight",
    title: "Northlight Facade",
    category: "Cladding",
    location: "London",
    material: "Perforated aluminium",
    image: "/images/wall-cladding.jpg",
    blurb: "Commercial entrance cladding with warm internal glow through cut geometry.",
  },
  {
    id: "atelier-sign",
    title: "Atelier Identity",
    category: "Signage",
    location: "Brighton",
    material: "Brushed steel",
    image: "/images/signage.jpg",
    blurb: "Halo-lit monogram and boutique lettering for a high-street fit-out.",
  },
  {
    id: "valley-terrace",
    title: "Valley Court Terrace",
    category: "Renovations",
    location: "Hampshire",
    material: "Corten + steel",
    image: "/images/renovation.jpg",
    blurb: "Full outdoor refresh with freestanding screens and wall art panels.",
  },
  {
    id: "shop-floor",
    title: "Workshop Capacity",
    category: "Engineering",
    location: "Maggs Yard",
    material: "Multi-metal",
    image: "/images/workshop.jpg",
    blurb: "Fibre laser production floor for structural plate and custom fabrication.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Brief & measure",
    body: "Site notes, drawings and performance needs set the structural and visual brief.",
  },
  {
    n: "02",
    title: "Design & nest",
    body: "Patterns are refined for strength, shadow and efficient plate utilisation.",
  },
  {
    n: "03",
    title: "Cut & finish",
    body: "Fibre laser cutting, edge prep, fabrication and protective coatings under one roof.",
  },
  {
    n: "04",
    title: "Install & hand over",
    body: "Coordinated delivery and installation support so the piece lands exactly as drawn.",
  },
];

export const benefits = [
  {
    title: "Enhanced security",
    body: "Keep your property safe with robust frames, quality locks and automation options.",
    icon: "shield",
  },
  {
    title: "Convenience",
    body: "Easy access for you and your guests without compromising the look of the frontage.",
    icon: "access",
  },
  {
    title: "Privacy",
    body: "Screens and solid panels where you need them, open pattern work where you want light.",
    icon: "privacy",
  },
  {
    title: "Modern design",
    body: "Stylish gates and metalwork that lift the whole property, not just the entrance.",
    icon: "design",
  },
];

export const gatePatterns = [
  { id: "geo-slash", name: "Geo Slash", complexity: 1.0 },
  { id: "lattice", name: "Lattice", complexity: 1.15 },
  { id: "horizon", name: "Horizon Bars", complexity: 0.9 },
  { id: "botanical", name: "Botanical", complexity: 1.35 },
  { id: "monolith", name: "Monolith", complexity: 0.85 },
];

export const gateMaterials = [
  { id: "mild", name: "Mild steel", multiplier: 1, swatch: "#2F2F2F" },
  { id: "aluminium", name: "Aluminium", multiplier: 1.2, swatch: "#8A8F96" },
  { id: "corten", name: "Corten", multiplier: 1.35, swatch: "#8B4513" },
  { id: "stainless", name: "Stainless", multiplier: 1.55, swatch: "#C5C7CA" },
];

export const gateFinishes = [
  { id: "matte-black", name: "Matte black", multiplier: 1, color: "#1A1A1A" },
  { id: "maggs-orange", name: "Maggs orange accent", multiplier: 1.08, color: "#E65714" },
  { id: "bronze", name: "Bronze", multiplier: 1.12, color: "#8C6239" },
  { id: "anthracite", name: "Anthracite", multiplier: 1.05, color: "#383E42" },
];
