import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'ai-security-scanner',
    title: 'AI Security Scanner',
    description: 'Intelligent vulnerability scanner powered by machine learning for automated threat detection.',
    longDescription: 'A comprehensive security scanning solution that leverages AI/ML to identify vulnerabilities in web applications, networks, and cloud infrastructure. Features real-time threat analysis and automated remediation suggestions.',
    image: '/images/projects/ai-scanner.jpg',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'Redis'],
    category: 'ai-automation',
    status: 'completed',
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.example.com',
    features: [
      'Real-time threat detection',
      'ML-powered vulnerability analysis',
      'Automated security reports',
      'CI/CD integration',
      'Cloud-native architecture'
    ],
    featured: true,
    date: '2024-03-15'
  },
  {
    id: 'cloud-sentinel',
    title: 'Cloud Sentinel',
    description: 'Multi-cloud security monitoring and compliance automation platform.',
    longDescription: 'Enterprise-grade cloud security platform supporting AWS, Azure, and GCP. Provides continuous compliance monitoring, automated remediation, and detailed security posture dashboards.',
    image: '/images/projects/cloud-sentinel.jpg',
    technologies: ['Go', 'Kubernetes', 'Terraform', 'AWS', 'Azure', 'GCP'],
    category: 'cloud-security',
    status: 'completed',
    githubUrl: 'https://github.com',
    features: [
      'Multi-cloud support',
      'Compliance automation',
      'Real-time monitoring',
      'Cost optimization',
      'Security dashboards'
    ],
    featured: true,
    date: '2024-02-20'
  },
  {
    id: 'iot-mesh-network',
    title: 'IoT Mesh Network',
    description: 'Scalable IoT mesh networking solution with end-to-end encryption.',
    longDescription: 'A robust IoT mesh networking framework designed for industrial applications. Features self-healing network topology, military-grade encryption, and efficient power management.',
    image: '/images/projects/iot-mesh.jpg',
    technologies: ['C++', 'Rust', 'MQTT', 'LoRaWAN', 'Zigbee'],
    category: 'iot',
    status: 'completed',
    githubUrl: 'https://github.com',
    features: [
      'Self-healing network',
      'End-to-end encryption',
      'Low power consumption',
      'Industrial grade',
      'Real-time telemetry'
    ],
    featured: true,
    date: '2024-01-10'
  },
  {
    id: 'threat-intelligence-platform',
    title: 'Threat Intelligence Platform',
    description: 'Centralized threat intelligence aggregation and analysis system.',
    image: '/images/projects/threat-intel.jpg',
    technologies: ['Python', 'Elasticsearch', 'Kafka', 'React', 'PostgreSQL'],
    category: 'cyber-security',
    status: 'completed',
    githubUrl: 'https://github.com',
    features: [
      'Feed aggregation',
      'IOC correlation',
      'STIX/TAXII support',
      'Real-time alerts'
    ],
    date: '2023-11-05'
  },
  {
    id: 'automation-framework',
    title: 'DevSecOps Pipeline',
    description: 'Automated security-first CI/CD pipeline with integrated vulnerability scanning.',
    image: '/images/projects/devsecops.jpg',
    technologies: ['GitHub Actions', 'Jenkins', 'SonarQube', 'Trivy', 'OWASP ZAP'],
    category: 'devops',
    status: 'completed',
    githubUrl: 'https://github.com',
    features: [
      'SAST/DAST integration',
      'Container scanning',
      'Dependency analysis',
      'Compliance checks'
    ],
    date: '2023-09-22'
  },
  {
    id: 'smart-home-controller',
    title: 'Smart Home Controller',
    description: 'Privacy-focused smart home automation hub with local processing.',
    image: '/images/projects/smart-home.jpg',
    technologies: ['Raspberry Pi', 'Python', 'Zigbee', 'MQTT', 'Vue.js'],
    category: 'iot',
    status: 'in-progress',
    githubUrl: 'https://github.com',
    features: [
      'Local processing only',
      'Multi-protocol support',
      'Voice control',
      'Energy monitoring'
    ],
    date: '2024-04-01'
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-automation', label: 'AI Automation' },
  { id: 'cyber-security', label: 'Cyber Security' },
  { id: 'cloud-security', label: 'Cloud Security' },
  { id: 'iot', label: 'IoT' },
  { id: 'devops', label: 'DevOps' },
  { id: 'web-development', label: 'Web Development' },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function searchProjects(query: string): Project[] {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(lowercaseQuery))
  );
    }
