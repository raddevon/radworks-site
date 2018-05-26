import React from 'react';

import styles from './intro.sass';

const Intro = ({ children }) => {
  return (
    <section className="intro">
      <h2>Web Consulting for&nbsp;Startups and&nbsp;Bootstrappers</h2>
      <div dangerouslySetInnerHTML={{ __html: children }} />
    </section>
  );
};

export default Intro;
