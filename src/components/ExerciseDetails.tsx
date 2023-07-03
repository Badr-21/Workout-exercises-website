import { useLocation } from "react-router-dom";

function ExerciseDetails() {
   const location = useLocation();
   const exercise = location.state.displayedExercise;
   return (
      <section key={exercise.id} className="flex justify-evenly items-center my-[5rem]">
         <img
            src={exercise.gifUrl}
            alt={exercise.name}
            className="border-SafetyOrange border-2 w-[20rem]"
         />
         <div>
            <p className="text-SafetyOrange font-bold text-xl mb-8">
               Name: <span className="text-white font-semibold text-lg">{exercise.name}</span>
            </p>
            <p className="text-SafetyOrange font-bold text-xl mb-8">
               Body-part:{" "}
               <span className="text-white font-semibold text-lg">{exercise.bodyPart}</span>
            </p>
            <p className="text-SafetyOrange font-bold text-xl mb-8">
               Target: <span className="text-white font-semibold text-lg">{exercise.target}</span>
            </p>
            <p className="text-SafetyOrange font-bold text-xl mb-8">
               Equipment:{" "}
               <span className="text-white font-semibold text-lg">{exercise.equipment}</span>
            </p>
         </div>
      </section>
   );
}

export default ExerciseDetails;
