import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Langcard = ({lang,per,clr}) => {
  return <>
              <div className="progress-wrap">
                <h3>{lang}</h3>
                <ProgressBar
                  bgColor={clr}
                  width="100%"
                  height="6px"
                  labelColor="black"
                  labelAlignment="outside"
                  completed={parseFloat(per)}
                />
              </div>
  </>;
};

export default Langcard;
