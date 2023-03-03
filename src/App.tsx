import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app flex flex-col gap-10">
      <Navbar scrollY={scrollY} />
      <Home />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
