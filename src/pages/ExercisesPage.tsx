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
   const [query, setQuery] = useState("");
   const [changePage, setChangePage] = useState(false);

   return (
      <motion.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{
            opacity: 0,
         }}
         className="lg:px-16 sm:px-8 px-4 lg:py-36 py-24 bg-EerieBlack"
      >
         <h1 className="text-SafetyOrange lg:font-bold lg:text-[2rem] mb-16 font-semibold md:text-[1.8rem] text-[1.6rem]">
            Search for any exercise, body-part, or equipment, there are +1000 exercises.
         </h1>
         <Search
            exercises={exercises}
            setExercises={setExercises}
            setSearch={setSearch}
            query={query}
            setQuery={setQuery}
         />
         <ExercisesSearchedResult
            exercises={exercises}
            setExercises={setExercises}
            displayedExercises={displayedExercises}
            search={search}
            setSearch={setSearch}
            changePage={changePage}
            setChangePage={setChangePage}
            query={query}
         />
         <Pagination
            exercises={exercises}
            setExercises={setExercises}
            setDisplyedExercises={setDisplyedExercises}
            setChangePage={setChangePage}
         />
      </motion.main>
   );
}

export default ExercisesPage;
