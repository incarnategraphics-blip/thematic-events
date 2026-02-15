import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AOS from "aos";
import Services from "./components/Services";
import { useEffect, useState } from "react";
import Work from "./components/Work";
import Slot from "./components/Slot";
import Customer from "./components/Custumer";
import Stats from "./components/Stats";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import Loaderr from "./components/Loaderr";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 sec loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loaderr />;

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Work />
      <Slot />
      <Stats />
      <Customer />
      <Faq />
      <Footer />

    </>
  );
}

export default App;

