
import videoData from "../data/marvel.json";

export const MarvelVideos = () => {
/*  */
  return videoData.items.map((item) => {
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id: item?.id?.videoId,
    };
  });
};