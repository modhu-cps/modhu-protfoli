import { Metadata } from 'next';
import { CertificationsPageContent } from '@/components/sections/certifications-page-content';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Professional certifications in cloud security, cybersecurity, and AI/ML technologies.',
};

export default function CertificationsPage() {
  return <CertificationsPageContent />;
}
