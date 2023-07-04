import { motion } from "framer-motion";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import ExercisesSearchedResult from "../components/ExercisesSearchedResult";
import { Exercise } from "../types";
import { useState } from "react";

function ExercisesPage() {
   const [exercises, setExercises] = useState<Exercise[] | []>([]);
   const [displayedExercises, setDisplyedExercises] = useState<Exercise[] | []>([]);
   const [search, setSearch] = useState(false);

   return (
      <motion.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{
            opacity: 0,
         }}
         className="px-16 py-36 bg-EerieBlack"
      >
         <h1 className="text-SafetyOrange font-bold text-4xl mb-16">
            Search for any exercise, body-part, or equipment, there are +1000 exercises.
         </h1>
         <Search exercises={exercises} setExercises={setExercises} setSearch={setSearch} />
         <ExercisesSearchedResult
            exercises={exercises}
            setExercises={setExercises}
            displayedExercises={displayedExercises}
            search={search}
            setSearch={setSearch}
         />
         <Pagination
            exercises={exercises}
            setExercises={setExercises}
            setDisplyedExercises={setDisplyedExercises}
         />
      </motion.main>
   );
}

export default ExercisesPage;
