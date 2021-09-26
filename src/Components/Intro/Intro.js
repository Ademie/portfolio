import React, { useEffect, useRef } from "react";
import "../Intro/intro.scss";
import { init } from "ityped";
import Video from "../video/video_2.mp4";
import { BsDownload } from "react-icons/bs";
import { SiWhatsapp, SiGithub } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { BiChevronUpCircle } from "react-icons/bi";


function Intro() {
  // For typewriter text
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500000,
      backSpeed: 85,
      strings: ["Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      {/* background video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>
      {/* overlay on background */}
      <div className="overlay"></div>
      {/* contents */}
      {/* LEFT CONTAINER */}
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mainx.png" alt="" />
        </div>
      </div>
      {/* RIGHT CONTAINER */}
      <div className="right">
        <div className="wrapper">
          <h3>Hi I am</h3>
          <h1 style={{fontFamily: 'Ubuntu Mono'}}>Ademie</h1>
          <h3>
            FrontEnd&nbsp;<span ref={textRef}></span>
          </h3>
          <div className="socials">
            <ul>
              <li>
                <a href="https://wa.me/2348102748644">
                  <SiWhatsapp className="soc_icon" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ademie">
                  <TiSocialLinkedinCircular className="soc_icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Ademie">
                  <SiGithub className="soc_icon" />
                </a>
              </li>
            </ul>
          </div>
          <a href="#" className="resume">
            RESUME&nbsp; <BsDownload className="download" />
          </a>
        </div>
      </div>
      {/* ARROW POINTING DOWNWARDS */}
      <a href="#portfolio" className="navarrow">
        <FaRegArrowAltCircleDown/>
      </a>

       {/* ARROW POINTING UPWARDS */}
       {/* <a href="#intro" className="toparrow" >
        <BiChevronUpCircle/>
      </a> */}
    </div>
  );
}

export default Intro;
