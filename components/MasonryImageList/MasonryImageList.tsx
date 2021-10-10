import React, { memo, FC } from "react";

export type ImageType = {
  url: string;
  name: string;
};

type Props = {
  images: ImageType[];
};

const MasonryImageList: FC<Props> = memo(({ images }) => {
  return (
    <ul className="mdc-image-list mdc-image-list--masonry my-masonry-image-list">
      {!!images.length &&
        images.map(({ url, name }, index) => (
          <li key={`${url}-${index}`} className="mdc-image-list__item">
            <div className="mdc-image-list__image">
              <img src={url} alt={name} />
            </div>
          </li>
        ))}
    </ul>
  );
});

export { MasonryImageList };
