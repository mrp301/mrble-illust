import { graphql } from "relay-runtime";

export default graphql`
  query illustrationQuery($opusNo: Int!) {
    illustrationsCollection(where: { opusNo: $opusNo }, limit: 1) {
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
