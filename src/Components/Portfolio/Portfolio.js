import React, { useState, useEffect } from "react";
import { showcase, cssjs, react, wordpress } from "../../data";
import "../Portfolio/portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";

function Portfolio() {
  const [selected, setSelected] = useState("showcase");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "showcase",
      title: "Showcase",
    },
    {
      id: "cssjs",
      title: "CSS/JS",
    },
    {
      id: "react",
      title: "React/Sass",
    },
    {
      id: "wordpress",
      title: "Wordpress",
    },
  ];
  // use effect to display portfolio items
  useEffect(() => {
    switch (selected) {
      case "showcase":
        setData(showcase);
        break;
      case "cssjs":
        setData(cssjs);
        break;
      case "react":
        setData(react);
        break;
      case "wordpress":
        setData(wordpress);
        break;
      default:
        setData(showcase);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => {
          return (
            <div className="item">
              {/* <img
              src={d.img}
              alt="portfolio"
            /> */}
              <a href={d.links}>
                <img src={d.img} alt="portfolio" />
              </a>
              <h3>{d.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
