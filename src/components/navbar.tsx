import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.svg";
import Link from "./link";
import useMediaQuery from "@/hooks/mediaHook";
import Button from "./button";

type Props = {
  scrollY: number;
};

function Navbar({ scrollY }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navBg = scrollY === 0 ? "" : "bg-green-200 bg-opacity-50 drop-shadow";

  return (
    <nav>
      <div
        className={`${navBg} flex items-center justify-between fixed top-0 z-30 w-full py-6`}
      >
        <div className="flex items-center justify-between mx-auto w-5/6 gap-16">
          <img src={Logo} alt="baby box logo" height="40px" />

          {isAboveMediumScreens ? (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-between gap-8">
                <Link page="Home" />
                <Link page="About Us" />
                <Link page="Our Plans" />
                <Link page="Contact Us" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <Button text="Sign In" />
                <Button text="Subscribe" />
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-yellow-300 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Bars3Icon className="h-6 w-6  text-amber-900" />
            </button>
          )}
        </div>
      </div>
      {!isAboveMediumScreens && isMenuOpen && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-green-200 text-white">
          <div className="flex justify-end p-12">
            <button
              className="rounded-full bg-yellow-300 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <XMarkIcon className="h-6 w-6  text-amber-900" />
            </button>
          </div>
          <div className="ml-[80px] flex flex-col gap-10 text-xl">
            <Link page="Home" />
            <Link page="About Us" />
            <Link page="Our Plans" />
            <Link page="Contact Us" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
