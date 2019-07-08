// @flow
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { BloggerPost } from '../../types';

type Props = {
  post: BloggerPost,
};

const Post = ({ post }: Props) => {
  const { content } = post;
  const {
    slug,
    fields: { tagSlugs, readTime },
  } = post;
  const { labels, title, published } = post;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        All Articles
      </Link>

      <div className={styles['post__content']}>
        <Content
          body={content}
          title={title}
          date={published}
          readTime={readTime}
        />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={published} />
        {labels && tagSlugs && <Tags tags={labels} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.title} />
      </div>
    </div>
  );
};

export default Post;
