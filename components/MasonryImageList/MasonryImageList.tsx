import React, { memo, FC } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageList";

export type ImageType = {
  url: string;
  name: string;
};

type Props = {
  images: ImageType[];
};

const MasonryImageList: FC<Props> = memo(({ images }) => {
  return (
    <ImageList sx={{ width: 500, height: 450 }} variant="standard" cols={2} gap={8}>
      {!!images.length &&
        images.map(({ url, name }, index) => (
          <ImageListItem key={`${url}-${index}`}>
            <Image
              src={url}
              alt={name}
              width={500}
              height={450}
              layout="responsive"
              objectFit="cover"
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
});

export { MasonryImageList };

{
  /* <ul className="mdc-image-list mdc-image-list--masonry my-masonry-image-list">
{!!images.length &&
  images.map(({ url, name }, index) => (
    <li key={`${url}-${index}`} className="mdc-image-list__item">
      <div className="mdc-image-list__image">
        <img src={url} alt={name} />
        {/* <Image
          unoptimized={process.env.ENVIRONMENT !== "PRODUCTION"}
          src={url}
          alt={name}
          layout="fill"
          objectFit="contain"
        /> */
}
//       </div>
//     </li>
//   ))}
// </ul> */}
