import { Link, useLocation } from "react-router-dom";
import { fetchData, exercisesOption } from "../utils/fetchData";
import { useState, useEffect } from "react";
import { Exercise } from "../types";

function SimilarTargetMuscle() {
   const [targetMuscleExecises, setTargetMuscleExecises] = useState<Exercise[] | []>([]);
   const location = useLocation();
   const exercise = location.state.displayedExercise;

   const FetchTargetMuscleExercisesData = async () => {
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
         <h2 className="flex font-bold text-3xl text-SafetyOrange mb-8">
            Similar target muscle exercises
         </h2>
         <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap py-4 gap-x-8">
               {targetMuscleExecises.map((targetMuscleExecise) => (
                  <Link
                     key={targetMuscleExecise.id}
                     to={`/exercises-page/exercise-details-page/${targetMuscleExecise.id}`}
                     state={{ displayedExercise: targetMuscleExecise }}
                  >
                     <div className="rounded-md w-[15rem] hover:cursor-pointer hover:scale-110 duration-300">
                        <img
                           src={targetMuscleExecise.gifUrl}
                           alt={`${targetMuscleExecise.name}gif`}
                           className="mb-4 rounded-md"
                        />
                        <p className="text-SafetyOrange font-bold text-lg px-4 mb-4">
                           {targetMuscleExecise.name.toUpperCase()}
                        </p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}

export default SimilarTargetMuscle;
