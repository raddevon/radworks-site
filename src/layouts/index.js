import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import styles from './global.sass';

import Header from '../components/header';

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
        ]}
      />
      <div className="container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children()}</main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
