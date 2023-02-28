import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.svg";
import Link from "./link";
import useMediaQuery from "@/hooks/mediaHook";

type Props = {};

function Navbar({}: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className="flex items-center justify-between fixed top-0 z-30 w-full py-6">
        <div className="flex items-center justify-between mx-auto w-5/6 gap-16">
          <img src={Logo} alt="baby box logo" height="40px" />

          {isAboveMediumScreens ? (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-between gap-8 text-md font-bold">
                <Link page="Home" />
                <Link page="About Us" />
                <Link page="Our Plans" />
                <Link page="Contact Us" />
              </div>
              <div className="flex items-center justify-between gap-8">
                <p>sign in</p>
                <a>subscribe</a>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-yellow-300 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
