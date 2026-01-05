import { useEffect } from "react";
import Home from "./pages/Home";
import AOS from "aos";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router";
import "aos/dist/aos.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import PortfolioDetail from "./pages/PortfolioDetail";
import ServiceDetail from "./pages/ServiceDetail";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-detail/:id" element={<PortfolioDetail />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
