"use client";

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Preloader from "@/components/portfolio/Preloader";
import ProgressBar from "@/components/portfolio/ProgressBar";
import FloatingNav from "@/components/portfolio/FloatingNav";
import ContactDrawer from "@/components/portfolio/ContactDrawer";
import HeroSection from "@/components/portfolio/HeroSection";
import StickyTitle from "@/components/portfolio/StickyTitle";
import StorySection from "@/components/portfolio/StorySection";
import SolutionSection from "@/components/portfolio/SolutionSection";
import MockupShowcase from "@/components/portfolio/MockupShowcase";
import FaqSection from "@/components/portfolio/FaqSection";
import ProjectsCarousel from "@/components/portfolio/ProjectsCarousel";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import PolicyModal, { ModalType } from "@/components/portfolio/PolicyModal";
import CookieBanner from "@/components/portfolio/CookieBanner";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default function PortfolioPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<"home" | "projects" | "bio">("home");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  useEffect(() => {
    // Initial loader sequence matching Brice Clain
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.documentElement.style.scrollBehavior = "smooth";
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Refresh triggers after page renders
    const ctx = gsap.context(() => {
      const anim = gsap.from(".title", { opacity: 0, y: -100, duration: 0.2 });
      const anim2 = gsap.from(".m1", { opacity: 0, x: -100, duration: 0.2 });
      const anim3 = gsap.from(".m2", { opacity: 0, x: 100, duration: 0.2 });
      const anim4 = gsap.from(".m3", { opacity: 0, x: -100, duration: 0.2 });
      const anim5 = gsap.from(".mac", { y: 100, opacity: 0, duration: 0.3 });
      const anim51 = gsap.from(".mobile", { y: 100, opacity: 0, duration: 0.3 });
      const anim6 = gsap.from("#pe1", { y: -100, opacity: 0, duration: 0.5 });
      const anim7 = gsap.from(".sec3", {
        scale: 0.6,
        y: 100,
        opacity: 0.4,
        duration: 0.4,
      });
      const anim8 = gsap.to(".ens", {
        scale: 0.9,
        y: -80,
        opacity: 0.9,
        duration: 0.5,
      });
      const anim9 = gsap.from("#solu", {
        scale: 2,
        y: 40,
        opacity: 0,
        duration: 0.5,
      });
      const faq = gsap.from(".faq1 p", {
        y: 100,
        ease: "power4.out",
        delay: 0.2,
        opacity: 0,
        skewY: 7,
        stagger: { amount: 0.3 },
        duration: 0.5,
      });
      const anal = gsap.from(".yo p", {
        y: 100,
        ease: "power4.out",
        delay: 0.2,
        opacity: 0,
        skewY: 7,
        stagger: { amount: 0.3 },
        duration: 0.5,
      });

      anim.pause(0);
      anim2.pause(0);
      anim3.pause(0);
      anim4.pause(0);
      anim5.pause(0);
      anim51.pause(0);
      anim6.pause(0);
      anim7.pause(0);
      anim8.pause(0);
      anim9.pause(0);
      faq.pause(0);
      anal.pause(0);

      // Section 2 ScrollTriggers
      ScrollTrigger.create({
        trigger: ".sec2",
        start: "top 50%",
        onEnter: () => {
          anim.play();
          const titleEl = document.querySelector(".title");
          titleEl?.classList.remove(
            "title1",
            "title2",
            "title3",
            "title4",
            "title5"
          );
          titleEl?.classList.add("title1");
        },
        onLeaveBack: () => {
          anim.reverse();
          document.querySelector(".title")?.classList.remove("title1");
        },
      });

      ScrollTrigger.create({
        trigger: ".sec2",
        start: "top 50%",
        onEnter: () => anim2.play(),
      });

      ScrollTrigger.create({
        trigger: ".sec2",
        start: "top 40%",
        onEnter: () => anim3.play(),
      });

      ScrollTrigger.create({
        trigger: ".sec2",
        start: "top 30%",
        onEnter: () => anim4.play(),
      });

      ScrollTrigger.create({
        trigger: ".sec2",
        start: "top bottom",
        onLeaveBack: () => {
          anim.reverse();
          anim2.pause(0);
          anim3.pause(0);
          anim4.pause(0);
        },
      });

      // Section 3 ScrollTrigger
      ScrollTrigger.create({
        trigger: ".sec2",
        start: "top -20%",
        onEnter: () => {
          anal.play();
          anim7.play();
          const titleEl = document.querySelector(".title");
          titleEl?.classList.remove("title1", "title3", "title4", "title5");
          titleEl?.classList.add("title2");
        },
        onLeaveBack: () => {
          anal.reverse();
          anim7.reverse();
          const titleEl = document.querySelector(".title");
          titleEl?.classList.remove("title2");
          titleEl?.classList.add("title1");
        },
      });

      // Section 4 ScrollTrigger
      ScrollTrigger.create({
        trigger: ".sec4",
        start: "top 75%",
        onEnter: () => {
          anim6.play();
          anim8.play();
          anim9.play();
          const titleEl = document.querySelector(".title");
          titleEl?.classList.remove("title1", "title2", "title4", "title5");
          titleEl?.classList.add("title3");
        },
        onLeaveBack: () => {
          anim6.reverse();
          anim8.reverse();
          anim9.reverse();
          const titleEl = document.querySelector(".title");
          titleEl?.classList.remove("title3");
          titleEl?.classList.add("title2");
        },
      });

      // Device Mockups
      const isMobile = window.innerWidth < 1025;
      ScrollTrigger.create({
        trigger: isMobile ? ".sec4mobile" : ".pe",
        start: isMobile ? "110% bottom" : "20% top",
        onEnter: () => {
          anim5.play();
          anim51.play();
          const titleEl = document.querySelector(".title");
          titleEl?.classList.remove("title1", "title2", "title3", "title5");
          titleEl?.classList.add("title4");
          document
            .querySelectorAll(".arg1")
            .forEach((el) => el.classList.add("dn"));
        },
        onLeaveBack: () => {
          anim5.reverse();
          anim51.reverse();
          const titleEl = document.querySelector(".title");
          titleEl?.classList.remove("title4");
          titleEl?.classList.add("title3");
          document
            .querySelectorAll(".arg1")
            .forEach((el) => el.classList.remove("dn"));
        },
      });

      // FAQ ScrollTrigger
      ScrollTrigger.create({
        trigger: ".faq",
        start: "top 50%",
        onEnter: () => {
          faq.play();
          const titleEl = document.querySelector(".title");
          titleEl?.classList.remove("title1", "title2", "title3", "title4");
          titleEl?.classList.add("title5");
        },
        onLeaveBack: () => {
          faq.reverse();
          const titleEl = document.querySelector(".title");
          titleEl?.classList.remove("title5");
          titleEl?.classList.add("title4");
        },
      });

      // Section 5 - Projects / Realisations
      ScrollTrigger.create({
        trigger: ".sec5",
        start: "top 30%",
        onEnter: () => {
          anim.reverse();
          setActiveSection("projects");
        },
        onLeaveBack: () => {
          anim.play();
          setActiveSection("home");
        },
      });

      // Section 6 - Bio
      ScrollTrigger.create({
        trigger: ".sec6",
        start: "top 30%",
        onEnter: () => {
          setIsScrolledToBottom(true);
          setActiveSection("bio");
        },
        onLeaveBack: () => {
          setIsScrolledToBottom(false);
          setActiveSection("projects");
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleLearnMore = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#sec2", offsetX: 0 },
      onStart: () => {
        document.documentElement.style.scrollBehavior = "auto";
      },
      onComplete: () => {
        document.documentElement.style.scrollBehavior = "smooth";
      },
    });
  };

  const handleStartNow = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: ".sec2", offsetY: -300 },
      onStart: () => {
        document.documentElement.style.scrollBehavior = "auto";
      },
      onComplete: () => {
        document.documentElement.style.scrollBehavior = "smooth";
      },
    });
  };

  return (
    <div className="portfolio-wrapper my-scrollbar">
      {/* Preloader */}
      <Preloader isLoaded={isLoaded} />

      {/* Floating Navigation Pill */}
      <FloatingNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isLoaded={isLoaded}
      />

      {/* Side Slide-over Contact Drawer & Floating Button */}
      <ContactDrawer
        isOpen={isContactOpen}
        onOpen={() => setIsContactOpen(true)}
        onClose={() => setIsContactOpen(false)}
        isScrolledToBottom={isScrolledToBottom}
      />

      {/* Main Content Area */}
      <div className="content">
        {/* Scroll Progress Bar */}
        <ProgressBar />

        {/* Section 1: Hero */}
        <HeroSection onLearnMore={handleLearnMore} isLoaded={isLoaded} />

        {/* Sticky Transition Title */}
        <StickyTitle />

        {/* Section 2: Dialogue Conversation */}
        <StorySection onStartNow={handleStartNow} />

        {/* Section 3: Market Analysis & Problem / Solution */}
        <SolutionSection />

        {/* Section 4: Device Mockup Showcase */}
        <MockupShowcase />

        {/* FAQ Section */}
        <FaqSection />

        {/* Section 5: Projects Carousel */}
        <ProjectsCarousel />

        {/* Testimonials Reviews */}
        <TestimonialsSection />

        {/* Section 6: About Me / Skills / Journey */}
        <AboutSection
          onOpenPrivacy={() => setModalType("privacy")}
          onOpenLegal={() => setModalType("legal")}
        />
      </div>

      {/* Policy Modals */}
      <PolicyModal modalType={modalType} onClose={() => setModalType(null)} />

      {/* Cookie Consent & Manager Button */}
      <CookieBanner />
    </div>
  );
}
