import React, { useRef, useEffect } from "react";
import "./AboutHero.scss";

const Hero = () => {
  const videoRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      videoRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`;
      contentRef.current.style.transform = `translateY(${scrollValue * 0.3}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-hero">
      <video ref={videoRef} autoPlay muted loop playsInline>
        <source src="/assets/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div ref={contentRef} className="content"></div>
    </div>
  );
};

export default Hero;
