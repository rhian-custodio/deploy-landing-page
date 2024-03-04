// App.js
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
// import { Services } from "./components/services";
// import { Team } from "./components/Team";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about"; 
// import { Testimonials } from "./components/testimonials";
// import { Carousel } from "./components/Carousel";
// import  slides  from "./data/carouselData.json";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery} /> 
      <About data={landingPageData.About} />
      {/*<Carousel data={landingPageData.slides} /> {/* Use the Carousel component here */}
      {/* <Services data={landingPageData.Services} />  */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} />  */}
      <Contact data={landingPageData.Contact} />
      {/* <Carousel data={slides} /> */}
    </div>
  );
};

export default App;
