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
import Loaderr from "./components/Loaderr";
import TasksRedirect from "./components/TaskRedirect";

import { Routes, Route } from "react-router-dom";

function MainSite() {
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

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loaderr />;

  return (
    <Routes>
      <Route path="/" element={<MainSite />} />
      <Route path="/task" element={<TasksRedirect />} />
    </Routes>
  );
}

export default App;