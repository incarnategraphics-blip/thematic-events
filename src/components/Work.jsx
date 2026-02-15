import React, { useState } from "react";
import Haldi1 from "../assests/haldi/haldi1.png";
import Haldi2 from "../assests/haldi/haldi2.png";
import Haldi3 from "../assests/haldi/haldi3.png";
import Haldi4 from "../assests/haldi/haldi4.png";
import Haldi5 from "../assests/haldi/haldi5.png";
import Haldi6 from "../assests/haldi/haldi6.png";
import Wed1 from "../assests/wedding/wed1.png";
import Wed2 from "../assests/wedding/wed2.png";
import Wed3 from "../assests/wedding/wed3.png";
import Wed4 from "../assests/wedding/wed4.png";
import Wed5 from "../assests/wedding/wed5.png";
import Wed6 from "../assests/wedding/wed6.png";
const Work = () => {
  const [active, setActive] = useState("haldi");

  const data = {
    haldi: [
      Haldi1,Haldi2,Haldi3,Haldi4,Haldi5,Haldi6
     
    ],
    cocktail: [
      "https://images.unsplash.com/photo-1545235617-9465d2a55698",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    ],
    engagement: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698",
            "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    ],
    wedding: [
      Wed1,Wed2,Wed3,Wed4,Wed5,Wed6
    ],
  };

  return (
    <section className="py-5" id="work">
      <div className="container text-center mb-4">
        <h2 className="fw-bold">The Thematic Events</h2>
        <p className="text-muted">For Every Occasion</p>

        {/* TABS */}
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button
            className={`btn btn-sm ${active === "haldi" ? "btn-info" : "btn-light"}`}
            onClick={() => setActive("haldi")}
          >
            Haldi / Mehendi
          </button>

          <button
            className={`btn btn-sm ${active === "cocktail" ? "btn-info" : "btn-light"}`}
            onClick={() => setActive("cocktail")}
          >
            Cocktail / Sangeet
          </button>

          <button
            className={`btn btn-sm ${active === "engagement" ? "btn-info" : "btn-light"}`}
            onClick={() => setActive("engagement")}
          >
            Engagement
          </button>

          <button
            className={`btn btn-sm ${active === "wedding" ? "btn-dark" : "btn-light"}`}
            onClick={() => setActive("wedding")}
          >
            Wedding
          </button>
        </div>
      </div>

      {/* IMAGES GRID */}
      <div className="container">
        <div className="row g-4">
          {data[active].map((img, index) => (
            <div
              key={index}
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="work-card">
                <img src={img} alt="work" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INLINE CSS */}
      <style>{`
        .work-card {
          height: 280px;
          overflow: hidden;
          border-radius: 14px;
          border-color: black;
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);

        }

        .work-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .work-card:hover img {
          transform: scale(1.07);
        }
      `}</style>
    </section>
  );
};

export default Work;
