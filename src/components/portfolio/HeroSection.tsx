"use client";

import React, { useEffect, useRef } from "react";
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
  const backRef = useRef<HTMLDivElement>(null);
  const [slideIdx, setSlideIdx] = React.useState(0);
  const slides = ["/img/Champ1.png", "/img/Byka1.png", "/img/Noje 1.png"];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % slides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Mousemove parallax effect on background ambient glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el1 = document.querySelector<HTMLElement>(".hero-glow-1");
      const el2 = document.querySelector<HTMLElement>(".hero-glow-2");

      const offsetX = (e.clientX - window.innerWidth / 2) / 35;
      const offsetY = (e.clientY - window.innerHeight / 2) / 35;

      if (el1) el1.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      if (el2) el2.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
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

      {/* Mobile profile avatar at the top */}
      <img
        src="/img/profile.png"
        alt="Hasib"
        className="hero-mobile-avatar"
      />

      {/* Ambient background visual glows */}
      <div className="hero-glow-1 absolute -top-16 -right-16 w-96 h-96 rounded-full bg-[#8A35EC]/10 blur-3xl pointer-events-none" />
      <div className="hero-glow-2 absolute -bottom-20 left-12 w-80 h-80 rounded-full bg-[#8A35EC]/5 blur-3xl pointer-events-none" />

      <div className={`s1 ${isLoaded ? "s1content" : ""}`}>
        <div className="texts1 anim-typewriter relative">
          <div className="orange" />
          <div className="line line1">
            <p>01</p>
            <div className="textcontain">
              <h2>
                Hello, I&apos;m <span>Hasib</span>!
              </h2>
              <div className="hide" />
            </div>
          </div>
          <div className="line line2">
            <p>02</p>
            <div className="textcontain">
              <h2 className="whitespace-normal md:!whitespace-nowrap">
                I <span>design</span>{" "}
                <img
                  src="/img/design.svg"
                  alt="design"
                  className="!inline-block !align-baseline h-[0.75em] w-auto mx-1.5 translate-y-[2px]"
                />{" "}
                and <span>develop</span>{" "}
                <img
                  src="/img/laptop.svg"
                  alt="laptop"
                  className="!inline-block !align-baseline h-[0.75em] w-auto mx-1.5 translate-y-[2px]"
                />
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

        {/* Mobile laptop mockup slider */}
        <div className="slider">
          <div className="slides">
            {slides.map((src, idx) => (
              <div
                key={src}
                className={`slide ${idx === slideIdx ? "active" : ""}`}
              >
                <img src={src} alt={`Project preview ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Learn more CTA button */}
        <div className="btnsec1-wrap">
          <a
            className="btnsec1"
            onClick={onLearnMore}
          >
            <p>Learn more</p>
            <img src="/img/ardown.svg" alt="scroll down" />
          </a>
        </div>
      </div>
    </section>
  );
}
