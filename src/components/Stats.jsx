import React from "react";

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row text-center g-4">

          <div className="col-md-3 col-6">
            <h2 className="stats-number">12+</h2>
            <p className="stats-text">Years of industry experience</p>
          </div>

         

          <div className="col-md-3 col-6">
            <h2 className="stats-number">500+</h2>
            <p className="stats-text">Events</p>
          </div>

          <div className="col-md-3 col-6">
            <h2 className="stats-number">250+</h2>
            <p className="stats-text">Happy Couples & Counting</p>
          </div>

        </div>
      </div>

      {/* INLINE CSS */}
      <style>{`
        .stats-section {
          background:#0dcaf0;
          padding: 60px 0;
        }

        .stats-number {
          font-size: 42px;
          font-weight: 600;
          color:black;
          margin-bottom: 8px;
        }

        .stats-text {
          font-size: 15px;
          color:black;
          margin: 0;
        }

        @media (max-width: 768px) {
          .stats-number {
            font-size: 34px;
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
