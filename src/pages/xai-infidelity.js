// @flow
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import XAIInfidelity from '../components/XAIInfidelity';
import { useSiteMetadata } from '../hooks';

const ObjectDetection = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout
      title={`Infidelity Metric step by step - ${title}`}
      description={subtitle}
    >
      <Sidebar slim={true} />
      <Page title="How infidelity metric works?" wide={true}>
        <XAIInfidelity />
      </Page>
    </Layout>
  );
};

export default ObjectDetection;
