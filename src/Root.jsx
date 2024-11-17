import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import BackToTopButton from "./Components/BackToTopButton/BackToTopButton";

const Root = () => {
  return (
    <>
      <Header />
      <BackToTopButton />
      <div className="App">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
