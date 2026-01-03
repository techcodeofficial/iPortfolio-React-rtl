import { useEffect } from "react";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-confirm-alert/src/react-confirm-alert.css";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Home />;
};
export default App;
