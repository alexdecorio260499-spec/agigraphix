export type Project = {
  id: string;
  title: string;
  slug: string;
  client: string;
  location: string;
  year: string;
  description: string;
  category: string;
  industry: string;
  coverImage: string;
  galleryImages: string[];
  services: string[];
  featured: boolean;
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "LUX* Grand Baie Signage",
    slug: "lux-grand-baie-signage",
    client: "LUX* Resorts",
    location: "Grand Baie, Mauritius",
    year: "2023",
    description: "Complete external and internal signage solution for a luxury resort. The project included illuminated wayfinding, premium room numbers, and large-scale architectural lettering designed to withstand coastal weather conditions.",
    category: "Signage",
    industry: "Hospitality",
    coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop"
    ],
    services: ["Luminous Signage", "Wayfinding", "3D Letters"],
    featured: true
  },
  {
    id: "2",
    title: "Tribeca Mall Retail Branding",
    slug: "tribeca-mall-retail",
    client: "Tribeca Central",
    location: "Trianon, Mauritius",
    year: "2024",
    description: "Large-format printing and custom acrylic fabrication for multiple retail spaces within the new mall, ensuring high visibility and brand consistency across various storefronts.",
    category: "Printing",
    industry: "Retail",
    coverImage: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop",
    ],
    services: ["Large Format Printing", "Acrylic Fabrication", "Window Graphics"],
    featured: true
  },
  {
    id: "3",
    title: "MCB Corporate Headquarters",
    slug: "mcb-corporate-hq",
    client: "MCB Group",
    location: "Ebene, Mauritius",
    year: "2022",
    description: "Bespoke internal corporate branding and frosted glass graphics for a modern corporate environment, providing privacy while maintaining an open, light-filled aesthetic.",
    category: "Displays",
    industry: "Corporate",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
    ],
    services: ["Corporate Signage", "Frosted Films", "Custom Displays"],
    featured: true
  },
  {
    id: "4",
    title: "Tech Conference Exhibition",
    slug: "tech-conference-exhibition",
    client: "Tech Africa",
    location: "SVICC, Mauritius",
    year: "2024",
    description: "End-to-end design, fabrication, and installation of a massive modular exhibition booth featuring LED displays, hanging signs, and custom counters.",
    category: "Events",
    industry: "Events",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop"
    ],
    services: ["Events Setup", "Fabrication", "Large Format Printing"],
    featured: false
  }
];

export const MOCK_SERVICES = [
  {
    id: "1",
    name: "Signage",
    slug: "signage",
    description: "Make your brand impossible to miss with bespoke outdoor and indoor signage solutions.",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1974&auto=format&fit=crop",
    capabilities: [
      "Luminous signage",
      "Non-luminous signage",
      "3D letters",
      "Cut-out letters",
      "PVC & Acrylic letters",
      "Corporate signage",
      "Wayfinding"
    ]
  },
  {
    id: "2",
    name: "Large Format Printing",
    slug: "large-format-printing",
    description: "High-resolution, large-scale prints that capture attention from a distance.",
    image: "https://images.unsplash.com/photo-1626784215001-3832c3e1e2d4?q=80&w=2070&auto=format&fit=crop",
    capabilities: [
      "Billboards",
      "Vehicle wrapping",
      "Window graphics",
      "Wall murals",
      "Banners",
      "Posters",
      "Canvas prints"
    ]
  },
  {
    id: "3",
    name: "Displays & Fabrication",
    slug: "displays-fabrication",
    description: "Custom-built point-of-sale displays and architectural elements crafted with precision.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop",
    capabilities: [
      "POS displays",
      "Acrylic fabrication",
      "CNC routing",
      "Laser cutting",
      "Custom metalwork",
      "Retail stands",
      "Trophy & awards"
    ]
  },
  {
    id: "4",
    name: "Events & Exhibitions",
    slug: "events-exhibitions",
    description: "Turn any empty space into a branded experience for trade shows, launches, and events.",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop",
    capabilities: [
      "Modular exhibition stands",
      "Custom booths",
      "Backdrops",
      "Event signage",
      "Branded counters",
      "Roll-up banners",
      "Stage graphics"
    ]
  }
];
