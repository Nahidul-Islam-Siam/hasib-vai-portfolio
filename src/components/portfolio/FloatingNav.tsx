"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, ScrollToPlugin);
}

interface FloatingNavProps {
  activeSection: "home" | "projects" | "bio";
  setActiveSection: (sec: "home" | "projects" | "bio") => void;
  isLoaded: boolean;
}

export default function FloatingNav({
  activeSection,
  setActiveSection,
  isLoaded,
}: FloatingNavProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Draggable.create(".men", {
        trigger: ".drag",
        inertia: true,
        bounds: "body",
      });
    }
  }, []);

  const scrollTo = (target: string, sec: "home" | "projects" | "bio") => {
    setActiveSection(sec);
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetX: 0 },
      onStart: () => {
        document.documentElement.style.scrollBehavior = "auto";
        const menEl = document.querySelector(".men");
        menEl?.classList.add("click");
      },
      onComplete: () => {
        document.documentElement.style.scrollBehavior = "smooth";
        const menEl = document.querySelector(".men");
        menEl?.classList.remove("click");
      },
    });
  };

  return (
    <div className={`menu ${isLoaded ? "menuh" : ""}`}>
      <Image
        id="imgprofil"
        src="/img/profile.png"
        alt="Portfolio Logo"
        width={150}
        height={150}
        className="rounded-full object-cover shadow-sm transition-transform duration-300 hover:scale-105"
        priority
      />

      <div className="men">
        <a
          onClick={() => scrollTo(".sec1", "home")}
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
        >
          <span className="nav-icon-wrap">
            <img
              src={activeSection === "home" ? "/img/acca.svg" : "/img/acc.svg"}
              alt="home"
            />
          </span>
          <span className="nav-label">Home</span>
        </a>

        <a
          onClick={() => scrollTo("#realisation", "projects")}
          className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
        >
          <span className="nav-icon-wrap">
            <img
              src={activeSection === "projects" ? "/img/reaa.svg" : "/img/rea.svg"}
              alt="projects"
            />
          </span>
          <span className="nav-label">Projects</span>
        </a>

        <a
          onClick={() => scrollTo(".sec6", "bio")}
          className={`nav-link ${activeSection === "bio" ? "active" : ""}`}
          style={{ cursor: "pointer" }}
        >
          <span className="nav-icon-wrap">
            <img
              src={activeSection === "bio" ? "/img/bioa.svg" : "/img/bio.svg"}
              alt="biography"
            />
          </span>
          <span className="nav-label">About Me</span>
        </a>
      </div>


      <div className="reseaux">
        <a
          className="rleft"
          href="https://www.instagram.com/brice.web/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/reseaux/in.svg" alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/brice-clain-853852189/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/reseaux/ln.svg" alt="linkedin" />
        </a>
        <a
          className="rleft"
          href="https://www.tiktok.com/@brice.web"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/reseaux/tt.svg" alt="tiktok" />
        </a>
        <a
          href="https://www.behance.net/briceclain"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/img/reseaux/yt.svg" alt="behance" />
        </a>
      </div>
    </div>
  );
}
