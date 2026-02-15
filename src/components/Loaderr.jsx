import React from "react";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <h1 className="pulse-text">Thematic Event</h1>

      <style>{`
        .loader-wrapper {
          position: fixed;
          inset: 0;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .pulse-text {
          font-size: 42px;
          font-family: cursive;
          color: #1e6fff;
          animation: pulse 1.5s infinite ease-in-out;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }

        @media (max-width: 768px) {
          .pulse-text {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
