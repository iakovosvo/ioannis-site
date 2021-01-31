import React from 'react';
import { graphql } from 'gatsby';

export default function Test({ data }) {
  return (
    <div>
      <h1>test</h1>
    </div>
  );
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          birthTime
        }
      }
    }
  }
`;
