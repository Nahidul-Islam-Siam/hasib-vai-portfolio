"use client";

import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progress-bar fade2"
        id="myBar"
        style={{
          height: typeof window !== "undefined" && window.innerWidth >= 1025 ? `${progress}%` : "100%",
          width: typeof window !== "undefined" && window.innerWidth < 1025 ? `${progress}%` : "100%",
        }}
      />
    </div>
  );
}
