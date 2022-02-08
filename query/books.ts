import { graphql } from "relay-runtime";

export default graphql`
  query booksQuery {
    booksCollection(order: releaseDate_DESC) {
      items {
        title
        slug
        event
        releaseDate
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
