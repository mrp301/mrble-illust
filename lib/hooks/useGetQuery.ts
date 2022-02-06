import { useRouter } from "next/router";

export const useGetQuery = (query: string): string => {
  const router = useRouter();
  const parsedUrlQuery = router.query[query];

  return typeof parsedUrlQuery === "string" ? parsedUrlQuery : "";
};
