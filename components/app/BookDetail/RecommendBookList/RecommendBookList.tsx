import React, { FC } from "react";
import { BookList } from "../../../common";
import { graphql, useFragment } from "react-relay";
import { RecommendBookList_fragment$key } from "./__generated__/RecommendBookList_fragment.graphql";

const fragment = graphql`
  fragment RecommendBookList_fragment on BooksCollection {
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
`;

type Props = {
  fragmentRef: RecommendBookList_fragment$key;
};

const RecommendBookList: FC<Props> = ({ fragmentRef }) => {
  const bookListData = useFragment(fragment, fragmentRef);
  const convertBookListData = bookListData.items.map((item) => ({
    ...item,
  }));

  return <BookList bookListData={convertBookListData} />;
};

export { RecommendBookList };
