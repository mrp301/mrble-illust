import { useQuery } from "relay-hooks";
import booksQuery from "@/query/books";
import { booksQuery as BooksQuery } from "@/query/__generated__/booksQuery.graphql";
import { BookListItemType } from "@/components/common/Book";

type UseBookListData = () => {
  bookListData: BookListItemType[] | undefined;
  isLoading: boolean;
};

export const useBookListData: UseBookListData = () => {
  const { data } = useQuery<BooksQuery>(booksQuery);
  const isLoading = !data?.booksCollection;

  const bookListData: BookListItemType[] = data?.booksCollection.items.map(
    (bookData) => ({ ...bookData })
  );

  return { bookListData, isLoading };
};
