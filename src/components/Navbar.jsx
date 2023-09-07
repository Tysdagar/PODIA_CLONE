import React, { useState, useEffect } from "react";
import { PodiaIcon } from "../assets/Icons";
import NavMapLinks from "./NavbarComponents/NavMapLinks";
import { styles } from "../styles";
import DropdownMenu from "./NavbarComponents/DropdownMenu";
import { boxShadow } from "./constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScrollNavbar() {
      setScrolled(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScrollNavbar);

    return () => {
      window.removeEventListener("scroll", handleScrollNavbar);
    };
  }, []);

  const boxShadowScroll = scrolled ? boxShadow : "";

  const NavbarStyle = {
    boxShadow: boxShadowScroll,
  };

  return (
    <header className="sticky top-0 z-10">
      <nav
        className={`w-full  bg-[#fff]  transition-all duration-300 ease-in-out z-10`}
        style={NavbarStyle}
      >
        <div className="flex justify-between items-center max-w-[85rem] m-auto px-7 md:px-20 py-4">
          <div className="flex flex-1 justify-between items-center">
            <a href="#" className="mr-10">
              <h1 className={`text-primary font-black ${styles.hoverText}`}>
                <PodiaIcon />
              </h1>
            </a>
            <NavMapLinks render={true} />
          </div>
          <div className="flex w-[30%] md:w-[52%] justify-end items-center">
            <a href="" className={`${styles.textNav}`}>
              Login
            </a>
            <a href="" className={`${styles.buttonStyle} ml-7 md:block hidden`}>
              Sign up free
            </a>
          </div>
          <DropdownMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
