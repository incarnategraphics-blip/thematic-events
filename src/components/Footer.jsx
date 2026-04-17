import React from "react";
import logo from "../assests/logo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt ,  } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-top">
        <div className="container">
          <div className="row gy-4">

            {/* LOGO + SOCIAL */}
            <div className="col-md-3">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="Company Logo" className="footer-logo-img" />
              </a>

              <p className="mb-2 text-black mt-3">Follow us on</p>

              <div className="d-flex gap-2">
                <a href="https://www.instagram.com/thematicsevents/" className="social-icon"><FaInstagram /></a>
                <a href="https://www.facebook.com/ThematicsEvents/" className="social-icon"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/ashishmaheshwarii/" className="social-icon"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="col-md-3">
              <h5 className="footer-title">Address</h5>
              <p className="footer-text">
                <FaMapMarkerAlt className="me-2 text-info" />
                32- EC, Sch.No, 94, Bombay Hospital Service Rd, Pushp Vihar Colony,
                Scheme 94 Sector EC, Indore, Madhya Pradesh 452010
              </p>
            </div>

            {/* CONTACT */}
            <div className="col-md-3">
              <h5 className="footer-title">Contact</h5>

              <p className="footer-text mb-2">
                <FaEnvelope className="me-2 text-info" />
                thethematicevent@gmail.com
              </p>

              <p className="footer-text">
                <FaPhoneAlt className="me-2 text-info" />
                +91-9111115444 <br />
                +91-9111105444
                
              </p>
                
            </div>

            {/* GOOGLE MAP */}
            <div className="col-md-3">
              <h5 className="footer-title">Location</h5>
              <div className="map-container">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.376334714875!2d75.9018940753058!3d22.751410979364692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd21344e6d73%3A0x246445243c4ad0a4!2sThematic%20Events%20%7C%20Wedding%20Planner%20Indore%20%7C%20Event%20Planner%20Indore!5e0!3m2!1sen!2sin!4v1776432436651!5m2!1sen!2sin"
                  width="100%"
                  height="150"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2024–2025 Thematic Events. All Rights Reserved
      </div>

      {/* CSS */}
      <style>{`
        .footer-top {
          background: white;
          padding: 60px 0;
        }

        .footer-logo-img {
          height: 50px;
        }

        .footer-title {
          font-weight: 600;
          margin-bottom: 12px;
        }

        .footer-text {
          font-size: 14px;
          color: black;
          line-height: 1.6;
        }

        .social-icon {
          display: inline-flex;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          border: 1px solid #ccc;
          border-radius: 50%;
          color: #000;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: #0dcaf0;
          color: #fff;
          border-color: #0dcaf0;
        }

        .map-container iframe {
          width: 100%;
          height: 150px;
          border-radius: 10px;
        }

        .footer-bottom {
          background: #0dcaf0;
          color: #fff;
          text-align: center;
          padding: 14px 10px;
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

export default Footer;