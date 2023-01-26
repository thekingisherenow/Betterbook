import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img alt="banner" loading="lazy" src="https://iili.io/HcdPcX9.jpg" />
        </div>
        <div>
          <img alt="banner" loading="lazy" src="https://iili.io/HcdiIQ1.jpg" />
        </div>
        <div>
          <img alt="banner" loading="lazy" src="https://iili.io/HcdizhP.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
