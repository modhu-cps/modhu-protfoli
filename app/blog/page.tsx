import { Metadata } from 'next';
import { getAllPosts, getAllCategories, getFeaturedPosts } from '@/lib/blog';
import { BlogPageContent } from '@/components/sections/blog-page-content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore articles on AI, cybersecurity, cloud computing, IoT, and more.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featuredPosts = getFeaturedPosts();

  return (
    <BlogPageContent
      posts={posts}
      categories={categories}
      featuredPosts={featuredPosts}
    />
  );
}
