"use client";

import React, { useState } from "react";

interface ContactDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isScrolledToBottom: boolean;
}

export default function ContactDrawer({
  isOpen,
  onOpen,
  onClose,
  isScrolledToBottom,
}: ContactDrawerProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [succMsg, setSuccMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSuccMsg("");
      setErrMsg("Please fill in all fields!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(emailRegex)) {
      setSuccMsg("");
      setErrMsg("Please enter a valid email address...");
      return;
    }

    setErrMsg("");
    setIsSubmitting(true);

    // Form submission
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("message", message);

    fetch("https://formbold.com/s/oPxbo", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setSuccMsg("Message sent successfully!");
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch(() => {
        setSuccMsg("Message sent successfully!");
        setEmail("");
        setName("");
        setMessage("");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      {/* Floating Work With Me Button */}
      <a
        id="boutontr"
        className={isScrolledToBottom ? "active" : ""}
        onClick={onOpen}
        style={{ cursor: "pointer" }}
      >
        <h4>
          Work <br /> with me
        </h4>
        <div className="ar">
          <img src="/img/aright.svg" alt="work with me" />
        </div>
      </a>

      {/* Backdrop */}
      <div
        className={`contact_back ${isOpen ? "cbactive" : ""}`}
        onClick={onClose}
      />

      {/* Contact Drawer */}
      <div className={`contact ${isOpen ? "cactive" : ""}`}>
        <div className="retour flex items-center cursor-pointer transition-transform duration-200 hover:-translate-x-1" onClick={onClose}>
          <img src="/img/back.svg" alt="return" />
          <p>Return</p>
        </div>

        <div className="num">
          <h2>Contact</h2>
          <a href="mailto:contact@briceclain.com" className="transition-colors duration-200 hover:text-blue-600">
            <h3>contact@briceclain.com</h3>
          </a>
          <a href="tel:+8801794667329" className="transition-colors duration-200 hover:text-blue-600">
            <h3>+880 1794-667329</h3>
          </a>
        </div>

        <form id="form" onSubmit={handleSubmit}>
          <p className={`cour c1 ${email.length > 0 ? "tactive" : ""}`}>
            Your email
          </p>
          <div className="input_group">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <p className={`cour c2 ${name.length > 0 ? "tactive" : ""}`}>
            Your full name
          </p>
          <div className="input_group">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <p className={`cour c3 ${message.length > 0 ? "tactive" : ""}`}>
            Your project
          </p>
          <div className="input_group">
            <textarea
              name="message"
              placeholder="How can I help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {errMsg && <p id="err">{errMsg}</p>}
          {succMsg && <p id="succ">{succMsg}</p>}

          <div className="input_group">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer transition-all duration-300 hover:opacity-90 active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

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
    </>
  );
}
