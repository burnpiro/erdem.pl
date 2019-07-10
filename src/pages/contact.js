// @flow
import React from 'react';
import { Formik, Field, Form } from 'formik';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import ContactForm from '../components/ContactForm';

const NotFoundTemplate = () => {
  const { title, subtitle, contactFormUrl } = useSiteMetadata();

  return (
    <Layout title={`Contact Form - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Contact Form">
        <ContactForm url={contactFormUrl} />
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
