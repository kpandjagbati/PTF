import { useEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Experiences from "../components/Experiences";
import PortfolioHub from "../components/PortfolioHub";

interface HomeContext {
  onContactClick: () => void;
}

const HomePage = () => {
  const { onContactClick } = useOutletContext<HomeContext>();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    target?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <div className="p-5 md:px-[15%]">
        <Home onContactClick={onContactClick} />
      </div>

      <About />

      <main className="p-5 md:px-[15%]">
        <Experiences />
        <PortfolioHub />
      </main>
    </>
  );
};

export default HomePage;
