import { graphql } from "relay-runtime";

export default graphql`
  query illustrationsListedQuery {
    illustrationsCollection(where: { listed: true }, order: createDate_DESC) {
      items {
        createDate
        image {
          url
          width
          height
        }
        opusNo
        title
        listed
      }
    }
  }
`;
