import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx3rT1ZgAUgqmvIqwWQTucA6jYMaw1lVDXqEzVJBTICTsTVVLOVbWmpsc5qcXSQLH6HpA/exec";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "",
    eventDate: "",
    services: "",
    venueConfirmed: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success | error | ""

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("mobile", form.mobile);
    formData.append("city", form.city);
    formData.append("eventDate", form.eventDate);
    formData.append("services", form.services);
    formData.append("venueConfirmed", form.venueConfirmed);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      setStatus("success");

      setForm({
        name: "",
        mobile: "",
        city: "",
        eventDate: "",
        services: "",
        venueConfirmed: "",
      });

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }

    setLoading(false);
  };

  return (
    <>
      {/* CENTER SUCCESS / ERROR MESSAGE */}
      {status && (
        <div className="custom-alert-overlay">
          <div className={`custom-alert ${status}`}>
            {status === "success"
              ? "✅ Form submitted successfully"
              : "❌ Something went wrong"}
          </div>
        </div>
      )}

      <div id="contact-section" className="card p-4 " data-aos="fade-left">
        <h5 className="fw-bold mb-2">Let's Connect!</h5>
        <p className="text-muted mb-3">
          Get a FREE consultation from wedding experts.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-2"
            name="name"
            placeholder="Name*"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            className="form-control mb-2"
            name="mobile"
            placeholder="Mobile Number*"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            className="form-control mb-2"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />

          <input
            type="date"
            className="form-control mb-2"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
          />

          <select
            className="form-control mb-2"
            name="services"
            value={form.services}
            onChange={handleChange}
          >
            <option value="">Select Services</option>
            <option>Wedding Decor</option>
            <option>Wedding Planning</option>
            <option>Wedding Venues</option>
            <option>Others</option>
          </select>

          <select
            className="form-control mb-3"
            name="venueConfirmed"
            value={form.venueConfirmed}
            onChange={handleChange}
          >
            <option value="">Venue Confirmed?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <button
            type="submit"
            className="btn btn-info w-100 fw-semibold"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {/* INLINE CSS */}
      <style>{`
        .custom-alert-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .custom-alert {
          padding: 20px 30px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          animation: pop 0.3s ease;
        }

        .custom-alert.success {
          background: #d1f7dc;
          color: #1e7e34;
        }

        .custom-alert.error {
          background: #fde2e2;
          color: #a71d2a;
        }

        @keyframes pop {
          from {
            transform: scale(0.7);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ContactForm;
