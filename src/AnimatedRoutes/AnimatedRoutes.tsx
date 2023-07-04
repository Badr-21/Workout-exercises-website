import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/HomePage";
import ExercisesPage from "../pages/ExercisesPage";
import AboutPage from "../pages/AboutPage";
import ExerciseDetailsPage from "../pages/ExerciseDetailsPage";

function AnimatedRoutes() {
   return (
      <AnimatePresence>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="exercises-page">
               <Route index element={<ExercisesPage />} />
               <Route path="exercise-details-page/:id" element={<ExerciseDetailsPage />} />
            </Route>
            <Route path="about-page" element={<AboutPage />} />
         </Routes>
      </AnimatePresence>
   );
}

export default AnimatedRoutes;
