export type GenaixisProduct = {
  id: string;
  name: string;
  url: string;
  tagline: string;
  description: string;
  category: string;
  status: 'Live' | 'In Development';
  features: string[];
  logo?: string;
};

export const genaixisProducts: GenaixisProduct[] = [
  {
    id: 'learnstackhub',
    name: 'LearnStackHub',
    url: 'https://www.learnstackhub.com/',
    tagline: 'Java full stack learning platform',
    category: 'EdTech · Developer Platform',
    status: 'Live',
    description:
      'A developer-focused platform for Java full stack learning with structured content, AI mock interviews, virtual assessments, and analytics-ready user journeys.',
    features: [
      'Java full stack learning paths',
      'AI mock interviews',
      'Virtual L1 assessments',
      'Scalable content platform',
      'Role-based product experience',
      'Developer community ecosystem',
    ],
    logo: '/learnstackhub-logo.png',
  },
  {
    id: 'peopleaixis',
    name: 'PeopleAixis',
    url: 'https://peopleaixis.com/',
    tagline: 'GENAIXIS HR platform',
    category: 'HR Tech · People Operations',
    status: 'Live',
    description:
      'PeopleAixis is the GENAIXIS HR platform built to streamline people operations, talent workflows, and workforce management with modern software experiences.',
    features: [
      'HR and people operations platform',
      'Talent and workforce workflows',
      'Modern HR software experience',
      'Built for growing teams',
      'GENAIXIS product ecosystem',
    ],
    logo: '/peopleaixis-logo.jpeg',
  },
  {
    id: 'bhuvedam',
    name: 'BHUVEDAM',
    url: 'https://bhuvedam.com/',
    tagline: 'AI agriculture for farmers',
    category: 'AgriTech · Mobile App',
    status: 'Live',
    description:
      'BHUVEDAM is a live AI-powered agriculture platform and mobile app helping farmers with smarter crop decisions, accessible digital tools, and impact-focused farm technology.',
    features: [
      'Live mobile app for farmers',
      'AI agriculture and crop guidance',
      'Crop-focused digital experiences',
      'Built for real-world farm impact',
      'GENAIXIS AgriTech product',
    ],
    logo: '/bhuvedam-logo.svg',
  },
  {
    id: 'ctrlaltsolve',
    name: 'Ctrl Alt Solve',
    url: 'https://ctrlaltsolve.com/',
    tagline: 'Real-world developer experiences',
    category: 'Developer Community · Knowledge',
    status: 'Live',
    description:
      'A developer knowledge platform sharing production lessons, structured discussions, and real engineering experiences that go beyond tutorials — from Spring Boot basics to incident postmortems.',
    features: [
      'Real-world developer experiences',
      'Production lessons and postmortems',
      'Technology-based experience feed',
      'Structured engineering discussions',
      'Built for freshers and practitioners',
    ],
    logo: '/ctrlaltsolve-logo.png',
  },
];

export const genaixisProductNames = genaixisProducts.map((product) => product.name).join(', ');

export const genaixisProductUrls = genaixisProducts.map((product) => product.url);
