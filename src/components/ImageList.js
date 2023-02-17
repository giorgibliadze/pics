import "./ImageList.css";

import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const remderdImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return <div className="image-list">{remderdImages}</div>;
}

export default ImageList;
