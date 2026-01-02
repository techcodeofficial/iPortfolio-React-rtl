import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import FabScrollToTop from "../components/common/FabScrollToTop";
import Main from "../components/sections/Main";
import Footer from "../components/footer/Footer";
const Home = () => {
  let [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
        ? setShowScrollToTop(true)
        : setShowScrollToTop(false);
    });
  }, []);
  return (
    <>
      <Header />
      <Main />
      <FabScrollToTop showScrollToTop={showScrollToTop} />
      <Footer />
    </>
  );
};
export default Home;
