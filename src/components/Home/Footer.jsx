// eslint-disable-next-line no-unused-vars
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-[#ba759a] text-white">
        <nav>
          <header className="footer-title">Service</header>
          <a className="link link-hover">Period Tracking</a>
          <a className="link link-hover">Product</a>
          <a className="link link-hover">Health Tips </a>
         
          <a className="link link-hover">Consultancy</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
