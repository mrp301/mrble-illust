import React, { VFC } from "react";
import { getLayoutDefault } from "../lib/getLayout";

const Custom404: WithLayout<VFC> = () => {
  return <p>404 Not Fond</p>;
};

Custom404.getLayout = getLayoutDefault;
export default Custom404;
