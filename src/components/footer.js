import React from "react";

const Footer = () => {
  return (
    <div className="bg-accents-8 border-t border-accents-7 text-accents-5">
      <div className="container mx-auto pt-12 pb-16 flex items-center justify-center">
        <ul className="h-12 max-w-lg mx-auto inline-flex items-center justify-center text-center text-sm">
          <li className="footer-item">Privacy Policy</li>
          <li className="footer-item">Legal Terms</li>
          <li className="footer-item">Accessibility</li>
          <li className="footer-item">Site Map</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
