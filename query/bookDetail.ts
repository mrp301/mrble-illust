import { graphql } from "relay-runtime";

export default graphql`
  query bookDetailQuery($slug: String!) {
    booksCollection(where: { slug: $slug }) {
      items {
        buy
        description {
          json
        }
        event
        page
        plateType
        price
        releaseDate
        slug
        title
        tag
        ...BookViewerArea_fragment
      }
    }
  }
`;
