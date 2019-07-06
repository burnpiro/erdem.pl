// @flow
import { useStaticQuery, graphql } from 'gatsby';

const useTagsList = () => {
  const { allBloggerPost } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allBloggerPost {
          group(field: labels) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allBloggerPost.group;
};

export default useTagsList;
