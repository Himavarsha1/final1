import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };
  const handleGetStartedClick = () => {
    console.log("Button clicked");
    // Add any logic you want to execute on button click
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO TALKFUSION"
              title="Best Online Language Expertise"
            />
            <p>Your passport to multilingual mastery</p>
            
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
