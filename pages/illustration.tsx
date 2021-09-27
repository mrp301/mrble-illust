/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/react";
import { CommonHead } from "../components/CommonHead";
import { FadeIn } from "../components/FadeIn";
import { storage } from "../lib/firebase";
import { mq } from "../styles/mediaQueries";

const list = css(
  mq({
    display: "grid",
    gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"],
    columnGap: 10,
    alignItems: "center",
    li: {
      img: {
        width: "100%",
      },
    },
  })
);

const hoge = async () => {
  const storageRef = storage.ref();
  const listRef = storageRef.root.child("drawing/");
  const res = await listRef.listAll();

  return res.items.map(async (ref) => {
    const url = await ref.getDownloadURL();
    return url;
  });
};

export default function Illustration({ posts }) {
  const [image, setImages] = useState([]);

  useEffect(() => {
    const func = async () => {
      const data = await hoge();
      console.log(data);
      data.forEach(async (item) => {
        const hoge = await item;
        setImages((image) => [...image, hoge]);
      });
    };
    func();
  }, []);

  return (
    <FadeIn>
      <CommonHead title="Illustration" />
      {!!posts.length && (
        <ul css={list}>
          {image.map((src) => (
            <li key={src}>
              <img src={src} />
            </li>
          ))}
        </ul>
      )}
    </FadeIn>
  );
}

export const getStaticProps = async () => {
  // const storageRef = storage.ref();
  // const listRef = storageRef.root.child("drawing/");
  // const res = await listRef.listAll();

  // const list = [];

  // res.items.forEach(async (ref) => {
  //   const url = await ref.getDownloadURL();
  //   list.push(url);
  // });

  return {
    props: {
      posts: "hoge",
    },
  };
};
