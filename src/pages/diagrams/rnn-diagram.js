// @flow
import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import { useSiteMetadata } from '../../hooks';
import RNNProcess from '../../components/Diagrams/RNNProcess/RNNProcess';

const CustomPageComponent = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout
      title={`RNN Process Diagram - ${title}`}
      description={subtitle}
      displayCookie={false}
    >
      <Page title="Sequence-to-Sequence translation using RNNs" wide={true}>
        <RNNProcess />
      </Page>
    </Layout>
  );
};

export default CustomPageComponent;
