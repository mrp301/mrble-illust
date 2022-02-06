import { graphql } from "relay-runtime";

export default graphql`
  query bookDetailQuery($slug: String!) {
    booksCollection(where: { slug: $slug }) {
      items {
        title
        slug
        page
        releaseDate
        event
        page
        plateType
        price
        cover {
          title
          url
          width
          height
        }
        description {
          json
        }
      }
    }
  }
`;
