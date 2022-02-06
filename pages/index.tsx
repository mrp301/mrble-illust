import React, { VFC } from "react";
import { CommonHead } from "../components/CommonHead";
import { FadeIn } from "../components/FadeIn";
import { Container, Card } from "../components";
import { getLayout } from "../lib/getLayout";
import Image from "next/image";
import Link from "next/link";

import { useQuery } from "relay-hooks";
import booksQuery from "../query/books";
import { booksQuery as BooksQuery } from "../query/__generated__/booksQuery.graphql";

const Index: WithLayout<VFC> = () => {
  const { data } = useQuery<BooksQuery>(booksQuery);

  if (!data?.booksCollection) return null;

  return (
    <>
      <CommonHead title="Home" />
      <FadeIn>
        <Card>
          <Container vertical={24} horizontal={24}>
            <h2>{data.booksCollection.items[0].title}</h2>
            <Link href={`/book/detail/${data.booksCollection.items[0].slug}`} passHref>
              <a>
                <Image
                  src={data.booksCollection.items[0].cover.url}
                  width={data.booksCollection.items[0].cover.width / 2}
                  height={data.booksCollection.items[0].cover.height / 2}
                  alt={data.booksCollection.items[0].cover.title}
                  layout="intrinsic"
                />
              </a>
            </Link>
          </Container>
        </Card>
      </FadeIn>
    </>
  );
};

Index.getLayout = getLayout;
export default Index;
