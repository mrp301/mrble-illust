import { graphql } from "relay-runtime";

export default graphql`
  query illustrationsQuery {
    illustrationsCollection(order: createDate_DESC) {
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
