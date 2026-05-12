import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost, BlogPostMeta } from './types';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Ensure the blog directory exists
function ensureBlogDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): BlogPostMeta[] {
  ensureBlogDirectory();
  
  const fileNames = fs.readdirSync(postsDirectory).filter(
    (file) => file.endsWith('.mdx') || file.endsWith('.md')
  );

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.(mdx|md)$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      coverImage: data.coverImage || '/images/blog/default.jpg',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Modhu Sudhan Roy',
      category: data.category || 'General',
      tags: data.tags || [],
      readingTime: stats.text,
      featured: data.featured || false,
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDirectory();
  
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  
  let fullPath: string;
  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    content,
    coverImage: data.coverImage || '/images/blog/default.jpg',
    date: data.date || new Date().toISOString(),
    author: data.author || 'Modhu Sudhan Roy',
    category: data.category || 'General',
    tags: data.tags || [],
    readingTime: stats.text,
    featured: data.featured || false,
  };
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => 
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getFeaturedPosts(): BlogPostMeta[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.featured);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap((post) => post.tags));
  return Array.from(tags);
}

export function searchPosts(query: string): BlogPostMeta[] {
  const posts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.description.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.category.toLowerCase().includes(lowercaseQuery)
  );
    }
