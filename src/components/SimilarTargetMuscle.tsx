import { Link, useLocation } from "react-router-dom";
import { fetchData, exercisesOption } from "../utils/fetchData";
import { useState, useEffect } from "react";
import { Exercise } from "../types";
import { InfinitySpin } from "react-loader-spinner";

function SimilarTargetMuscle() {
   const [targetMuscleExecises, setTargetMuscleExecises] = useState<Exercise[] | []>([]);
   const location = useLocation();
   const exercise = location.state.displayedExercise;

   const FetchTargetMuscleExercisesData = async () => {
      setTargetMuscleExecises([]);
      const similarTargetMuscleExercises = await fetchData(
         `https://exercisedb.p.rapidapi.com/exercises/target/${exercise.target}`,
         exercisesOption
      );
      setTargetMuscleExecises(similarTargetMuscleExercises);
   };

   useEffect(() => {
      FetchTargetMuscleExercisesData();
   }, [exercise.target]);

   return (
      <section className="flex flex-col m-auto p-auto mb-16">
         <h2 className="flex lg:font-bold lg:text-3xl font-semibold md:text-2xl text-xl text-SafetyOrange mb-8">
            Similar target muscle exercises
         </h2>
         <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap py-4 gap-x-8">
               {targetMuscleExecises.length ? (
                  targetMuscleExecises.map((targetMuscleExecise) => (
                     <Link
                        key={targetMuscleExecise.id}
                        to={`/exercises-page/exercise-details-page/${targetMuscleExecise.id}`}
                        state={{ displayedExercise: targetMuscleExecise }}
                     >
                        <div className="rounded-md md:w-[15rem] w-[12rem] hover:cursor-pointer hover:scale-110 duration-300">
                           <img
                              src={targetMuscleExecise.gifUrl}
                              alt={`${targetMuscleExecise.name}gif`}
                              className="mb-4 rounded-md"
                           />
                           <p className="text-SafetyOrange sm:font-bold md:text-lg text-base font-semibold px-4 mb-4">
                              {targetMuscleExecise.name.toUpperCase()}
                           </p>
                        </div>
                     </Link>
                  ))
               ) : (
                  <InfinitySpin color="#ff851b" />
               )}
            </div>
         </div>
      </section>
   );
}

export default SimilarTargetMuscle;
