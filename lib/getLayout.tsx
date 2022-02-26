import React from "react";
import { WithMainVisual, LayoutDefault } from "@/components/common";
import type { ReactElement } from "react";

export const getLayout = (page: ReactElement): JSX.Element => {
  return <WithMainVisual>{page}</WithMainVisual>;
};

export const getLayoutDefault = (page: ReactElement): JSX.Element => {
  return <LayoutDefault>{page}</LayoutDefault>;
};
