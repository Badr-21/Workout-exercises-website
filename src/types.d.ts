export interface Options {
   method: string;
   headers: {
      "X-RapidAPI-Key": string;
      "X-RapidAPI-Host": string;
   };
}

export interface Exercise {
   bodyPart: string;
   equipment: string;
   gifUrl: string;
   id: string;
   name: string;
   target: string;
}
export type categoriesType = string[];

export interface Exercises {
   exercises: Exercise[] | [];
   setExercises: React.Dispatch<React.SetStateAction<Exercise[] | []>>;
}

export interface ExercisesSearchedResultPropsType extends Exercises {
   displayedExercises: Exercise[] | [];
   search: boolean;
   setSearch: React.Dispatch<React.SetStateAction<boolean>>;
   changePage: boolean;
   setChangePage: React.Dispatch<React.SetStateAction<boolean>>;
   query: string;
}

export interface PaginationPropsType extends Exercises {
   setDisplyedExercises: React.Dispatch<React.SetStateAction<Exercise[] | []>>;
   setChangePage: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Video {
   channelId: string;
   channelName: string;
   description: string;
   lengthText: string;
   publishedTimeText: string;
   thumbnails: {
      0: {
         height: number;
         url: string;
         width: number;
      };
      1: {
         height: number;
         url: string;
         width: number;
      };
   };
   title: string;
   videoId: string;
   viewCountText: string;
}

export interface VideoData {
   video: Video;
}

export interface Videos {
   videos: Video;
   setVideos: React.Dispatch<React.SetStateAction<never[]>>;
}

export interface searchPropsType extends Exercises {
   setSearch: React.Dispatch<React.SetStateAction<boolean>>;
   query: string;
   setQuery: React.Dispatch<React.SetStateAction<string>>;
}
