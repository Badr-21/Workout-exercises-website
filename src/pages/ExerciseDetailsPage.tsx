import { motion } from "framer-motion";
import ExerciseDetails from "../components/ExerciseDetails";
import YoutubeVideos from "../components/YoutubeVideos";
import SimilarEquipment from "../components/SimilarEquipment";
import SimilarTargetMuscle from "../components/SimilarTargetMuscle";
function ExerciseDetailsPage() {
   return (
      <motion.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{
            opacity: 0,
         }}
         className="bg-EerieBlack lg:px-16 sm:px-8 px-4 py-8"
      >
         <ExerciseDetails />
         <YoutubeVideos />
         <SimilarTargetMuscle />
         <SimilarEquipment />
      </motion.main>
   );
}

export default ExerciseDetailsPage;
