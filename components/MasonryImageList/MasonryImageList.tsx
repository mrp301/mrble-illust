import React, { memo, FC } from "react";

export type ImageType = {
  url: string;
  name: string;
};

type Props = {
  images: ImageType[];
};

const MasonryImageList: FC<Props> = ({ images }) => {
  return (
    <ul className="mdc-image-list mdc-image-list--masonry my-masonry-image-list">
      {!!images.length &&
        images.map(({ url, name }, index) => (
          <li key={`${url}-${index}`} className="mdc-image-list__item">
            <img className="mdc-image-list__image" src={url} alt={name} />
          </li>
        ))}
    </ul>
  );
};

export { MasonryImageList };
