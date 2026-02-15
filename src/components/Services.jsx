import React from "react";
import Venue from "../assests/venue.png";

import Decor from "../assests/decor.png";
import Photographty from "../assests/photography.png";
import Entertain from "../assests/entertain.png";
import Onground from "../assests/onground.png";
const Services = () => {
  return (
    <section className="py-5" id="services" style={{ background: "white" }}>
      <div className="container text-center mb-5">
        <h2 className="fw-bold">Our Wedding Solutions</h2>
        <p className="text-muted">
          We design, plan, and execute weddings that feel effortless yet extraordinary
        </p>
      </div>

      <div className="container">
        <div className="d-flex gap-5 services-scroll">

          {/* CARD */}
          <div className="service-item">
            <div className="arch-image">
              <img src={Venue} alt="" />
            </div>

            <div className="center-line">
              <span></span>
            </div>

            <h5>Venue Selection</h5>
            <p>
              Personalized options that align with your style and budget, with exclusive deals.
            </p>
          </div>


          <div className="service-item">
            <div className="arch-image">
              <img src={Onground} alt="" />
            </div>

            <div className="center-line">
              <span></span>
            </div>

            <h5>On-Ground Coordination</h5>
            <p>
              Personalized options that align with your style and budget, with exclusive deals.
            </p>
          </div>

          {/* CARD */}
          <div className="service-item">
            <div className="arch-image">
              <img src={Entertain} alt="" />
            </div>

            <div className="center-line">
              <span></span>
            </div>

            <h5>Decor & Theme Curation</h5>
            <p>
              Custom decor and themes to bring your wedding vision to life.
            </p>
          </div>

          {/* CARD */}
          <div className="service-item">
            <div className="arch-image">
              <img src={Photographty} alt="" />
            </div>

            <div className="center-line">
              <span></span>
            </div>

            <h5>Photography & Videography</h5>
            <p>
              Trusted experts offering competitive deals to capture every moment.
            </p>
          </div>




           {/* CARD */}
          <div className="service-item">
            <div className="arch-image">
              <img src={Decor} alt="" />
            </div>

            <div className="center-line">
              <span></span>
            </div>

            <h5>Entertainment & More</h5>
            <p>
            Personalized recommendations for DJs, live bands, and more.
            </p>
          </div>


        </div>
      </div>

      <div className="text-center mt-5">
        <a href="#contact-section" className="btn px-5 py-2 text-white fw-semibold"
           style={{ background: "#0dcaf0" }}>
          CONNECT WITH OUR EXPERTS
        </a>
      </div>

      {/* CSS */}
      <style>{`
        .services-scroll {
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .services-scroll::-webkit-scrollbar {
          height: 5px;
        }

        .services-scroll::-webkit-scrollbar-thumb {
          background: #0dcaf0;
          border-radius: 10px;
        }

        .service-item {
          min-width: 320px;
          text-align: center;
          flex-shrink: 0;
        }

        .arch-image {
          width: 320px;
          height: 360px;
          border-top-left-radius: 200px;
          border-top-right-radius: 200px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .arch-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .center-line {
          position: relative;
          margin-top: -20px;
          margin-bottom: 15px;
        }

        .center-line span {
          display: block;
          width: 2px;
          height: 40px;
          background: #ccc;
          margin: 0 auto;
          position: relative;
        }

        .center-line span::after {
          content: "";
          width: 16px;
          height: 16px;
          background: #d9d9d9;
          border-radius: 50%;
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
        }

        .service-item h5 {
          font-weight: 600;
          margin-top: 10px;
        }

        .service-item p {
          font-size: 14px;
          color: #666;
          max-width: 280px;
          margin: 8px auto 0;
        }
      `}</style>
    </section>
  );
};

export default Services;
