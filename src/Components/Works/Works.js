import React, { useState } from "react";
import "./works.scss";
function Works() {
  // set carousel to initial item
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "/assets/gallery/atom.svg",
      title: "vMedia Website",
      img: "/assets/gallery/vmedia.png",
      links: "https://vmedia.netlify.app",
      desc: "React & Sass Portforlio website for a StartUp *Snapshot scroll-effect *iTyped text *Functional Components *React-hooks *React-hooks-form/yup validation *Facebook Customer Chat"
    },
    {
      id: 2,
      icon: "/assets/gallery/css-3.svg",
      title: "mini eCommerce Template",
      img: "/assets/gallery/beestore.jpg",
      links: "https://bee-store.000webhostapp.com",
      desc: "An Ecommerce website with basic shop pages, designed with HTML and CSS flexbox & JS. *User can browse through products, check product details, and visit cart",
    },
    {
      id: 3,
      icon: "/assets/gallery/atom.svg",
      title: "Hosting Company",
      img: "/assets/gallery/beehost.jpg",
      links: "https://beehost.netlify.app",
      desc: "A REACT website . *Search functionality in blog. *JSON data. *React-hooks-form&yup validation. *Facebook customer chat *React-router-hash-link smooth scrolling"
      
    },
    {
      id: 4,
      icon: "/assets/gallery/css-3.svg",
      title: "Event Landing Page",
      img: "/assets/gallery/event.png",
      links: "https://event-land.000webhostapp.com",
      desc: "A simple landing page template for an upcoming event. *HTML and CSS flexbox *CSS wavy effect animation *JS Countdown timer"
    },
    {
      id: 5,
      icon: "/assets/gallery/atom.svg",
      title: "ReactJS Chat App",
      img: "/assets/gallery/chat.png",
      links: "https://ademieschat.netlify.app",
      desc: "A REACT JS chat app connected to a chat API *Customized Chat field *User can login, create a new room, add existing user, share text and pictures. *User can create rooms and existing users on larger screens",
    },
    {
      id: 6,
      icon: "/assets/gallery/css-3.svg",
      title: "Portfolio Website",
      img: "/assets/gallery/personal.png",
      links: "https://ademie.netlify.app",
      desc: "My first portfolio site *HTML, CSS Flexbox and JS *Navbar drop on scroll *Embedded contact form, instant messaging to gmail inbox"
    },
    {
      id: 7,
      icon: "/assets/gallery/wordpress (1).svg",
      title: "Finance Company site",
      img: "/assets/gallery/ark.png",
      links: "http://ademie.epizy.com",
      desc: "Wordpress website *Airi theme *Elementor plugin *Custom CSS"
    },
    {
      id: 8,
      icon: "/assets/gallery/wordpress (1).svg",
      title: "wooCommerce Store",
      img: "/assets/gallery/onestop.png",
      links: "http://onestop.rf.gd",
      desc: "Wordpress wooCommerce template *Elementor plugin *Custom CSS *Paypal payment method *Order tracking"
    },
  ];
  //   handle click funcion
  const handleClick = (direction) => {
    // on prev, if the current slide is not the first slide, then prev it. else if it is the first slide then go to the lastslide
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 6)
      : //   else if the current slide is still in range then next it or go back to first slide when you reach the end
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
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
                      {/* <img src={d.icon} alt="" /> */}
                      <a href={d.links}>
                        <img src={d.icon} alt="portfolio"/>
                      </a>
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc} </p>
                    <span>{d.links}</span>
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

export default Works;
