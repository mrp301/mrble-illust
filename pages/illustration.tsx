import React, { VFC } from "react";
import { CommonHead } from "../components/CommonHead";
import { getLayout } from "../lib/getLayout";

const Illustration: WithLayout<VFC> = () => {
  return (
    <>
      <CommonHead title="Illustration" />
      <p>削除予定</p>
    </>
  );
};

Illustration.getLayout = getLayout;
export default Illustration;
