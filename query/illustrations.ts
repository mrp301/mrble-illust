import { graphql } from "relay-runtime";

export default graphql`
  query illustrationsQuery($limit: Int!) {
    illustrationsCollection(order: createDate_DESC, limit: $limit) {
      total
      items {
        createDate
        image {
          url
          width
          height
        }
        opusNo
        title
        tag
      }
    }
  }
`;
