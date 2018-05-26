import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import styles from './header.sass';

import logoUrl from '../../public/static/images/radworks-logo.svg';

const Header = ({ data }) => (
  <header>
    <h1>
      <Link to="/">
        <img src={logoUrl} alt="RadWorks logo" />
      </Link>
    </h1>
  </header>
);

export default Header;
