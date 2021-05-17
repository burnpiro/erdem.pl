// @flow
import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import { useSiteMetadata } from '../../hooks';
import RNNWithAttention from '../../components/Diagrams/RNNWithAttention/RNNWithAttention';

const CustomPageComponent = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout
      title={`RNN Process with Attention Diagram - ${title}`}
      description={subtitle}
      displayCookie={false}
    >
      <Page title="Sequence-to-Sequence with Attention" wide={true}>
        <RNNWithAttention />
      </Page>
    </Layout>
  );
};

export default CustomPageComponent;
