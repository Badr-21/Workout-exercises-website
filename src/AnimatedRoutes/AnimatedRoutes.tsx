import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Exercises from "../pages/Exercises";
import About from "../pages/About";
import { useState } from "react";
import { Exercise } from "../components/Hero";
export type Exercises = Exercise[] | [];

function AnimatedRoutes() {
   const [exercises, setExercises] = useState<Exercises>([]);

   return (
      <AnimatePresence>
         <Routes>
            <Route path="/" element={<Home exercises={exercises} setExercises={setExercises} />} />
            <Route path="exercises" element={<Exercises />} />
            <Route path="about" element={<About />} />
         </Routes>
      </AnimatePresence>
   );
}

export default AnimatedRoutes;
