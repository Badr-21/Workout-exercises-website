import PlatinumGymLogo from "../assets/platinum-gym-logo.svg";
import { Link } from "react-router-dom";
function Header() {
   return (
      <header className="flex items-center justify-between py-4 px-16 bg-EerieBlack">
         <Link to="/" reloadDocument>
            <img
               className="w-48 hover:cursor-pointer"
               src={PlatinumGymLogo}
               alt="Platinum gym logo"
            />
         </Link>
         <nav>
            <ul className="flex text-lg gap-x-8 text-SafetyOrange font-medium">
               <Link to="/">
                  <li className="hover:text-Platinum hover:cursor-pointer">Home</li>
               </Link>
               <Link to="exercises-page">
                  <li className="hover:text-Platinum hover:cursor-pointer">Exercises</li>
               </Link>
               <Link to="about-page">
                  <li className="hover:text-Platinum hover:cursor-pointer">About</li>
               </Link>
            </ul>
         </nav>
      </header>
   );
}

export default Header;
