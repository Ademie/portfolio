import React, { useState } from "react";
import "./about.scss";
function  About() {
  // set carousel to initial item
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "/assets/whatsapp.svg",
      title: "About Me",
      desc: "Hello, thanks for stopping by; I am a motivated front end developer seeking to use my knowledge of web developemt and soft skills to meet organizational needs.",
      img: "/assets/pass.jpg",
      name: "Adesanoye Isijola (Ademie)",
      links: "https://web.facebook.com/oluwadare.oluwatoromo",
    },
    {
      id: 2,
      icon: "/assets/linkedin.svg",
      title: "Tech Skills",
      desc: "Git || HTML || CSS || SaSS || JS || React || Wordpress",
      img: "/assets/pass.jpg",
      name: "Adesanoye Isijola (Ademie)",
      links: "https://web.facebook.com/oluwadare.oluwatoromo",
    },
    {
      id: 3,
      icon: "/assets/github.svg",
      title: "Soft Skills",
      desc: "Time Management || Interpersonal Skills || Communication || Teamwork || Creative Thinking",
      img: "/assets/pass.jpg",
      name: "Adesanoye Isijola (Ademie)",
      links: "https://web.facebook.com/oluwadare.oluwatoromo",
    },
  ];
  //   handle click funcion
  const handleClick = (direction) => {
    // on prev, if the current slide is not the first slide, then prev it. else if it is the first slide then go to the lastslide
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : //   else if the current slide is still in range then next it or go back to first slide when you reach the end
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works about" id="works">
      {/* Carousel Slider */}
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => {
          return (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <a href={d.links}>
                        <img src={d.icon} />
                      </a>
                    </div>
                    <h3>{d.title}</h3>
                    <p>{d.desc} </p>
                    <a href={d.links} style={{color:"black"}}>
                      <h4>{d.name}</h4>
                    </a>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src="assets/chevron.svg"
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/chevron.svg"
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}

export default About;
