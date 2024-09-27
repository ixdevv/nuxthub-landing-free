import { FunctionalComponent, SVGAttributes } from 'vue'

export interface Page {
  title: string;
  description: string;
  template?: string;
  theme?: string;
  metadata?: Metadata;
  header?: Header;
  hero?: Hero;
  usercase?: Section;
  sections?: Section[];
  section?: Section;
  feature?: Feature;
  testimonial?: Testimonial;
  faq?: Section;
  cta?: Section;
  social?: Section;
  footer?: Footer;
  user?: User;
  pricing?: Pricing;
}

export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export interface User {
  name?: string;
  email?: string;
  avatar?: Image;
  url?: string;
  target?: string;
  items?: Item[];
}

export interface Header {
  brand?: Brand;
  nav?: Nav;
  login_button?: Button;
  buttons?: Button[];
  disabled?: boolean;
}

export interface Hero {
  title?: string;
  description?: string;
  image?: Image;
  video?: Video;
  tip?: string;
  primary_button?: Button;
  secondary_button?: Button;
  image_position?: ImagePosition;
  text_align?: TextAlign;
  buttons?: Button[];
  show_happy_users?: boolean;
  highlight_text?: string;
  disabled?: boolean;
  show_proof?: boolean;
}

export interface Section extends Item {}

export interface Footer {
  brand?: Brand;
  social?: Social;
  navs?: Nav[];
  copyright?: string;
  qrcode?: Image;
  nav?: Nav;
  buttons?: Button[];
  disabled?: boolean;
  badge_disabled?: boolean;
}

export interface Nav {
  title?: string;
  items: Item[];
}

export interface Item {
  name?: string;
  title?: string;
  description?: string;
  isOpen?: boolean;
  content?: string;
  type?: string;
  url?: string;
  target?: string;
  icon?: FunctionalComponent<SVGAttributes>;
  avatar?: Image;
  image?: Image;
  video?: Video;
  theme?: string;
  children?: Item[];
  tip?: string;
  button?: Button;
  image_position?: ImagePosition;
  text_align?: TextAlign;
  items?: Item[];
  buttons?: Button[];
  disabled?: boolean;
  label?: string;
}

export interface Image {
  src: string;
  title?: string;
  status?: string;
}

export interface Video {
  src: string;
  title?: string;
  auto_play?: boolean;
}

export interface Button extends Item {}

export interface Brand {
  title?: string;
  description?: string;
  avatar?: Image;
  url?: string;
}

export interface Social {
  title?: string;
  description?: string;
  items?: Item[];
}

export type ImagePosition = "right" | "left" | "center" | undefined;

export type TextAlign = "left" | "center" | undefined;

export interface FeatureItem {
  title: string;
  description: string;
  icon: string; // 新增：图标名称
}

export interface Feature {
  title: string;
  items: FeatureItem[];
}

export interface PricingPlan {
  discountedPrice: any;
  discountPercentage: any;
  title: string;
  description: string;
  price: number;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isPrimary: boolean;
}

export interface Pricing {
  freePlan: PricingPlan;
  proPlan: PricingPlan;
  enterprisePlan: PricingPlan;
}

export interface Testimonial {
  title: string;
  items: TestimonialItem[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
