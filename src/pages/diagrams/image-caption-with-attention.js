// @flow
import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import { useSiteMetadata } from '../../hooks';
import ImageWithAttention from '../../components/Diagrams/ImageWithAttention/ImageWithAttention';

const CustomPageComponent = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout
      title={`Image Captioning with Attention Diagram - ${title}`}
      description={subtitle}
      displayCookie={false}
    >
      <Page title="Image Captioning with Attention" wide={true}>
        <ImageWithAttention />
      </Page>
    </Layout>
  );
};

export default CustomPageComponent;
