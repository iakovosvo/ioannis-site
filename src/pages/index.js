import React from 'react';
import { graphql } from 'gatsby';

export default function Home({ data }) {
  return (
    <div>
      <div>
        <h1>
          Main page
        </h1>
        <h4>
          {data.allMarkdownRemark.totalCount}
          {' '}
          Posts
        </h4>
        {data.allMarkdownRemark.edges.map(({ node: { frontmatter, excerpt, id } }) => (
          <div key={id}>
            <h3>{frontmatter.title}</h3>
            <p>{excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC} ) {
    totalCount
    edges {
      node {
        id
        headings {
          value
        }
        excerpt
        frontmatter {
          title
          date
        }
        html
      }
    }
  }
  }
`;
