
import axios from "axios";

const ACCESS_KEY = "1Db1RtriniJkhRwxLzWzQaFC8sk3-WaKEQa-grG5dzk";
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 1000,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
    "Accept-Version": "v1",
  },
  params: {
    per_page: 12,
    orientation: "landscape",
  },
});

const fetchGalleryPhotos = async (query, page) => {
  const response = await instance.get("/search/photos", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export default fetchGalleryPhotos;
