import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { AiFillStar } from "react-icons/ai";
import "./PinterestGallery.css";

const PinterestGallery = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://www.odessayazilim.com/assets/images/projects-two/projects-1.jpg",
      title: "Image 1",
    },
    {
      id: 2,
      src: "https://www.odessayazilim.com/assets/images/projects-two/projects-3.jpg",
      title: "Image 2",
    },
    {
      id: 3,
      src: "https://www.odessayazilim.com/assets/images/projects-two/projects-4.jpg",
      title: "Image 3",
    },
    {
      id: 4,
      src: "https://www.odessayazilim.com/assets/images/projects-two/projects-4.jpg",
      title: "Image 4",
    },
    {
      id: 5,
      src: "https://www.odessayazilim.com/assets/images/projects-two/projects-2.jpg",
      title: "Image 5",
    },
  ]);

  const breakpointColumnsObj = {
    default: 4,
    1800: 3,
    900: 2,
    800: 1,
  };

  return (
    <div className="pinterest-gallery">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.title} />
            <div className="overlay">
              <AiFillStar className="favorite-icon" />
              <p>{image.title}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default PinterestGallery;
