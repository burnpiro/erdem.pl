// @flow
import type { Node as ReactNode } from 'react';

export type RenderCallback = (data: any) => ReactNode;

export type Entry = (string[]) => string;

export type WidgetFor = string => string;

export type PageContext = {
  tag: string,
  currentPage: number,
  prevPagePath: string,
  nextPagePath: string,
  hasPrevPage: boolean,
  hasNextPage: boolean,
};

export type Node = {
  slug: string,
  published: string,
  updated?: string,
  content?: string,
  title: string,
  id: string,
};

export type BloggerPage = Node;

export type BloggerPost = Node & {
  fields?: {
    tagSlugs?: Array<string>,
    postSlug: string,
    readTime: {
      text: string,
      minutes: number,
      time: number,
      words: number,
    },
  },
  labels?: Array<string>,
};

export type Edge = {
  node: BloggerPost,
};

export type Edges = Array<Edge>;

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: Array<{
      node: MarkdownRemark,
    }>,
  },
  group: {
    fieldValue: string,
    totalCount: number,
  }[],
};

export type MarkdownRemark = {
  fields: {
    slug: string,
    categorySlug?: string,
    tagSlugs?: string[],
  },
  frontmatter: {
    date: string,
    description?: string,
    category?: string,
    tags?: string[],
    title: string,
  },
  html: string,
  id: string,
};
