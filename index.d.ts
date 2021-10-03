export type WithLayout<P> = P & {
  getLayout: (page: ReactNode) => ReactNode;
};
