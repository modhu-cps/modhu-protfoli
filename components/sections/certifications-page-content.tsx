'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, X, CheckCircle } from 'lucide-react';
import { certifications } from '@/data/certifications';
import type { Certification } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/layout/page-transition';

export function CertificationsPageContent() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString + '-01').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 bg-white/5">
              Credentials
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Professional <span className="gradient-text">Certifications</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
              Industry-recognized certifications validating expertise in cloud security,
              cybersecurity, and emerging technologies.
            </p>
          </motion.div>

          {/* Certifications grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="glass card-3d gradient-border-thick h-full rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  {/* Certificate icon/image placeholder */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="h-16 w-16 text-primary/60" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

                    {/* Issuer badge */}
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-white/10 backdrop-blur-sm">
                        {cert.issuer}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Date info */}
                  <div className="mt-2 flex items-center gap-2 text-sm text-foreground/70">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Issued {formatDate(cert.date)}</span>
                  </div>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-white/5 text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="secondary" className="bg-white/5 text-xs">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* View details hint */}
                  <div className="mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Click to view details
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 glass card-3d gradient-border-thick rounded-2xl p-8"
          >
            <div className="grid gap-8 sm:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-bold text-foreground">{certifications.length}</div>
                <div className="mt-1 text-foreground/80 font-medium">Total Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground">5</div>
                <div className="mt-1 text-foreground/80 font-medium">Certification Providers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground">100%</div>
                <div className="mt-1 text-foreground/80 font-medium">Pass Rate</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

              {/* Modal content */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg glass card-3d gradient-border-thick rounded-2xl p-6 shadow-2xl"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>

                {/* Certificate preview */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="h-full w-full flex items-center justify-center">
                    <Award className="h-24 w-24 text-primary/60" />
                  </div>
                </div>

                {/* Details */}
                <Badge className="mb-2 bg-primary/20 text-primary border-primary/20">
                  {selectedCert.issuer}
                </Badge>
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCert.title}
                </h2>

                {selectedCert.description && (
                  <p className="mt-3 text-foreground/80">
                    {selectedCert.description}
                  </p>
                )}

                {/* Meta */}
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Issued: {formatDate(selectedCert.date)}</span>
                  </div>
                  {selectedCert.expiryDate && (
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Expires: {formatDate(selectedCert.expiryDate)}</span>
                    </div>
                  )}
                  {selectedCert.credentialId && (
                    <div className="flex items-center gap-2 text-foreground/70">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>ID: {selectedCert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Skills */}
                <div className="mt-4">
                  <p className="text-sm text-foreground/80 mb-2 font-medium">Skills validated:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-white/5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action */}
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-6"
                  >
                    <Button className="w-full bg-gradient-to-r from-primary to-accent">
                      Verify Credential
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageTransition>
  );
      }
