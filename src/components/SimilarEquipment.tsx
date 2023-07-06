import { Link, useLocation } from "react-router-dom";
import { fetchData, exercisesOption } from "../utils/fetchData";
import { useState, useEffect } from "react";
import { Exercise } from "../types";
import { InfinitySpin } from "react-loader-spinner";

function SimilarEquipment() {
   const [EquipmentExecises, setEquipmentExercises] = useState<Exercise[] | []>([]);
   const location = useLocation();
   const exercise = location.state.displayedExercise;

   const FetchEquipmentExercisesData = async () => {
      setEquipmentExercises([]);
      const similarEquipmentExercises = await fetchData(
         `https://exercisedb.p.rapidapi.com/exercises/equipment/${exercise.equipment}`,
         exercisesOption
      );
      setEquipmentExercises(similarEquipmentExercises);
   };

   useEffect(() => {
      FetchEquipmentExercisesData();
   }, [exercise.equipment]);

   return (
      <section className="flex flex-col m-auto p-auto mb-16">
         <h2 className="flex lg:font-bold lg:text-3xl font-semibold md:text-2xl text-xl text-SafetyOrange mb-8">
            Similar equipment exercises
         </h2>
         <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap py-4 gap-x-8">
               {EquipmentExecises.length ? (
                  EquipmentExecises.map((EquipmentExecise) => (
                     <Link
                        key={EquipmentExecise.id}
                        to={`/exercises-page/exercise-details-page/${EquipmentExecise.id}`}
                        state={{ displayedExercise: EquipmentExecise }}
                     >
                        <div className="rounded-md md:w-[15rem] w-[12rem] hover:cursor-pointer hover:scale-110 duration-300">
                           <img
                              src={EquipmentExecise.gifUrl}
                              alt={`${EquipmentExecise.name}gif`}
                              className="mb-4 rounded-md"
                           />
                           <p className="text-SafetyOrange sm:font-bold md:text-lg text-base font-semibold px-4 mb-4">
                              {EquipmentExecise.name.toUpperCase()}
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

export default SimilarEquipment;
