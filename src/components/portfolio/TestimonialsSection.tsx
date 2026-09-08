"use client";

import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="secav" id="secav">
      <div className="back">
        <div className="backbottom">
          <span />
        </div>
      </div>
      <h2>
        They trusted me <img src="/img/review-star2.svg" alt="stars" />
      </h2>
      <div className="reviews">
        <div className="review-card">
          <div className="client-info">
            <h4>Pierre</h4>
            <p>CEO, Bykaomes</p>
          </div>
          <p className="client-review">
            &quot;I gave Brice free rein to create my entire platform. Very
            professional and above all very responsive. I am really more than
            satisfied with the result. I highly recommend Brice! I look forward
            to continuing the evolution of the platform with your feedback and
            relevant advice.&quot;
          </p>
        </div>

        <div className="review-card">
          <div className="client-info">
            <h4>Xénia</h4>
            <p>Partner, Noje be</p>
          </div>
          <p className="client-review">
            &quot;Very nice professional encounter with Brice. Even separated by
            a few kilometers because we are in Belgium, Brice has always been
            very responsive and proactive. Always attentive to ideas, he
            perfectly creates a beautiful visual identity. I highly recommend
            his services for creating websites, business cards, flyers, etc. (We
            only have praises for your work).&quot;
          </p>
        </div>

        <div className="review-card">
          <div className="client-info">
            <h4>Riaz</h4>
            <p>CEO, Dealrun</p>
          </div>
          <p className="client-review">
            &quot;Brice is a person who was attentive and delivered a result on
            time, the result was top-notch, Brice&apos;s work brought a fresh
            look to my website&apos;s design. I recommend.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
