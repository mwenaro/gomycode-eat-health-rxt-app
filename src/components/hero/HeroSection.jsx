import React, {useState} from "react";
import Image from "./../Image";
import TextContent from "./TextContent"
import ChefABCComponent from "./ChefABCComponent";
import OvalImagesContent from "./OvalImageContent"

export default function HeroSection() {
  const [images, setImages] = useState([
    {
      src: "/images/pic1.png",
      alt: "Avocado zetu",
    },
    {
      src: "/images/pic2.png",
      alt: "Majani Image",
    },
    {
      src: "/images/pic3.png",
      alt: "Kale for the Kalenjins",
    },
  ]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 md:p-12 gap-2">
      {/* Text Content */}
      <TextContent />
      {/* Image */}
      <div > 
        <Image src={"/images/food.png"} alt="my favorite meal" />
      </div>
      {/* Oval Images Conrtainer */}
      <OvalImagesContent images={images} />

      {/* Chef ABC */}
      <ChefABCComponent />
    </div>
  );
}
