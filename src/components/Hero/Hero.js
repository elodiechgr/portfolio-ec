import React, { useRef, useEffect } from "react";
import "./Hero.scss";

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
    <div className="hero">
      <video ref={videoRef} autoPlay muted loop playsInline>
        <source src="/assets/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div ref={contentRef} className="content">
        <h1 className="hero-title">
          ("Hello, World!"),
          <br /> je suis développeuse web{" "}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
