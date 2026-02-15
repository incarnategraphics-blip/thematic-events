import React, { useState } from "react";

const Slot = () => {
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y <= 2027; y++) {
    years.push(y);
  }

  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(currentYear);

  // calendar logic
  const daysInMonth = new Date(year, activeMonth + 1, 0).getDate();
  const startDay = new Date(year, activeMonth, 1).getDay();

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-5">
      <div className="container">
        {/* HEADER */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-8">
            <h3 className="fw-bold">Selective weddings, Higher standard</h3>
            <p className="text-muted">
              We focus on quality, taking on limited weddings daily to ensure
              every decor gets the attention it deserves.
            </p>
          </div>

          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <select
              className="form-select w-auto d-inline"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        {/* MONTHS */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          {months.map((m, i) => (
            <button
              key={i}
              className={`btn btn-sm ${
                activeMonth === i ? "btn-dark" : "btn-light"
              }`}
              onClick={() => setActiveMonth(i)}
            >
              {m}
            </button>
          ))}
        </div>

        {/* CALENDAR */}
        <div className="calendar-grid">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
            <div key={d} className="calendar-head">{d}</div>
          ))}

          {Array(startDay).fill(null).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {Array.from({ length: daysInMonth }, (_, i) => (
            <div key={i} className="calendar-day">
              <span className="day-number">{i + 1}</span>
              <span className="slots">4 Slots Left</span>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 gap-3">
          <span className="text-muted fw-semibold">
            Exclusive Availability for Quality Decor
          </span>

          <button
            className="btn btn-info px-4 fw-semibold"
            onClick={scrollToContact}
          >
            CONNECT WITH OUR EXPERTS
          </button>
        </div>
      </div>

      {/* INLINE CSS */}
      <style>{`
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 12px;
        }

        .calendar-head {
          font-weight: 600;
          text-align: center;
        }

        .calendar-day {
          border: 1px solid #eee;
          padding: 12px 6px;
          text-align: center;
          border-radius: 6px;
          font-size: 14px;
        }

        .day-number {
          display: block;
          font-weight: 600;
        }

        .slots {
          display: block;
          color: green;
          font-size: 12px;
          margin-top: 4px;
        }

        @media (max-width: 768px) {
          .calendar-grid {
            gap: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default Slot;
