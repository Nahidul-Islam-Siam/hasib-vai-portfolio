"use client";

import React from "react";

export default function MockupShowcase() {
  return (
    <>
      {/* Desktop Showcase */}
      <section className="sec4" id="sec4">
        <div className="design">
          <img className="pe" id="pe1" src="/img/period-min.png" alt="Period Desktop Preview" />
          <img className="mac" src="/img/mac-min.png" alt="MacBook Mockup" />
        </div>

        <div className="arg">
          <div className="arg1" style={{ zIndex: 10 }}>
            <img src="/img/focus.svg" alt="focus" />
            <h5>Highlight the product</h5>
            <p>
              Highlighting its usefulness allows addressing a neutral clientele.
            </p>
          </div>
          <div className="arg1">
            <img src="/img/star.svg" alt="star" />
            <h5>Light and warm page</h5>
            <p>Thanks to the colors, borders, and illustrations.</p>
          </div>
        </div>

        <div className="mobile">
          <img
            className="pem"
            id="pe2"
            src="/img/periodmobile.png"
            alt="Period Mobile Preview"
          />
          <img className="iphone" src="/img/iphone.png" alt="iPhone Mockup" />
        </div>
      </section>

      {/* Mobile-optimized Showcase */}
      <section className="sec4mobile">
        <div className="arg">
          <div className="arg1" style={{ zIndex: 10 }}>
            <img src="/img/focus.svg" alt="focus" />
            <h4>Highlight the product</h4>
            <p>
              Highlighting its usefulness allows addressing a neutral clientele.
            </p>
          </div>
          <div className="arg1">
            <img src="/img/star.svg" alt="star" />
            <h4>Light and warm page</h4>
            <p>Thanks to the colors, borders, and illustrations.</p>
          </div>
        </div>
        <div className="design">
          <img className="pe" src="/img/period-min.png" alt="Period preview" />
          <img className="mac" src="/img/mac2.png" alt="MacBook preview" />
        </div>
        <div className="mobile">
          <img className="pem" src="/img/periodmobile.png" alt="Period mobile" />
          <img className="iphone" src="/img/iphone.png" alt="iPhone preview" />
        </div>
      </section>
    </>
  );
}
