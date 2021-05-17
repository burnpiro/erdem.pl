// @flow
import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import { useSiteMetadata } from '../../hooks';
import InputPositionEmbeddingSin from '../../components/Diagrams/InputPositionEmbeddingSin/InputPositionEmbeddingSin';

const CustomPageComponent = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout
      title={`Positional Encoding Diagram - ${title}`}
      description={subtitle}
      displayCookie={false}
    >
      <Page title="Positional Encoding in Transformers" wide={true}>
        <InputPositionEmbeddingSin />
      </Page>
    </Layout>
  );
};

export default CustomPageComponent;
