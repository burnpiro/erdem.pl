// @flow
import { useStaticQuery, graphql } from 'gatsby';

const useTagsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { draft: { eq: false }, template: { eq: "post" } }
          }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          totalCount
          group(field: frontmatter___tags) {
            totalCount
            fieldValue
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useTagsList;
