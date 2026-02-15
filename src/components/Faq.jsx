import React, { useState } from "react";

const faqData = [

  // 🔥 NEW QUESTIONS (Added First)

  {
    question: "What services do you offer as a wedding planner?",
    answer:
      "As a wedding planner, we offer a wide range of services including venue selection, vendor management, budget management, timeline creation, event design and styling, guest management, and day-of coordination.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing varies depending on the specific services requested, the complexity of the wedding, and the location. We typically offer customized packages to fit each client's needs and budget.",
  },
  {
    question: "Can you help with destination weddings?",
    answer:
      "Absolutely! We have experience planning destination weddings and are happy to assist with all aspects including travel arrangements, venue selection, vendor management, and on-site coordination.",
  },
  {
    question: "Will you be present on the day of the wedding?",
    answer:
      "Yes, we offer day-of coordination services to ensure that everything runs smoothly on the wedding day. We will be present to manage any issues that may arise and ensure that the event is executed flawlessly.",
  },
  {
    question: "How far in advance should we book your services?",
    answer:
      "We recommend booking our services as soon as possible to ensure availability. We typically book weddings several months to a year in advance, especially during peak wedding season.",
  },
  {
    question: "Can you help with wedding design and decor?",
    answer:
      "Yes, we offer event design and styling services to help create a cohesive and beautiful look for the wedding. We can provide design concepts, source decor items, and oversee the setup and execution of the decor on the wedding day.",
  },
  {
    question: "Do you offer assistance with wedding invitations and other stationery?",
    answer:
      "Yes, we provide custom design services for wedding invitations, save-the-dates, programs, itineraries and other stationery items.",
  },
  {
    question: "How do we get started with your services?",
    answer:
      "Simply reach out to us through our website or contact form and we will schedule a consultation to discuss your needs and provide a custom quote for our services.",
  },
  {
    question: "Is my personal information safe on your website?",
    answer:
      "Yes, we take the security and privacy of your personal information very seriously. Our website uses industry-standard security measures to protect your data, and we never share your information with third parties without your consent.",
  },

  // 🔽 OLD QUESTIONS (Already Existing)

  {
    question: "How do I search for a wedding venue?",
    answer:
      "You can search for a wedding venue by location, capacity, and price range. Simply enter your desired search criteria into the search bar on our homepage and browse through the results.",
  },
  {
    question: "Can I book a wedding venue directly through this website?",
    answer:
      "No, we do not facilitate bookings directly through our website. However, we provide links to each venue's website or contact information so that you can reach out to them directly.",
  },
  {
    question: "How frequently is the information on this website updated?",
    answer:
      "We strive to keep our information as up-to-date as possible, but we cannot guarantee that all information is current at all times. We recommend that you contact the venue directly to confirm availability and pricing before making any decisions.",
  },
  {
    question: "How can I submit my wedding venue to be listed on this website?",
    answer:
      "If you own or manage a wedding venue and would like to be listed on our website, please reach out to us via our contact page with information about your venue, including its location, capacity, pricing, and amenities. We will review your submission and get back to you as soon as possible.",
  },
  {
    question: "Is there ample parking? Will guests be charged for parking?",
    answer:
      "Yes, all the venues have ample space for parking with valet facilities. We do not charge separately for it.",
  },
  {
    question: "Can you accommodate physically challenged guests?",
    answer:
      "Yes, all the entrances are accessible by wheelchairs.",
  },
  {
    question: "If I have a question other than the ones listed here, how can I contact you?",
    answer:
      "Simply share your queries along with your contact details and we will reach out to you.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-5" style={{ background: "white" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>

        {faqData.map((item, index) => (
          <div key={index} className="faq-item mb-3 p-3 rounded shadow-sm bg-white">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: "pointer" }}
            >
              <h6 className="mb-0 fw-semibold">{item.question}</h6>
              <span style={{ fontSize: "20px" }}>
                {activeIndex === index ? "−" : "›"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="mt-3 text-muted">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
