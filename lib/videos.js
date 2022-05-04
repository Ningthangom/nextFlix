
import videoData from '../data/videos.json';
import BannerVideos from '../data/banner.json'

export const getVideos =  (searchQuery) => {
 
  return videoData.items.map((item) => {
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id: item?.id?.videoId,
    };
  });
}

export const bannerVideo = (searchQuery) => {
  return BannerVideos.items.map((item) => {
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id: item?.id?.videoId,
    };
  });
};