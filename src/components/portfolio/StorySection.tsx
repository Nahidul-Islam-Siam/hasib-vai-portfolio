"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

interface StorySectionProps {
  onStartNow: () => void;
}

export default function StorySection({ onStartNow }: StorySectionProps) {
  return (
    <section className="sec2" id="sec2">
      <div className="message">
        <div className="period m1">
          <img src="/img/LogoPeriod.png" alt="period logo" />
          <h3>
            I need a <span>website</span> for my <span>company</span>, PERIOD.{" "}
            <br /> We specialize in marketing eco-friendly and gender-neutral
            feminine hygiene products.
          </h3>
        </div>

        <div className="moi m2">
          <h3>
            Alright, great!
            <br /> I&apos;ll handle everything, first the <span>design</span>{" "}
            that I&apos;ll share with you. Once validated, <br />
            I&apos;ll <span>develop</span> your <span>website</span> and put it
            online!
          </h3>
          <img
            src="/img/profile.png"
            alt="Profile"
            className="rounded-full object-cover shadow-md aspect-square"
          />
        </div>

        <div className="period m3">
          <img src="/img/LogoPeriod.png" alt="period logo" />
          <h3>Perfect, when do we start :)?</h3>
        </div>
      </div>

      <div className="button">
        <a
          className="btnsec2 flex items-center gap-2 cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={onStartNow}
        >
          <p>Now!</p>
          <img src="/img/ardown.svg" alt="down arrow" />
        </a>
      </div>
    </section>
  );
}
