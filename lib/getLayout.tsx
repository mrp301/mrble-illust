import React from "react";
import { WithMainVisual } from "../components";
import type { ReactElement } from "react";

export const getLayout = (page: ReactElement): JSX.Element => {
  return <WithMainVisual>{page}</WithMainVisual>;
};
