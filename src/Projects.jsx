import React, { useState } from "react";
import Card from "./componets/Card";
import Projectlist from "./Projectlist";
function Projects() {
  const [resivedList, SetresivedList] = useState(Projectlist);
  const ProjectCate = [
    ...new Set(
      Projectlist.map((cval) => {
        return cval.categourey;
      })
    ),
    "All",
  ];

  const setCate = (cateName) => {
    if (cateName === "All") {
      return SetresivedList(Projectlist);
    }
    const updatedcate = Projectlist.filter((cval) => {
      return cval.categourey === cateName;
    });
    SetresivedList(updatedcate);
  };

  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <div className="heading">
            <h1 className="underline">Projects</h1>
          </div>
          <div className="CateButtons ">
          <div className="row">
          {ProjectCate.map((cval) => {
              return (
                <>
                  <button className="btn" onClick={() => setCate(cval)}>{cval}</button>
                </>
              );
            })}
          </div>

          </div>
          <div className="projects-cards">
            {resivedList.map((cval, ind) => {
              return <Card {...cval} key={ind} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
