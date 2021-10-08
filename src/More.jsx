import React from "react";
import Langcard from "./componets/Langcard";
import Skill from "./Skill";
function More() {
  return (
    <>
      <section className="more" id="more">
        <div className="container">
          <div className="heading">
            <h1 className="underline">skills</h1>
          </div>

          <div className="row">
            <div className="animated-col">
              {Skill.map((cval, ind) => {
                if (cval.use === "f-end")
                  return <Langcard key={ind} {...cval} />;
                  
              })
        
              }
            </div>
            <div className="animated-col"  >
              {Skill.map((cval, ind) => {
                if (cval.use === "b-end")
                  return <Langcard key={ind} {...cval} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default More;
