"use client"; // Ensure it's used in client-side rendering

import dynamic from "next/dynamic";
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
    <div className="container mx-auto px-4">
      <Slider {...settings}>
        <div className="p-4">
            {/* <div className="bg-blue-500 text-white p-10 rounded-lg shadow-lg">Slide 1</div> */}
            <Image
                src="/header.jpeg"
                alt="slder"
                width={100%}
                height={400}
                priority
                className="rounded-md shadow-lg w-full max-w-md"
            />
        </div>
        <div className="p-4">
          {/* <div className="bg-green-500 text-white p-10 rounded-lg shadow-lg">Slide 2</div> */}
            <Image
                src="/header.jpeg"
                alt="slder"
                width={100%}
                height={400}
                priority
                className="rounded-md shadow-lg w-full max-w-md"
            />
        </div>
        <div className="p-4">
          {/* <div className="bg-red-500 text-white p-10 rounded-lg shadow-lg">Slide 3</div> */}
        </div>
        <div className="p-4">
          {/* <div className="bg-purple-500 text-white p-10 rounded-lg shadow-lg">Slide 4</div> */}
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;