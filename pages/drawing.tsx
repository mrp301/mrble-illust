import React, { VFC } from "react";
import { CommonHead } from "../components/CommonHead";
import { getLayout } from "../lib/getLayout";

const Drawing: WithLayout<VFC> = () => {
  return (
    <>
      <CommonHead title="drawing" />
      <p>削除予定</p>
    </>
  );
};

Drawing.getLayout = getLayout;
export default Drawing;
