import React from 'react';
import Link from 'gatsby-link';
import Intro from '../components/intro';
import LeadForm from '../components/form';

const IndexPage = ({ data }) => (
  <div>
    <Intro>{data.intro.html}</Intro>
    <LeadForm />
  </div>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    intro: markdownRemark(fileAbsolutePath: { glob: "**/*/intro.md" }) {
      html
    }
  }
`;
