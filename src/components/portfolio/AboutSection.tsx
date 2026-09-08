"use client";

import React from "react";

interface AboutSectionProps {
  onOpenPrivacy: () => void;
  onOpenLegal: () => void;
}

export default function AboutSection({
  onOpenPrivacy,
  onOpenLegal,
}: AboutSectionProps) {
  return (
    <section className="sec6">
      <div>
        <div className="txt">
          <h1>BRICE CLAIN</h1>
          <h3>Trois-Rivières (Quebec)</h3>
          <h5>
            I design and develop websites that are both elegant, intuitive, and
            accessible.
          </h5>
          <br />
          <p>
            Driven by a deep passion for graphic design and web development, I
            specialize in harmonizing the logic of code with the aesthetics of
            design. This ensures effective intervention on all aspects of the
            project, without intermediaries.
          </p>
          <h5>
            I also specialize in creating your brand image: logo, banner, and
            much more.
          </h5>
          <br />
          <p>
            From a simple idea, a unique brand identity and an exceptional
            website are created. My clients appreciate my versatility and the
            quality of my work, forged by significant experience in an agency.
          </p>
          <br />
          <a
            href="https://www.linkedin.com/in/brice-clain-853852189/"
            target="_blank"
            rel="noreferrer"
          >
            Discover my journey (LinkedIn)
          </a>
        </div>

        <div className="comp">
          <div className="cdes">
            <h4>.Graphic and UX/UI design</h4>
            <div className="citem">
              <img src="/img/tech/item1.svg" alt="tech item 1" />
              <img src="/img/tech/item2.svg" alt="tech item 2" />
              <img src="/img/tech/item21.svg" alt="tech item 21" />
              <img src="/img/tech/item22.svg" alt="tech item 22" />
            </div>
          </div>

          <div className="cdev">
            <h4>.Web development</h4>
            <div className="citem">
              <img src="/img/tech/item3.svg" alt="tech item 3" />
              <img src="/img/tech/item4.svg" alt="tech item 4" />
              <img src="/img/tech/item5.svg" alt="tech item 5" />
              <img src="/img/tech/item6.svg" alt="tech item 6" />
              <img src="/img/tech/item7.svg" alt="tech item 7" />
              <img src="/img/tech/item8.svg" alt="tech item 8" />
              <img src="/img/tech/item9.svg" alt="tech item 9" />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          © Brice{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              onOpenPrivacy();
            }}
            id="privacy-policy-link"
            style={{ cursor: "pointer" }}
          >
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              onOpenLegal();
            }}
            id="legal-notice-link"
            style={{ cursor: "pointer" }}
          >
            Legal Notice
          </a>
        </div>
      </div>
    </section>
  );
}
