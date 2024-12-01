import img1 from "../media/black_sky.jpeg";
import img2 from "../media/car_explosion.jpg";
import img3 from "../media/car_light.jpg";
import img4 from "../media/gas_station.jpg";
import img5 from "../media/sea_building.jpg";
import { useState } from "react";

interface Props {
    item: string;
    index: number;
    isActive: boolean;
    handleClick: () => void;
}


const images = [img1, img2, img3, img4, img5];

const scrollToImage = (index: number) => {
  const element = document.getElementById(`item-${index}`);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};

const ImageItem = ({ item, index, isActive, handleClick }: Props) => {
  return (
    <img
      id={`item-${index}`}
      key={index}
      className={`w-[300px] h-[500px] object-cover inline-block p-4 cursor-pointer 
           filter grayscale hover:filter-none ease-in-out duration-300 
            ${
              isActive
                ? "w-[800px] scale-125 p-11 mx-20 filter-none ease-in-out duration-700"
                : "scale-100"
            } `}
      src={item}
      alt={`item-${index}`}
      onClick={handleClick}
    />
  );
};

const HorizontalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    scrollToImage(index);
  };

  return (
    <div className="relative flex items-center overflow-hidden">
      <div
        id="slider"
        className="py-10 overflow-x-scroll whitespace-nowrap scrollbar-hide"
      >
        {images.map((item, index) => (
          <ImageItem
            key={index}
            item={item}
            index={index}
            isActive={activeIndex === index}
            handleClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
