export const site = {
  name: "Power Solutions",
  tagline:
    "Transformer engineering, solar solutions, and hard-rock drilling for industrial projects.",
  phones: ["+91 9827045321", "+91 7999801794"],
  emails: ["shalini.c4u@gmail.com", "kushwah.vishal@gmail.com"],
  address: "Industrial Area, India",
};

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export const navLinks = [
  { href: "#transformers", label: "Transformers" },
  { href: "#solar", label: "Solar" },
  { href: "#drilling", label: "Drilling" },
  { href: "#additional-services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroSlides = [
  {
    id: "yard-inventory",
    title: "Transformer Supply & Inventory",
    caption:
      "Distribution transformers staged and ready for industrial and utility deployment.",
    image: "/images/hero/yard-inventory.jpg",
    alt: "Outdoor yard filled with industrial distribution transformers",
  },
  {
    id: "transformers-close",
    title: "Distribution Transformer Works",
    caption:
      "Hands-on handling of HT/LT units—from bushings and radiators to site-ready handover.",
    image: "/images/hero/transformers-close.jpg",
    alt: "Close-up of green and brown distribution transformers with ceramic bushings",
  },
  {
    id: "workshop-bushings",
    title: "Precision Workshop Assembly",
    caption:
      "Bushing fitment and tank preparation inside a controlled industrial workshop.",
    image: "/images/hero/workshop-bushings.jpg",
    alt: "Workshop transformers with ceramic bushings on hexagonal paving",
  },
  {
    id: "workshop-assembly",
    title: "Core & Coil Engineering",
    caption:
      "Active assembly of transformer cores, insulation, and tanks for real plant duty.",
    image: "/images/hero/workshop-assembly.jpg",
    alt: "Transformer workshop with core-and-coil assemblies and oxide-primer tanks",
  },
  {
    id: "yard-overview",
    title: "Scale You Can See On Site",
    caption:
      "A working yard that reflects capacity for multi-unit transformer projects.",
    image: "/images/hero/yard-overview.jpg",
    alt: "Wide view of the transformer yard with rows of industrial units",
  },
] as const;

/** Division 1 — Primary focus */
export const transformerDivision = {
  eyebrow: "Division 01 · Primary focus",
  heading: "Transformer & Electrical Infrastructure",
  intro:
    "Our core business: transformer repair, manufacturing, maintenance, and HT/LT electrical infrastructure delivered with industrial discipline.",
  transformerServices: [
    {
      title: "Repair & Overhauling",
      description:
        "Complete repair and overhaul of distribution and power transformers for restored performance.",
    },
    {
      title: "Manufacturing",
      description:
        "Transformer manufacturing aligned to project specifications and industrial duty cycles.",
    },
    {
      title: "Installation & Maintenance",
      description:
        "On-site transformer installation, erection, and planned or breakdown maintenance for critical assets.",
    },
    {
      title: "Oil Filtration",
      description:
        "Transformer oil filtration and conditioning to extend asset life and dielectric strength.",
    },
    {
      title: "Amorphous Transformer Repair",
      description:
        "Specialized repair support for amorphous core transformers and related assemblies.",
    },
    {
      title: "Sale & Purchase",
      description:
        "Sale and purchase of transformers to match project timelines and inventory needs.",
    },
  ],
  infrastructureServices: [
    {
      title: "33kV / 11kV Line Work",
      description:
        "33kV and 11kV line erection, shifting, and related HT field works for project routes and clearances.",
    },
    {
      title: "H-Beam Pole Installation",
      description:
        "H-beam pole supply and installation for HT/LT overhead lines and industrial feeders.",
    },
    {
      title: "Substation Installation",
      description:
        "Substation erection and installation covering equipment, cabling, and commissioning support.",
    },
    {
      title: "Grid Making & HT Connection",
      description:
        "Grid making and HT connection works to bring industrial and project loads onto the network.",
    },
    {
      title: "Cables & Wires",
      description:
        "Supply and installation support for industrial and utility-grade cables and wires.",
    },
    {
      title: "Fabricated MS / GI Materials",
      description:
        "Fabricated mild steel and galvanized iron materials for electrical infrastructure builds.",
    },
    {
      title: "Distribution Panels & APFC",
      description:
        "Distribution panels and APFC systems for efficient plant and facility power management.",
    },
    {
      title: "Electrical Liaisoning Work",
      description:
        "Liaisoning support for approvals, clearances, and coordination with concerned authorities.",
    },
  ],
} as const;

/** Division 2 — Solar (dedicated) */
export const solarDivision = {
  eyebrow: "Division 02",
  heading: "Solar Energy Solutions",
  intro:
    "End-to-end solar capability—from installation and structures to inverters, parks, logistics, and integrated wind energy services.",
  subgroups: [
    {
      title: "Solar Installation",
      description:
        "Complete solar PV installation for commercial, industrial, and project-scale sites.",
    },
    {
      title: "GI Structure Fabrication",
      description:
        "Galvanized iron structure fabrication engineered for solar mounting durability.",
    },
    {
      title: "Solar Inverters",
      description:
        "Supply, installation, and repair of solar inverters for reliable system performance.",
    },
    {
      title: "Solar Park Development & Maintenance",
      description:
        "Development support and ongoing maintenance for solar parks and large arrays.",
    },
    {
      title: "Solar Logistics",
      description:
        "Logistics coordination for solar modules, structures, and project materials.",
    },
    {
      title: "Wind Power Electrical Works",
      description:
        "Electrical works for wind power projects—site execution, connections, and upkeep.",
    },
  ],
} as const;

/** Division 3 — Promotional drilling feature */
export const drillingDivision = {
  eyebrow: "Featured division",
  tagline:
    "HARD ROCK DRILLING SOLUTIONS FOR SOLAR PROJECTS, BOREWELLS & GENERAL DRILLING",
  supportingText:
    "Specialized drilling solutions for solar-project land preparation, borewells, and general hard-rock drilling requirements, supported by DTH machine solutions.",
  image: "/images/hero/yard-overview.jpg",
  imageAlt:
    "Industrial project yard representing hard-rock drilling and field operations capacity",
  capabilities: [
    {
      title: "Solar-Project Land Preparation & Drilling",
      description:
        "Site preparation and drilling aligned to solar project layouts and timelines.",
    },
    {
      title: "Borewell Drilling Solutions",
      description:
        "Borewell drilling for industrial, project, and general water-source requirements.",
    },
    {
      title: "General Hard-Rock Drilling & DTH Machine Solutions",
      description:
        "Hard-rock drilling supported by DTH machine solutions for demanding ground conditions.",
    },
  ],
  cta: {
    label: "Enquire About Drilling Solutions",
    href: "#contact",
  },
} as const;

/** Division 4 — Additional industrial & logistics */
export const additionalServices = {
  eyebrow: "Division 04",
  heading: "Additional Industrial & Logistics Services",
  intro:
    "Contracting, turnkey delivery, and the supporting services that keep industrial projects moving.",
  items: [
    {
      title: "Industrial Electrical Contracting",
      description:
        "End-to-end industrial electrical contracting for plants, utilities, and project sites.",
    },
    {
      title: "Turnkey Electrical Projects",
      description:
        "Turnkey electrical project delivery from scope definition through installation and handover.",
    },
    {
      title: "Diesel Generator (DG) Rental",
      description:
        "DG rental for temporary power during construction, maintenance, and contingency operations.",
    },
    {
      title: "Transportation & Logistics",
      description:
        "Independent transportation and logistics for transformers, materials, and project equipment.",
    },
    {
      title: "Equipment Rental",
      description:
        "Equipment rental support that complements electrical and site-execution scopes.",
    },
  ],
} as const;

export const galleryItems = [
  {
    src: "/images/hero/transformers-close.jpg",
    alt: "Distribution transformers prepared for repair and deployment",
    caption: "Transformer yard detail",
  },
  {
    src: "/images/hero/workshop-bushings.jpg",
    alt: "Workshop transformers with ceramic bushings",
    caption: "Workshop assembly",
  },
  {
    src: "/images/hero/workshop-assembly.jpg",
    alt: "Core and coil assemblies in the workshop",
    caption: "Core & coil work",
  },
  {
    src: "/images/hero/yard-inventory.jpg",
    alt: "Transformer inventory staged outdoors",
    caption: "Project inventory",
  },
  {
    src: "/images/hero/yard-overview.jpg",
    alt: "Wide view of the industrial transformer yard",
    caption: "Operations at scale",
  },
] as const;

export const trustedClients = [
  "Toshiba Electricals",
  "PP Electricals",
  "STS Transformer",
  "RAMKY",
  "VOLTAS",
  "Larsen & Toubro (L&T)",
  "Agarwal Power",
  "Kshema Power",
  "Vedanjay Power",
  "Sai Anand Gujarat",
  "South Gujarat Company",
  "MPPKVVCL",
  "MPEB",
] as const;
