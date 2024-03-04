import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css"; // Crie um arquivo CSS para estilizar o carrossel

const ImageWithNavigation = ({ title, largeImage, onClick }) => {
  return (
    <div className="image-with-navigation" onClick={onClick}>
      <img src={largeImage} alt={title} className="carousel-image" />
    </div>
  );
};

export const Gallery = (props) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Como Será?</h2>
        </div>
        <div className="row">
          <div id="portfolio" className="portfolio-items">
            {props.data ? (
              <Slider {...settings} ref={sliderRef}>
                {props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`}>
                    <ImageWithNavigation
                      title={d.title}
                      largeImage={d.largeImage}
                      onClick={() => {}}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              "Loading..."
            )}
            <button className="carousel-arrow carousel-left-arrow" onClick={goToPrev}>
              {"<"}
            </button>
            <button className="carousel-arrow carousel-right-arrow" onClick={goToNext}>
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
