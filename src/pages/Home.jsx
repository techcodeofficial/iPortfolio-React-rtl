import { useEffect, useState } from "react";
import FabScrollToTop from "../components/common/FabScrollToTop";
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
      <Main />
      <FabScrollToTop showScrollToTop={showScrollToTop} />
    </>
  );
};
export default Home;
