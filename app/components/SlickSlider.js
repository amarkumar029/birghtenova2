"use client"; // Ensure client-side rendering

import dynamic from "next/dynamic";
import Image from "next/image"; // Import Next.js Image
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <Slider {...settings}>
        <div className="p-4">
          <Image
            src="/banner.jpg"
            alt="slider"
            width={800} // Fixed width
            height={400} // Fixed height
            priority
            className="rounded-md shadow-lg w-full"
          />
        </div>
        <div className="p-4">
          <Image
            src="/banner.jpg"
            alt="slider"
            width={800}
            height={400}
            priority
            className="rounded-md shadow-lg w-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;