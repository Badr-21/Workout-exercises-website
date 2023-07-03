import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function AboutPage() {
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
      >
         hi
      </motion.main>
   );
}

export default AboutPage;
