import React from "react";
 
const Card = ({img,heading,description,technology,url	}) => {
  return (
    <>
      <div className="card" >
        <div className="overlay">
          <h1><a href={url}>Webdevlopment</a></h1>
        </div>

        <div className="project-img">
          <img srcSet={img} alt="" />
        </div>
        <div className="project-caption">
          <h4>{heading}</h4>
          <p>
          {description}
          </p>
          <h6>{technology}</h6>
        </div>
      </div>
    </>
  );
};

export default Card;
