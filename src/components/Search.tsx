import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { fetchData, exercisesOption } from "../utils/fetchData";
import { searchPropsType } from "../types";
import { Exercise } from "../types";

function Search({ setExercises, setSearch }: searchPropsType) {
   const [query, setQuery] = useState("");
   const inputRef = useRef<HTMLInputElement | null>(null);
   const location = useLocation();

   const handleQuery = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setQuery(event.target.value);
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

      setExercises(searchedExercises);
      location.state = "";
      setSearch(true);
      setQuery("");
      if (inputRef.current) inputRef.current.value = "";
   };

   return (
      <section className="mb-20">
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
