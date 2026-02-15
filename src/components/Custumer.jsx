import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Customer = () => {
  const reviews = [
    {
      name: "Monu Patel",
      text: "Had an amazing experience with Thematic Events for my birthday! Everything was beautifully planned and perfectly executed. Highly recommended for making any occasion extra special!",
    },
    {
      name: "Ajay Hinnotya",
      text: "We chose Thematic Events for our wedding and it was the best decision! From decor to coordination, everything was on point.",
    },
    {
      name: "Akhil Pathak",
      text: "Their creativity in theme suggestions, keen attention to detail, and flawless execution truly impressed us.",
    },
    {
      name: "Garima Sharma",
      text: "My daughter’s wedding was truly a dream come true. Every decor element was elegant and thoughtfully designed.",
    },
    {
      name: "Adv. Shree Tugnawat",
      text: "The engagement theme looked like a dream. Guests kept clicking pictures nonstop. Thank you to the entire team!",
    },
    {
      name: "Ayushi Shivhare",
      text: "Everything went amazingly well and I cannot express how appreciative we are for everything that you guys did for us!",
    },
    {
      name: "Deepanshi Badwaya",
      text: "Bride & Groom entry concept became the most memorable moment of the evening. Thank you Thematic Events!",
    },
    {
      name: "Monika Jain",
      text: "I was completely stress free after meeting with you. Special thanks to Ashish Sir for smooth management.",
    },
    {
      name: "Roma Kundnani",
      text: "Thank you for all the support. It was a pleasure working with your team.",
    },
    {
      name: "Suyash Jain",
      text: "Really liked how calm and efficient the team was. Everything completed on time without stress.",
    },
    {
      name: "NeelUtsav Studios",
      text: "One of the best service providers in the town.",
    },
    {
      name: "Divyanshi Patel",
      text: "They are just the best!",
    },
    {
      name: "Shraddha",
      text: "Every function had a distinct vibe and was beautifully executed. Completely stress-free experience. Highly recommended!",
    },
  ];

  return (
    <section className="py-5" style={{ background: "white" }}>
      <div className="container text-center mb-5">
        <h2 className="fw-bold">What Our Clients Say</h2>
      </div>

      <div className="container">
        <div className="d-flex gap-4 customer-scroll">

          {reviews.map((review, index) => (
            <div key={index} className="customer-card">
              <FaUserCircle className="user-icon" />
              <h4 className="mt-3 ">{review.name}</h4>
              <p className="mt-2">{review.text}</p>
            </div>
          ))}

        </div>
      </div>

      <style>{`
        .customer-scroll {
          overflow-x: auto;
          display: flex;
          gap: 20px;
          padding-bottom: 10px;
          scroll-snap-type: x mandatory;
        }

        .customer-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .customer-scroll::-webkit-scrollbar-thumb {
          background: #0dcaf0;
          border-radius: 10px;
        }

        .customer-card {
          width: 40%;
          background: #fff;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          text-align: center;
          flex-shrink: 0;
          scroll-snap-align: start;
        }

        .customer-card h6 {
          font-weight: 600;
        }

        .customer-card p {
          font-size: 14px;
          color: #555;
        }

        .user-icon {
          font-size: 50px;
          color: #0dcaf0;
        }

        @media (max-width: 768px) {
          .customer-card {
            min-width: 240px;
          }
        }
      `}</style>
    </section>
  );
};

export default Customer;
