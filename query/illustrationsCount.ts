import { graphql } from "relay-runtime";

export default graphql`
  query illustrationsCountQuery {
    illustrationsCollection {
      total
    }
  }
`;
