import React from "react";
import FooterContact from "./FooterContact";
import FooterSubscribe from "./FooterSubscribe";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FooterContact />
        <hr />
        <FooterSubscribe />
        <hr />
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
