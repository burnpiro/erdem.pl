// @flow
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Detector from '../components/Detector';
import { useSiteMetadata } from '../hooks';

const ObjectDetection = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Object Detection TF2 - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Simple Detector">
        <Detector />
      </Page>
    </Layout>
  );
};

export default ObjectDetection;
