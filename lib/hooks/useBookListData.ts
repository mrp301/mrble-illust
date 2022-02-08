import { useQuery } from "relay-hooks";
import booksQuery from "../../query/books";
import { booksQuery as BooksQuery } from "../../query/__generated__/booksQuery.graphql";
import { BookListItemType } from "../../components/Book";
import dayjs from "dayjs";

type UseBookListData = () => {
  bookListData: BookListItemType[] | undefined;
  isLoading: boolean;
};

export const useBookListData: UseBookListData = () => {
  const { data } = useQuery<BooksQuery>(booksQuery);
  const isLoading = !data?.booksCollection;

  const bookListData: BookListItemType[] = data?.booksCollection.items.map(
    (bookData) => ({
      title: bookData.title,
      slug: bookData.slug,
      cover: {
        url: bookData.cover.url,
        width: bookData.cover.width,
        height: bookData.cover.height,
      },
      event: bookData.event,
      releaseDate: dayjs(bookData.releaseDate).format("YYYY年M月D日"),
    })
  );

  return { bookListData, isLoading };
};
