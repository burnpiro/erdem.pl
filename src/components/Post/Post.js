// @flow
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { MarkdownRemark } from '../../types';

type Props = {
  post: MarkdownRemark,
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const {
    fields: { tagSlugs, readTime, slug },
  } = post;
  const {
    frontmatter: { tags, title, date },
  } = post;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        All Articles
      </Link>

      <div className={styles['post__content']}>
        <Content
          body={html}
          title={title}
          date={date}
          readTime={readTime}
        />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.title} />
      </div>
    </div>
  );
};

export default Post;
