import React from "react";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image, index) => {
    return <ImageShow image={image} key={index} />;
  });

  return <div className="display-image">{renderedImages} </div>;
}

export default ImageList;
