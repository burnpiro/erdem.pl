// @flow
import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import { useSiteMetadata } from '../../hooks';
import AttentionLayer from '../../components/Diagrams/AttentionLayer/AttentionLayer';

const CustomPageComponent = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout
      title={`Attention Layer Diagram - ${title}`}
      description={subtitle}
      displayCookie={false}
    >
      <Page title="Abstracting Attention Layer" wide={true}>
        <AttentionLayer />
      </Page>
    </Layout>
  );
};

export default CustomPageComponent;
