import React, { useEffect, useState } from "react";
import "./work_carousel.css";


const Work_Carousel = ({ workIn, currentComp, workNames, workImage }) => {




  return (
    <div className="Work_Carousel">
      <div className="inner-work-carosuel">
        {workNames?.map((workDetail, index) => {
          {/* console.log(workImages[index]) */}
          return (
            <div className="work-card-container" key={index}>
              <div className="work-name-container">{workDetail}</div>
              <div className="work-image-container">{workImage[index]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work_Carousel;
