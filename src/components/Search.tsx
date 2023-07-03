import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { fetchData, exercisesOption } from "../utils/fetchData";
import { Exercises } from "../types";
import { Exercise } from "../types";

function Search({ exercises, setExercises }: Exercises) {
   const [search, setSearch] = useState(false);
   const [query, setQuery] = useState("");
   const inputRef = useRef("");
   const location = useLocation();

   const handleQuery = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setQuery(event.target.value);
      console.log(event.target.value);
   };

   const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const exercisesData = await fetchData(
         "https://exercisedb.p.rapidapi.com/exercises",
         exercisesOption
      );
      const searchedExercises = exercisesData.filter(
         (exercise: Exercise) =>
            exercise.name.toLowerCase().includes(query.toLowerCase()) ||
            exercise.target.toLowerCase().includes(query.toLowerCase()) ||
            exercise.equipment.toLowerCase().includes(query.toLowerCase()) ||
            exercise.bodyPart.toLowerCase().includes(query.toLowerCase())
      );
      setQuery("");
      setExercises(searchedExercises);
      location.state = "";
      console.log(inputRef.current.value);
   };
   return (
      <section className="mb-40">
         <form className="flex border rounded-sm border-Platinum">
            <input
               type="text"
               ref={inputRef}
               placeholder="Search exercises"
               onChange={(e) => handleQuery(e)}
               className="w-full h-12 py-2 px-4 outline-none rounded-l-sm text-SafetyOrange font-medium"
            />
            <button
               type="submit"
               onClick={handleSubmit}
               className="w-[8rem] bg-SafetyOrange rounded-r-sm text-white font-semibold hover:bg-Almond hover:text-SafetyOrange"
            >
               Search
            </button>
         </form>
      </section>
   );
}

export default Search;
