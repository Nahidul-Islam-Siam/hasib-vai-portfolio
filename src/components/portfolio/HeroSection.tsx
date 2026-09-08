"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

interface HeroSectionProps {
  onLearnMore: () => void;
  isLoaded: boolean;
}

export default function HeroSection({
  onLearnMore,
  isLoaded,
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const backRef = useRef<HTMLDivElement>(null);

  const slides = [
    { src: "/img/Noje 1.png", alt: "Project Noje" },
    { src: "/img/Champ1.png", alt: "Project Champ" },
    { src: "/img/Byka1.png", alt: "Project Byka" },
  ];

  // Slide rotation every 3 seconds matching Brice Clain
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + direction;
        if (next >= slides.length || next < 0) {
          const newDir = -direction;
          setDirection(newDir);
          return prev + newDir * 1;
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [direction, slides.length]);

  // Mousemove parallax effect on background elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el1 = document.querySelector<HTMLElement>(".item1");
      const el2 = document.querySelector<HTMLElement>(".item2");
      const el3 = document.querySelector<HTMLElement>(".item3");
      const el4 = document.querySelector<HTMLElement>(".item4");
      const el5 = document.querySelector<HTMLElement>(".item5");
      const el6 = document.querySelector<HTMLElement>(".item6");
      const el7 = document.querySelector<HTMLElement>(".item7");
      const el8 = document.querySelector<HTMLElement>(".item8");

      const offsetX = e.clientX;
      if (el1) el1.style.marginLeft = `${-offsetX / 60.5}px`;
      if (el2) el2.style.marginTop = `${offsetX / 60.2}px`;
      if (el3) el3.style.marginTop = `${offsetX / 60.7}px`;
      if (el4) el4.style.marginTop = `${-offsetX / 64.3}px`;
      if (el5) el5.style.marginLeft = `${-offsetX / 67.6}px`;
      if (el6) el6.style.marginLeft = `${offsetX / 65.4}px`;
      if (el7) el7.style.marginLeft = `${-offsetX / 60}px`;
      if (el8) el8.style.marginLeft = `${offsetX / 60.7}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="sec1" id="sec1">
      <div className="back" ref={backRef}>
        <div className="backbottom">
          <span />
        </div>
        <div className="item1" />
        <div className="item2" />
        <div className="item3" />
        <div className="item4" />
        <div className="item5" />
        <div className="item6" />
        <div className="item7" />
        <div className="item8" />
      </div>

      <img id="imgprofil" src="/img/profile.png" alt="Profile" />

      <div className={`s1 ${isLoaded ? "s1content" : ""}`}>
        <div className="orange" />
        <div className="texts1 anim-typewriter">
          <div className="line line1">
            <p>01</p>
            <div className="textcontain">
              <h2>
                Hello, I&apos;m <span>Brice</span>!
              </h2>
              <div className="hide" />
            </div>
          </div>
          <div className="line line2">
            <p>02</p>
            <div className="textcontain">
              <h2>
                I <span>design</span>{" "}
                <img src="/img/design.svg" alt="design" /> and{" "}
                <span>develop</span>{" "}
                <img src="/img/laptop.svg" alt="laptop" />
              </h2>
              <div className="hide" />
            </div>
          </div>
          <div className="line line3">
            <p>03</p>
            <div className="textcontain">
              <h2>websites.</h2>
              <div className="hide" />
            </div>
          </div>
        </div>

        <h4>I also design your brand image, logo...</h4>

        <div className="slider">
          <div className="slides">
            {slides.map((slide, index) => {
              let className = "slide";
              if (index === currentSlide) {
                className += " active";
              } else if (
                index ===
                (currentSlide - direction + slides.length) % slides.length
              ) {
                className += " previous";
              }
              return (
                <div key={slide.src} className={className}>
                  <img src={slide.src} alt={slide.alt} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <a
        className="btnsec1"
        onClick={onLearnMore}
        style={{ cursor: "pointer" }}
      >
        <p>Learn more</p>
        <img src="/img/ardown.svg" alt="scroll down" />
      </a>
    </section>
  );
}
