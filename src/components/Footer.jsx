import React from "react";
import logo from "../assests/1.png";
const Footer = () => {
  return (
    <>
      <footer className="footer-top">
        <div className="container">
          <div className="row gy-4">

            {/* LOGO + SOCIAL */}
            <div className="col-md-4">
             <a className="navbar-brand" href="/">
          <img 
            src={logo} 
            alt="Company Logo"
            style={{ height: "45px" }}
          />
        </a>
              <p className="mb-2 text-black">Follow us on</p>
              <a
                href="https://www.instagram.com/thematicsevents/?hl=en"
                className="social-icon"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>

            {/* ADDRESS */}
            <div className="col-md-4">
              <h5 className="footer-title">Address</h5>
              <p className="footer-text">
32- EC, Sch.No, 94, Bombay Hospital Service Rd, Pushp Vihar Colony, Scheme 94 Sector EC, Indore, Madhya Pradesh 452010
              </p>
            </div>

            {/* CONTACT */}
            <div className="col-md-4">
              <h5 className="footer-title">Contact</h5>
              <p className="footer-text mb-1">thethematicevent@gmail.com </p>
              <p className="footer-text">+91-9111115444,+91-9111105444</p>
            </div>

          </div>
        </div>
      </footer>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2024–2025 The Thematic Events. All Rights Reserved
      </div>

      {/* INLINE CSS */}
      <style>{`
        .footer-top {
          background: white;
          padding: 60px 0;
        }

        .footer-logo {
          font-size: 28px;
          font-weight: 600;
        }

        .footer-logo span {
          color: #0dcaf0;
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
