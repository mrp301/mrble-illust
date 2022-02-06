import { graphql } from "relay-runtime";

export default graphql`
  query booksQuery {
    booksCollection {
      items {
        title
        page
        cover {
          url
          width
          height
        }
      }
    }
  }
`;

//   fragment books on BooksCollection {
//     items {
//       title
//       page
//       cover {
//         url
//         width
//         height
//       }
//     }
//   }
// `;
