import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import FabScrollToTop from "../components/FabScrollToTop";
import Main from "../components/sections/Main";
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
    </>
  );
};
export default Home;
