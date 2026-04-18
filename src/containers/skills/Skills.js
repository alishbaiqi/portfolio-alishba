import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import ecommercePerson from "../../assets/lottie/ecommercePerson"; // 👈 NEW ANIMATION
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">

        {/* 🔹 FRONTEND SECTION */}
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Developer"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              {skillsSection.title}
            </h1>

            <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
              {skillsSection.subTitle}
            </p>

            <SoftwareSkill />

            <div>
              {skillsSection.skills.map((skills, i) => (
                <p
                  key={i}
                  className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}
                >
                  {skills}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>

      {/* 🔥 NEW: ECOMMERCE SECTION */}
      <div className="skills-main-div" style={{ marginTop: "5rem" }}>

        <Fade left duration={1000}>
          <div className="skills-image-div">
            <DisplayLottie animationData={ecommercePerson} />
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="skills-text-div">

            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              eCommerce Expertise
            </h1>

            <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
              Managing and growing online stores with practical marketplace experience.
            </p>

            <div>
              <p className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                ➤ Amazon Product Research & Listing
              </p>
              <p className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                ➤ Shopify & Daraz Store Management
              </p>
              <p className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                ➤ FBA & Virtual Assistant Operations
              </p>
            </div>

          </div>
        </Fade>
      </div>

    </div>
  );
}