import { Service, Industry, CaseStudy, BlogPost } from './types';

export const SITE_CONFIG = {
  name: "dzleadgen",
  baseUrl: "https://dzleadgen.com",
  socials: {
    // Social handles kept for metadata if needed, but UI will hide them
    twitter: "https://twitter.com/dzleadgen",
    linkedin: "https://linkedin.com/company/dzleadgen"
  },
  contact: {
    email: "hello@dzleadgen.com"
  }
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: "SEO",
    description: "Technical and on-page SEO strategies to dominate search rankings and drive organic traffic.",
    icon: "Search",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '2',
    title: "SEM",
    description: "Strategic Search Engine Marketing campaigns to capture high-intent traffic instantly.",
    icon: "BarChart",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '3',
    title: "Meta Ad",
    description: "High-converting Facebook and Instagram ad campaigns targeting your ideal customer profile.",
    icon: "Share2",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '4',
    title: "Lead Generator Specialist",
    description: "Dedicated lead generation experts delivering sales-ready prospects directly to your pipeline.",
    icon: "Target",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: '1',
    name: "SaaS",
    description: "Scalable growth strategies for software companies seeking enterprise adoption.",
    icon: "Server"
  },
  {
    id: '2',
    name: "FinTech",
    description: "Compliant, trust-building marketing for financial technology disruptors.",
    icon: "CreditCard"
  },
  {
    id: '3',
    name: "Healthcare",
    description: "Patient-centric strategies connecting providers with modern healthcare solutions.",
    icon: "Activity"
  },
  {
    id: '4',
    name: "Manufacturing",
    description: "B2B industrial marketing bridging the gap between legacy systems and digital sales.",
    icon: "Factory"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: "TechFlow Solutions",
    industry: "SaaS",
    title: "Scaling MRR by 300% in 6 Months",
    results: ["300% Increase in MRR", "45% Reduction in CAC", "120+ Enterprise Demos Booked"],
    image: "https://picsum.photos/800/600?random=1",
    slug: "techflow-scaling-mrr"
  },
  {
    id: '2',
    client: "MediCare Plus",
    industry: "Healthcare",
    title: "Modernizing Patient Acquisition",
    results: ["2x Patient Inquiries", "Top 3 Ranking for Key Terms", "98% Positive Feedback"],
    image: "https://picsum.photos/800/600?random=2",
    slug: "medicare-patient-acquisition"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "The Future of B2B Lead Gen in 2024",
    excerpt: "Why traditional cold outreach is dying and what you should be doing instead to capture attention.",
    author: "Alex Rivera",
    date: "Oct 12, 2023",
    slug: "future-of-b2b-lead-gen",
    tags: ["Strategy", "Trends"],
    content: "Full article content would go here..."
  },
  {
    id: '2',
    title: "Technical SEO Checklist for Startups",
    excerpt: "Ensure your new website is indexed correctly and ranking for the terms that matter most.",
    author: "Sarah Chen",
    date: "Sep 28, 2023",
    slug: "technical-seo-checklist",
    tags: ["SEO", "Technical"],
    content: "Full article content would go here..."
  },
  {
    id: '3',
    title: "Content Clusters Explained",
    excerpt: "How to structure your blog content to build topical authority and dominate a niche.",
    author: "Mike Johnson",
    date: "Sep 15, 2023",
    slug: "content-clusters-explained",
    tags: ["Content", "SEO"],
    content: "Full article content would go here..."
  }
];