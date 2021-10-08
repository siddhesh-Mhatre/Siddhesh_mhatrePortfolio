import React from "react";
import img1 from "C:/porfolio/portfolio/src/images/my.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Typewriter from "typewriter-effect";
import resume from "./Resume/Sid.pdf";
function About() {
  return (
    <>
      <section className="about-me" id="about">
        <div className="container">
          <div className="heading">
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "<i>Siddhesh</i> Mhatre",
                    "Web Devloper",
                    "Designer",
                    "Leraner",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="row">
            <div className="img-div">
              <img src={img1} alt="" srcset="" />
            </div>
            <div className="left-contenr">
              <h4>
                <span>web developer, Designer </span>
              </h4>
              <p>
                To build a career in a growing organization, where I can get the
                opportunities to prove my abilities by accepting challenges,
                fulfilling the organizational goal and climbing the career
                ladder through continuous learning and commitment. Through it
                all, I've been fortunate to work with and manage great teams at
                start-ups and at enterprise companies. <br /> <br />
                Take a look around to see what
                <em className="span-light">
                  I've helped build, side projects I've explored{" "}
                </em>
                , people I've mentored, and what I've written.
              </p>
              <ul className="links">
                <a href="" style={{ color: "gray" }}>
                  {" "}
                  <li>
                    <TwitterIcon />
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/in/siddhesh-mhatre-1b44a31b1/"
                  style={{ color: "gray" }}
                >
                  {" "}
                  <li>
                    <LinkedInIcon />
                  </li>
                </a>
                <a
                  href="https://www.instagram.com/siddesh_mhatre_/?hl=en"
                  style={{ color: "gray" }}
                >
                  <li>
                    <InstagramIcon />
                  </li>
                </a>
                <a href={resume} style={{ color: "gray" }}>
                  <li>Resume</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
