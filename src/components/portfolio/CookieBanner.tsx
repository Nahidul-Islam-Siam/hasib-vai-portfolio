"use client";

import React, { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowPopup(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="cookie-popup" id="cookie-popup" style={{ display: "block" }}>
          <h4>We use cookies</h4>
          <p>
            This site uses cookies to enhance your experience. By continuing to
            browse this site, you accept our use of cookies.
          </p>
          <div className="cookie-buttons">
            <button className="accept" onClick={handleAccept}>
              Accept
            </button>
            <button className="decline" onClick={handleDecline}>
              Decline
            </button>
          </div>
        </div>
      )}

      <button
        className="cookie-manager-btn"
        id="cookie-manager-btn"
        onClick={() => setShowPopup(true)}
      >
        <img src="/img/cookie.svg" alt="cookie manager" />
      </button>
    </>
  );
}
