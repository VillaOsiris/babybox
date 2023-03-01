import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";

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
    <div className="app bg-blue-300">
      <Navbar scrollY={scrollY} />
    </div>
  );
}

export default App;
