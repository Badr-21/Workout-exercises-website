import { useState, useEffect } from "react";
import { fetchData, exercisesOption } from "../utils/fetchData";
import PlatinumGymIcon from "../assets/platinum-gym-logo.svg";
import { categoriesType } from "../types";
import { Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

function Categories() {
   const [categories, setCategories] = useState<categoriesType>([]);
   const FetchCategories = async () => {
      const categoriesData = await fetchData(
         "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
         exercisesOption
      );
      setCategories(["all", ...categoriesData]);
   };

   useEffect(() => {
      FetchCategories();
   }, []);
   return (
      <section className="flex flex-col m-auto p-auto mb-16">
         <h1 className="flex font-bold text-3xl text-SafetyOrange mb-8">Categories</h1>
         <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap py-8">
               {categories.length ? (
                  categories.map((category) => {
                     return (
                        <Link key={category} to="exercises-page" state={{ category: category }}>
                           <div
                              id={category}
                              className="inline-block px-4 hover:cursor-pointer hover:scale-110 duration-300 bg-EerieBlack"
                           >
                              <div
                                 id={category}
                                 className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center gap-y-4"
                              >
                                 <img
                                    id={category}
                                    className="w-32"
                                    src={PlatinumGymIcon}
                                    alt="Platinum gym icon"
                                 />
                                 <p id={category} className="text-3xl font-bold text-Jet">
                                    {category.toUpperCase()}
                                 </p>
                              </div>
                           </div>
                        </Link>
                     );
                  })
               ) : (
                  <InfinitySpin color="#ff851b" />
               )}
            </div>
         </div>
      </section>
   );
}

export default Categories;
