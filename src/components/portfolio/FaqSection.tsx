"use client";

import React from "react";

export default function FaqSection() {
  return (
    <section className="faq">
      <div className="faq1 faq2">
        <div className="left">
          <img src="/img/devis.svg" alt="pricing" />
          <h4>
            How much <br /> does it cost?
          </h4>
        </div>
        <div className="hr" />
        <p>
          Tell me about your project, the cost will depend on the time needed.
          For example, you should expect between $2500 and $3500 for a showcase
          site. For larger projects, the rate will be based on the time
          required. I will then send you a quote.
        </p>
      </div>

      <div className="faq1 faq3">
        <div className="left">
          <img src="/img/settings.svg" alt="aftercare" />
          <h4>And after?</h4>
        </div>
        <div className="hr" />
        <p>
          You can modify the content using the provided software (CMS)! Training
          hours are included to teach you how to modify or add content.
        </p>
      </div>

      <div className="faq1 faq5">
        <div className="left">
          <img src="/img/moon.svg" alt="maintenance" />
          <h4>Sleep tight</h4>
        </div>
        <div className="hr" />
        <p>
          You can leave the support and update of your content to me, based on a
          monthly subscription.
        </p>
      </div>
    </section>
  );
}
