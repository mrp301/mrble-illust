import { useState } from "react";
import { BookViewerArea_fragment$data } from "./__generated__/BookViewerArea_fragment.graphql";

type BookData = Pick<BookViewerArea_fragment$data, "cover" | "samplePagesCollection">;

type BookViewerData = {
  title: string;
  url: string;
};

type ConvertBookData = (bookData: BookData) => {
  bookViewerData: BookViewerData[];
};

export const convertBookData: ConvertBookData = (bookData) => {
  const bookViewerData = [
    { title: bookData.cover.title, url: bookData.cover.url },
    ...bookData.samplePagesCollection.items.map(({ title, url }) => ({
      title,
      url,
    })),
  ];

  return { bookViewerData };
};

type UseBookViewer = (bookData: BookData) => {
  bookViewerData: BookViewerData[];
  currentPage: number;
  handleChange: (pageNo: number) => void;
  handleNext: () => void;
  handleBack: () => void;
};

export const useBookViewer: UseBookViewer = (bookData) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { bookViewerData } = convertBookData(bookData);

  const handleChange = (pageNo: number): void => {
    setCurrentPage(pageNo);
  };

  const handleNext = (): void => {
    setCurrentPage((pageNo) => (bookViewerData.length === pageNo + 1 ? 0 : pageNo + 1));
  };

  const handleBack = (): void => {
    setCurrentPage((pageNo) => (pageNo - 1 < 0 ? bookViewerData.length - 1 : pageNo - 1));
  };

  return {
    bookViewerData,
    currentPage,
    handleChange,
    handleNext,
    handleBack,
  };
};
