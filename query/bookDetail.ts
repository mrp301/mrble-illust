import { graphql } from "relay-runtime";

export default graphql`
  query bookDetailQuery($slug: String!) {
    booksCollection(where: { slug: $slug }) {
      items {
        buy
        cover {
          title
          url
          width
          height
        }
        description {
          json
        }
        event
        page
        plateType
        price
        releaseDate
        samplePagesCollection {
          items {
            title
            url
            width
            height
          }
        }
        slug
        title
        tag
      }
    }
  }
`;
