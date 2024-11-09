"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const getData = async () => {
  const query = `*[_type == "mainImage"] {
    _id,
    "image1Url": image1.asset->url,
    "image2Url": image2.asset->url,
    "image3Url": image3.asset->url,
    "image4Url": image4.asset->url,
    "image5Url": image5.asset->url,
    "image6Url": image6.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
};

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="arrow-prev w-14 h-14 flex items-center justify-center ml-4 lg:ml-24 bg-black bg-opacity-30 rounded-full cursor-pointer"
  >
    <span
      className="text-2xl text-black text-opacity-30 font-bold"
      style={{
        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      }}
    >
      {"<"}
    </span>
  </div>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="arrow-next w-14 h-14 flex items-center justify-center mr-4 lg:mr-24 bg-black bg-opacity-30 rounded-full cursor-pointer"
  >
    <span
      className="text-2xl text-black text-opacity-30 font-bold"
      style={{
        clipPath: "polygon(50% 0%, 0% 50%, 50% 100%, 100% 50%)",
      }}
    >
      {">"}
    </span>
  </div>
);

const Hero: React.FC = () => {
  const [images, setImages] = useState<{ largeImages: ImageData[]; smallImages: ImageData[] }>({
    largeImages: [],
    smallImages: [],
  });
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      const imageUrls = {
        largeImages: [
          { id: 1, src: data[0].image1Url, alt: "Slide 1" },
          { id: 2, src: data[0].image2Url, alt: "Slide 2" },
          { id: 3, src: data[0].image3Url, alt: "Slide 3" },
        ],
        smallImages: [
          { id: 4, src: data[0].image4Url, alt: "Slide 4" },
          { id: 5, src: data[0].image5Url, alt: "Slide 5" },
          { id: 6, src: data[0].image6Url, alt: "Slide 6" },
        ],
      };
      setImages(imageUrls);
    };

    fetchData();
  }, []);

  const largeScreenSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "ease",
  };

  const smallScreenSettings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "ease",
  };

  return (
    <div className="relative group">
      {/* Custom Arrow Buttons for Large Screens */}
      <div className="custom-arrows absolute inset-0 z-20 flex justify-between items-center hidden lg:flex">
        <div className="arrow-prev-container pointer-events-auto">
          <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        </div>
        <div className="arrow-next-container pointer-events-auto">
          <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>

      {/* Large Screen Slider */}
      <div className="hidden lg:block">
        <Slider {...largeScreenSettings} ref={sliderRef}>
          {images.largeImages.map((image) => (
            <div key={image.id} className="relative h-[500px]">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Small and Medium Screen Slider */}
      <div className="block lg:hidden">
        <Slider {...smallScreenSettings}>
          {images.smallImages.map((image) => (
            <div key={image.id} className="relative h-[100vh]">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;


