import Hero from "../components/Hero";
import { motion } from "framer-motion";
import Categories from "../components/Categories";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function HomePage() {
   const location = useLocation();
   useEffect(() => {
      location.state = "";
      console.log(location);
   });
   return (
      <motion.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{
            opacity: 0,
         }}
         className="px-16 py-4 bg-EerieBlack"
      >
         <Hero />
         <Categories />
      </motion.main>
   );
}

export default HomePage;
