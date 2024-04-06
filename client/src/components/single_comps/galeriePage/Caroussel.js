import React from "react";
import ImageGallery from "react-image-gallery";
import kreuz from "../../../assets/svg/kreuz_white.svg";
import img1 from "../../../assets/pictures/galerie/image1.jpg";
import img2 from "../../../assets/pictures/galerie/image2.jpg";
import img3 from "../../../assets/pictures/galerie/image3.jpg";
import img4 from "../../../assets/pictures/galerie/image4.jpg";
import img5 from "../../../assets/pictures/galerie/image5.jpg";
import img6 from "../../../assets/pictures/galerie/image6.jpg";
import img7 from "../../../assets/pictures/galerie/image7.jpg";
import img8 from "../../../assets/pictures/galerie/image8.jpg";
import img9 from "../../../assets/pictures/galerie/image9.jpg";
import img10 from "../../../assets/pictures/galerie/image10.jpg";
import img11 from "../../../assets/pictures/galerie/image11.jpg";
import img12 from "../../../assets/pictures/galerie/image12.jpg";
import img13 from "../../../assets/pictures/galerie/image13.jpg";
import img14 from "../../../assets/pictures/galerie/image14.jpg";
import img15 from "../../../assets/pictures/galerie/image15.jpg";
import img16 from "../../../assets/pictures/galerie/image16.jpg";
function Caroussel({ setCaroussel, currIndex }) {
  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
    {
      original: img4,
      thumbnail: img4,
    },
    {
      original: img5,
      thumbnail: img5,
    },
    {
      original: img6,
      thumbnail: img6,
    },
    {
      original: img7,
      thumbnail: img7,
    },
    {
      original: img8,
      thumbnail: img8,
    },
    {
      original: img9,
      thumbnail: img9,
    },
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img11,
    },
    {
      original: img12,
      thumbnail: img12,
    },
    {
      original: img13,
      thumbnail: img13,
    },
    {
      original: img14,
      thumbnail: img14,
    },
    {
      original: img15,
      thumbnail: img15,
    },
    {
      original: img16,
      thumbnail: img16,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/80 grid z-[99]">
      <div
        className="absolute top-0 right-0 m-5 cursor-pointer z-[99]"
        onClick={() => setCaroussel(false, 0)}
      >
        <img src={kreuz} alt="" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full grid items-start justify-items-center place-content-center place-items-start">
        <div className="w-[100%] h-[100%] bg-transparent">
          <ImageGallery
            useBrowserFullscreen={true}
            startIndex={currIndex}
            showThumbnails={true}
            showPlayButton={false}
            showFullscreenButton={false}
            thumbnailPosition="left"
            items={images}
          />
        </div>
      </div>
    </div>
  );
}

export default Caroussel;
