'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageTransition } from '@/components/layout/page-transition';

interface BlogPageContentProps {
  posts: BlogPostMeta[];
  categories: string[];
  featuredPosts: BlogPostMeta[];
}

export function BlogPageContent({ posts, categories, featuredPosts }: BlogPageContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [posts, searchQuery, activeCategory]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
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
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 bg-white/5">
              Blog
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Thoughts & <span className="gradient-text">Insights</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
              Exploring the intersection of AI, security, and technology.
              Deep dives, tutorials, and industry insights.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 space-y-6"
          >
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/5 border-white/10 h-12 rounded-xl"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={activeCategory === 'All' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory('All')}
                className={
                  activeCategory === 'All'
                    ? 'bg-gradient-to-r from-primary to-accent'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={
                    activeCategory === category
                      ? 'bg-gradient-to-r from-primary to-accent'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Featured post */}
          {featuredPosts.length > 0 && activeCategory === 'All' && searchQuery === '' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                Featured Article
              </h2>
              <Link href={`/blog/${featuredPosts[0].slug}`}>
                <article className="group glass card-3d gradient-border-thick rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="relative aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl font-bold text-white/10">
                          {featuredPosts[0].title.charAt(0)}
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          {featuredPosts[0].category}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(featuredPosts[0].date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPosts[0].readingTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {featuredPosts[0].title}
                      </h3>
                      <p className="mt-3 text-foreground/80 line-clamp-3">
                        {featuredPosts[0].description}
                      </p>
                      <div className="mt-4 flex items-center text-primary font-semibold">
                        Read article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          )}

          {/* Posts grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="glass card-3d gradient-border-thick h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_15px_rgba(139,92,246,0.25)]">
                      {/* Image */}
                      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl font-bold text-white/10">
                            {post.title.charAt(0)}
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                          <Badge variant="secondary" className="bg-white/5">
                            {post.category}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readingTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-foreground/80 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-muted-foreground flex items-center gap-1"
                            >
                              <Tag className="h-3 w-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 text-sm text-muted-foreground">
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4 bg-white/5 border-white/10"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
                    }
