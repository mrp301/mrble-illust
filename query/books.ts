import { graphql } from "relay-runtime";

export default graphql`
  query booksQuery {
    booksCollection {
      items {
        title
        slug
        cover {
          title
          url
          width
          height
        }
      }
    }
  }
`;
