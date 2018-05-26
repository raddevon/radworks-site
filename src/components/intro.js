import React from 'react';

const Intro = ({ children }) => {
  return (
    <section className="intro" dangerouslySetInnerHTML={{ __html: children }} />
  );
};

export default Intro;
