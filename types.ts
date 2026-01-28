export interface SeoConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  results: string[];
  image: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  slug: string;
  content: string; // Markdown/HTML content simulated
  tags: string[];
}