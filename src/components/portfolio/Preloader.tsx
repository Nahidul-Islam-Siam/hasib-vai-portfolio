"use client";

import React from "react";

interface PreloaderProps {
  isLoaded: boolean;
}

export default function Preloader({ isLoaded }: PreloaderProps) {
  return (
    <div className={`loading ${isLoaded ? "en" : ""}`}>
      <div className="top" />
      <div className="hide" />
      <div className={`lback ${!isLoaded ? "chargement" : ""}`} />
    </div>
  );
}
