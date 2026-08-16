export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface ExpertiseItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  iconName: string;
  skills: string[];
  protocolsAndStandards: string[];
  businessValue: string;
  deliverables: string[];
}

export interface ImpactItem {
  number: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  context: string;
  domain: string;
  badge: string;
  keyOutcomes: string[];
}

export interface ExperienceRole {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  keyAchievement?: string;
  metrics?: { label: string; value: string }[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  clientContext: string;
  domain: string;
  challenge: string;
  approach: string[];
  technologies: string[];
  result: string;
  metrics: { label: string; value: string }[];
  takeaway: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  whoItsFor: string;
  deliverables: string[];
  engagementModel: string;
}

export interface TechItem {
  name: string;
  category: 'PLC / Controls' | 'SCADA / MES' | 'Machine Vision' | 'Industrial Networking' | 'Manufacturing & Industry 4.0';
  highlight?: boolean;
  description?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  type: 'Degree' | 'Diploma' | 'Certification';
  iconName: string;
}

export interface ArchitectureLayer {
  level: string;
  name: string;
  subtitle: string;
  components: string[];
  protocols: string[];
  roleInFactory: string;
}
