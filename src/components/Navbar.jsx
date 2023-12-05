import React, { useEffect, useState } from "react";
import logo from "../../images/logo1.png";
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //Sett toggle Menu

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Services", path: "services" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-1"
          >
            <img
              src={logo}
              alt=""
              className="w-11 inline-block items-ceneter"
            />
            <span className="text-[#263238] text-base">RUSH HOUR</span>
          </a>
        
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navItems.map(({ link, path }) => 
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium "
              >{link}
              </Link> )}
          </ul>
         
          <div className="space-x-12 hidden lg:flex items-center ">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Sign up</button>
          </div>

          <div className="md:hidden">
          <button onClick={toggleMenu} className="text-neutralDGrey focus:outline-none focus:text-gray-500">
          {
            isMenuOpen ? (<FaXmark className="h-6 w-6"/>) : (<FaBars className="h-6 w-6"/>)
          }
          </button>
          </div>
        </div>

        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary cursor-pointer ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {
            navItems.map(({ link, path }) => 
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-white hover:text-neutralDGrey first:font-medium text-center"
              >{link}
              </Link> )
        }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
