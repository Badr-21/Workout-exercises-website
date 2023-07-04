import { useEffect, useRef } from "react";
import { fetchData, exercisesOption } from "../utils/fetchData";
import { ExercisesSearchedResultPropsType } from "../types";
import { Link, useLocation } from "react-router-dom";

function ExercisesSearchedResult({
   setExercises,
   displayedExercises,
   search,
   setSearch,
   changePage,
   setChangePage,
}: ExercisesSearchedResultPropsType) {
   const resultRef = useRef<HTMLHeadingElement>(null);

   const location = useLocation();

   const FetchAllExecisesData = async () => {
      const allExercisesData = await fetchData(
         "https://exercisedb.p.rapidapi.com/exercises",
         exercisesOption
      );
      setExercises(allExercisesData);
      setSearch(true);
   };

   const fetchClickedCategoryData = async () => {
      const clickedCategoryExercises = await fetchData(
         `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${location.state.category}`,
         exercisesOption
      );
      setExercises(clickedCategoryExercises);
      setSearch(true);
   };

   useEffect(() => {
      if (!location.state?.category) {
         FetchAllExecisesData();
      } else {
         if (location.state.category === "all") {
            FetchAllExecisesData();
         } else {
            fetchClickedCategoryData();
         }
      }
   }, []);

   useEffect(() => {
      if (search) {
         resultRef.current?.scrollIntoView({
            behavior: "smooth",
         });
      }
      setSearch(false);
   }, [search]);

   useEffect(() => {
      if (changePage) {
         resultRef.current?.scrollIntoView({
            behavior: "smooth",
         });
      }
      setChangePage(false);
   }, [changePage]);

   return (
      <section className="">
         <h2 ref={resultRef} className="text-SafetyOrange text-2xl font-semibold mb-12">
            Exercises results
         </h2>
         <div className="flex flex-wrap justify-between gap-y-14">
            {displayedExercises.map((displayedExercise) => (
               <Link
                  key={displayedExercise.id}
                  to={`exercise-details-page/${displayedExercise.id}`}
                  state={{ displayedExercise: displayedExercise }}
               >
                  <div className="border-2 rounded-md border-SafetyOrange w-[23rem] bg-white hover:cursor-pointer hover:scale-110 duration-300">
                     <img
                        src={displayedExercise.gifUrl}
                        alt={`${displayedExercise.name}gif`}
                        className="mb-8"
                     />
                     <div className="flex gap-x-8 px-4 mb-8">
                        <p className="bg-SafetyOrange text-EerieBlack font-semibold rounded-md p-2">
                           {displayedExercise.bodyPart.toUpperCase()}
                        </p>
                        <p className="bg-SafetyOrange text-EerieBlack font-semibold rounded-md p-2">
                           {displayedExercise.target.toUpperCase()}
                        </p>
                     </div>
                     <p className="text-EerieBlack font-bold text-lg px-4 mb-4">
                        {displayedExercise.name.toUpperCase()}
                     </p>
                  </div>
               </Link>
            ))}
         </div>
      </section>
   );
}

export default ExercisesSearchedResult;
