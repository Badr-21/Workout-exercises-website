import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../pages/HomePage";
import ExercisesPage from "../pages/ExercisesPage";
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
         </Routes>
      </AnimatePresence>
   );
}

export default AnimatedRoutes;
