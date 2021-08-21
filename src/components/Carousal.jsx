import { Button } from "@material-ui/core";
import { ArrowRightAltOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";

export default function Carousal({ carousal = [] }) {
  const [active, setActive] = useState(0);
  return (
    <div id="Carousal">
      <div
        className="images"
        style={{
          transform: `translateX(${active * -270 + (active ? 40 : 0)}px)`,
        }}
      >
        {carousal.map(
          ({ image, icon: Icon, title, description, link }, idx) => (
            <div key={idx} className="item" onClick={() => setActive(idx)}>
              <img src={image} alt={title} />
              <div className="overlay">
                <div className="content">
                  <Icon style={{ fontSize: 40, color: "#fff" }} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button variant="contained">
                      <p>READ MORE</p>
                      <ArrowRightAltOutlined />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="dots">
        {carousal.map((_, idx) => (
          <div key={idx} onClick={() => setActive(idx)} className="clickable">
            <div className="outline" id={idx === active ? "active" : ""}>
              <div className="white">
                <div className="dot"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
