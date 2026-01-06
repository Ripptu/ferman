import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  image: string;
  color: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
}
