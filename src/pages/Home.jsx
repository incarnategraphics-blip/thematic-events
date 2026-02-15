import ContactForm from "../components/Contactform";
import Img from "../assests/bg.webp";

const Home = () => {
  return (
    <div
      className="container-fluid text-white"
      style={{
        backgroundImage:
          `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${Img})`,
        backgroundSize: "cover",
        minHeight: "90vh",
      }}
    >
      <div className="row align-items-center px-5" style={{ minHeight: "90vh" }}>
        <div className="col-md-7" data-aos="fade-right">
          <h1 className="display-4 fw-bold neon text-white">
          Every Ritual. Every Emotion. Perfectly Planned.
          </h1>
         
        </div>

        <div className="col-md-4 " data-aos="fade-left">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
