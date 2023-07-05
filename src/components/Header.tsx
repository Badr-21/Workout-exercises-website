import PlatinumGymLogo from "../assets/platinum-gym-logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import menuHamburgerIcon from "../assets/burger-menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

function Header() {
   const [showSideBar, setShowSideBar] = useState(false);
   const [responsiveHeader, setResponsiveHeader] = useState(false);
   const navRef = useRef<HTMLHeadingElement>(null);

   const handleSideBar = () => {
      setShowSideBar(!showSideBar);
   };

   useEffect(() => {
      const handleResponsiveHeader = () => {
         if (window.innerWidth < 640) {
            setResponsiveHeader(true);
         } else {
            setResponsiveHeader(false);
         }
      };
      handleResponsiveHeader();
      window.addEventListener("resize", handleResponsiveHeader);
      return () => window.removeEventListener("rezise", handleResponsiveHeader);
   }, []);

   useEffect(() => {
      const closeSideBar = (e: Event) => {
         if (!navRef.current?.contains(e.target as Node)) {
            setShowSideBar(false);
         }
      };
      document.body.addEventListener("click", closeSideBar, true);
      return () => document.body.removeEventListener("click", closeSideBar, true);
   });
   return (
      <header className="relative z-10 w-full flex items-center sm:justify-between gap-x-8 py-4 sm:px-16 px-4 bg-EerieBlack">
         <img
            className={`${responsiveHeader ? "" : "hidden"} w-8 hover:cursor-pointer`}
            src={menuHamburgerIcon}
            alt="menu hamburger icon"
            onClick={handleSideBar}
         />
         <Link className="flex-shrink-0" to="/" reloadDocument>
            <img
               className="sm:w-48 w-36 hover:cursor-pointer"
               src={PlatinumGymLogo}
               alt="Platinum gym logo"
            />
         </Link>
         <nav
            ref={navRef}
            className={`${
               showSideBar ? "left-[0rem]" : "left-[-9rem]"
            } transition-left absolute top-0 flex flex-col items-start gap-y-8 pl-4 pr-8 pt-4 pb-8 sm:p-0 shadow duration-300 sm:static sm:flex-row sm:items-center sm:justify-between sm:shadow-none bg-EerieBlack`}
         >
            <img
               className={`${responsiveHeader ? "" : "hidden"} w-8 hover:cursor-pointer`}
               src={closeIcon}
               alt="close icon"
               onClick={handleSideBar}
            />
            <ul className="flex text-xl gap-x-8 text-SafetyOrange font-medium sm:flex-row flex-col sm:gap-y-0 gap-y-4">
               <Link to="/">
                  <li className="hover:text-Platinum hover:cursor-pointer">Home</li>
               </Link>
               <Link to="exercises-page">
                  <li className="hover:text-Platinum hover:cursor-pointer">Exercises</li>
               </Link>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
