import { Link, useLocation } from "react-router-dom";
import { fetchData, youtubeOptions } from "../utils/fetchData";
import { useEffect, useState } from "react";
import { Video, VideoData } from "../types";
function YoutubeVideos() {
   const [videos, setVideos] = useState<Video[] | []>([]);
   const location = useLocation();
   const exercise = location.state.displayedExercise;
   const FetchVideosData = async () => {
      const videosData = await fetchData(
         `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercise.name}`,
         youtubeOptions
      );
      const videoDisplayed = videosData.contents.map((videoData: VideoData) => videoData.video);
      setVideos(videoDisplayed);
   };

   useEffect(() => {
      FetchVideosData();
   }, [exercise.name]);

   return (
      <section className="flex flex-col m-auto p-auto mb-16">
         <h2 className="flex font-bold text-3xl text-SafetyOrange mb-8">Youtube videos</h2>
         <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap py-8">
               {videos.map((video: Video) => (
                  <Link
                     key={video.videoId}
                     to={`https://www.youtube.com/watch?v=${video.videoId}`}
                     target="_blank"
                     className=" hover:cursor-pointer px-4 hover:scale-110 duration-300"
                  >
                     <div id={video.videoId} className="inline-block w-[15rem] h-[12rem]">
                        <img
                           src={video.thumbnails[0].url}
                           alt={video.title}
                           className="w-[15rem] mb-4 rounded-md"
                        />
                        <p className="text-SafetyOrange font-bold text-lg px-4">{video.title}</p>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}

export default YoutubeVideos;
