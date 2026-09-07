export type Program = {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  goal: string;
  focus: string[];
  image: string;
  imageAlt: string;
};

export const programs: Program[] = [
  {
    slug: "climate-action",
    category: "01",
    title: "Climate action & environmental resilience",
    shortTitle: "Climate action",
    description:
      "We work with communities to understand, respond to, and reduce the impacts of climate change while protecting and restoring the natural environment.",
    goal:
      "Enable communities to become better prepared for climate change while protecting the natural resources on which their lives and livelihoods depend.",
    focus: [
      "Climate-change adaptation and mitigation",
      "Tree growing, planting, and ecosystem restoration",
      "Restoration of degraded land and landscapes",
      "Agroforestry and nature-based solutions",
      "Soil, water, and natural resource conservation",
      "Climate awareness and community education",
      "Water-efficient and climate-resilient practices",
      "Waste reduction, recycling, and reuse",
    ],
    image: "/media/WhatsApp Image 2026-09-05 at 22.42.48.jpeg",
    imageAlt: "Community members working with plants outdoors",
  },
  {
    slug: "sustainable-agroecology",
    category: "02",
    title: "Sustainable agroecology, food & nutrition security",
    shortTitle: "Sustainable agroecology",
    description:
      "We promote sustainable and climate-resilient food systems that improve household food security, nutrition, environmental health, and economic wellbeing.",
    goal:
      "Help communities produce healthy food, protect their land, and build more resilient and productive livelihoods.",
    focus: [
      "Agroecological and climate-smart farming practices",
      "Agroforestry and food-producing trees",
      "Sustainable crop and livestock production",
      "Community and household gardens",
      "Water-efficient and innovative growing systems",
      "Soil health and sustainable land management",
      "Food and nutrition awareness",
      "Farmer training, demonstrations, and mentorship",
    ],
    image: "/media/WhatsApp Image 2026-09-05 at 22.42.47 (1).jpeg",
    imageAlt: "A planted vertical garden tower",
  },
  {
    slug: "economic-empowerment",
    category: "03",
    title: "Inclusive economic empowerment & sustainable livelihoods",
    shortTitle: "Economic empowerment",
    description:
      "We support people and communities to develop the skills, enterprises, opportunities, and resources needed to strengthen their economic independence.",
    goal:
      "Turn skills, local resources, and environmental opportunities into sustainable sources of income, employment, and economic independence.",
    focus: [
      "Entrepreneurship and enterprise development",
      "Green businesses and green jobs",
      "Youth skills development and employment",
      "Women and girls' economic empowerment",
      "Vocational and livelihood skills training",
      "Small-scale and community-based enterprises",
      "Financial literacy and enterprise management",
      "Innovation and value addition",
    ],
    image: "/media/WhatsApp Image 2026-09-07 at 10.34.19.jpeg",
    imageAlt: "Community members gathered around a practical project",
  },
  {
    slug: "community-development",
    category: "04",
    title: "Holistic community development, capacity & wellbeing",
    shortTitle: "Community development",
    description:
      "We strengthen individuals, families, and communities by building knowledge, confidence, leadership, social support, and the capacity to participate meaningfully in their own development.",
    goal:
      "Build confident, capable, and connected communities that can identify challenges, develop solutions, make informed decisions, and lead their own development.",
    focus: [
      "Community capacity building and leadership",
      "Training and practical skills development",
      "Mentorship and coaching",
      "Counselling and psychosocial support",
      "Youth and women's leadership",
      "Community mobilization and participation",
      "Life skills and personal development",
      "Social inclusion and collective action",
    ],
    image: "/media/group.jpeg",
    imageAlt: "Community members working together outdoors",
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
