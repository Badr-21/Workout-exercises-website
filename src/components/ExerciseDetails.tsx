import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ExerciseDetails() {
   const sectionRef = useRef<HTMLElement>(null);
   const location = useLocation();
   const exercise = location.state.displayedExercise;

   useEffect(() => {
      sectionRef.current?.scrollIntoView({
         behavior: "smooth",
      });
   }, [exercise.id]);

   return (
      <section
         ref={sectionRef}
         key={exercise.id}
         className="flex lg:justify-around md:justify-between md:flex-row flex-col gap-y-8 items-center md:my-[5rem] my-[3rem]"
      >
         <img
            src={exercise.gifUrl}
            alt={exercise.name}
            className="border-SafetyOrange border-2 w-[20rem]"
         />
         <div>
            <p className="text-SafetyOrange sm:font-bold sm:text-xl mb-8 font-semibold text-lg">
               Name:{" "}
               <span className="text-white sm:font-semibold sm:text-lg font-medium text-base">
                  {exercise.name}
               </span>
            </p>
            <p className="text-SafetyOrange sm:font-bold sm:text-xl mb-8 font-semibold text-lg">
               Body-part:{" "}
               <span className="text-white sm:font-semibold sm:text-lg font-medium text-base">
                  {exercise.bodyPart}
               </span>
            </p>
            <p className="text-SafetyOrange sm:font-bold sm:text-xl mb-8 font-semibold text-lg">
               Target:{" "}
               <span className="text-white sm:font-semibold sm:text-lg font-medium text-base">
                  {exercise.target}
               </span>
            </p>
            <p className="text-SafetyOrange sm:font-bold sm:text-xl mb-8 font-semibold text-lg">
               Equipment:{" "}
               <span className="text-white sm:font-semibold sm:text-lg font-medium text-base">
                  {exercise.equipment}
               </span>
            </p>
         </div>
      </section>
   );
}

export default ExerciseDetails;
