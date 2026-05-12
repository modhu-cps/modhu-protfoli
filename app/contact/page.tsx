import { Metadata } from 'next';
import { ContactPageContent } from '@/components/sections/contact-page-content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for collaborations, projects, or just to say hello.',
};

export default function ContactPage() {
  return <ContactPageContent />;
}
