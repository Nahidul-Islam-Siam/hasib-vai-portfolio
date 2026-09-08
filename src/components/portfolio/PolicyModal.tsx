"use client";

import React from "react";

export type ModalType = "privacy" | "legal" | null;

interface PolicyModalProps {
  modalType: ModalType;
  onClose: () => void;
}

export default function PolicyModal({
  modalType,
  onClose,
}: PolicyModalProps) {
  if (!modalType) return null;

  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: "block" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-content">
        <span className="close" onClick={onClose} style={{ cursor: "pointer" }}>
          &times;
        </span>

        {modalType === "privacy" && (
          <div id="modal-text">
            <h2>Privacy Policy</h2>
            <p>
              This privacy policy describes how your personal information is
              collected, used, and shared when you visit our website and use our
              contact form.
            </p>
            <h3>1. Information Collected</h3>
            <p>
              When you fill out the contact form, we collect the following
              information:
            </p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Message</li>
            </ul>
            <h3>2. Use of Information</h3>
            <p>
              The information collected via our contact form is used solely to
              respond to your requests and to contact you if necessary.
            </p>
            <h3>3. Sharing of Information</h3>
            <p>
              We do not share your personal information with third parties, except
              as necessary to comply with the law or protect our rights.
            </p>
            <h3>4. Information Security</h3>
            <p>
              We implement security measures to protect your personal
              information. However, please note that no method of transmission
              over the Internet or electronic storage is completely secure.
            </p>
            <h3>5. Your Rights</h3>
            <p>
              In accordance with the Personal Information Protection and
              Electronic Documents Act (PIPEDA), you have the right to request
              access to, rectification, or deletion of your personal information.
              To exercise these rights, please contact us at:{" "}
              <strong>contact@briceclain.com</strong>
            </p>
            <h3>6. Changes to the Privacy Policy</h3>
            <p>
              We may update this privacy policy from time to time. We will notify
              you of any changes by posting the new policy on this page.
            </p>
          </div>
        )}

        {modalType === "legal" && (
          <div id="modal-text">
            <h2>Legal Notice</h2>
            <p>
              In accordance with the provisions of the Canadian Anti-Spam
              Legislation (CASL), we bring to the attention of users and
              visitors of the site the following information:
            </p>
            <h3>1. Website Publisher</h3>
            <p>
              <strong>Name:</strong> Hasib
              <br />
              <strong>Address:</strong> 405-690 Rue de l&apos;Esplanade, G8Y2P9,
              Trois-Rivières, QC, Canada
              <br />
              <strong>Email:</strong> contact@briceclain.com
              <br />
              <strong>Phone number:</strong> +880 1794-667329
            </p>
            <h3>2. Hosting</h3>
            <p>
              The site is hosted by:
              <br />
              <strong>Hosting Provider Name:</strong> WHC (Web Hosting Canada)
              <br />
              <strong>Address:</strong> 7250 Rue Clark, Suite 301, Montreal, QC
              H2R 2Y3, Canada
              <br />
              <strong>Phone number:</strong> +1 514-504-2113
            </p>
            <h3>3. Intellectual Property</h3>
            <p>
              The site and its content (texts, images, graphics, logo, etc.) are
              the property of the publisher and are protected by applicable
              intellectual property laws. Any reproduction, distribution,
              modification, adaptation, or publication of the elements of the
              site, even partially, is strictly prohibited without prior written
              consent.
            </p>
            <h3>4. Limitation of Liability</h3>
            <p>
              The publisher cannot be held responsible for direct and indirect
              damage caused to the user&apos;s equipment when accessing the site.
            </p>
            <h3>5. Applicable Law</h3>
            <p>
              This site is subject to Canadian law. In case of dispute, the
              competent jurisdiction will be that of the Canadian courts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
