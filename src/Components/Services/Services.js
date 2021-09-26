import React from "react";
import "./services.scss";
function Services() {
  const data = [
    {
      id: 1,
      name: "HTML | CSS | JS",
      title: "Templates Design",
      desc: "Transform UI designs into code. Rewriting and cutomization of web templates",
      img: "/assets/gallery/css-3.svg",

    },
    {
      id: 2,
      name: "REACT JS | SASS",
      title: "React Development",
      desc: "Able to implement functional progamming in React and communicate with APIs. Implementation of React Hooks and page routing with react-router-dom",
      img: "/assets/gallery/atom.svg",
      featured: true,
    },
    {
      id: 3,
      name: "WORDPRESS",
      title: "Wordpress Design",
      desc: "Design wordpress pages with Elementor plugin and additional CSS customization. wooCommerce design",
      img: "/assets/gallery/wordpress (1).svg",
    },
  ];
  return (
    <div className="services" id="services">
      <h1>Services</h1>
      <div className="container">
        {data.map((d) => {
          return (
            <div className={d.featured ? "card featured" : "card"}>
            {/* Added featured as an hover effect on cards */}
              <div className="top">
                <img className="user" src={d.img} alt="" />
              </div>
              <div className="center" style={{textAlign:'center'}}>
                <q > {d.desc}</q>
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
