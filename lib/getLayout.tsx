import { WithMainVisual } from "../components";
import type { ReactElement } from "react";

export const getLayout = (page: ReactElement) => {
  return <WithMainVisual>{page}</WithMainVisual>;
};
