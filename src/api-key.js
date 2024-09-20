import axios from "axios";

const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDUyYzcyNDBlZmNkYWU2NmM1Mjk2ZTc5MjJkMmEyNCIsIm5iZiI6MTcyNjQyNjg4MS4zNzY1OTIsInN1YiI6IjY2ZTcyODBlMDUwZjE0ZTRmY2NmYTQxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0PZsubqYrcWg8uFqWhiKIUpX33OvY12A8d7MUE5nqfc";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_KEY}`,
  },
});
export const moviesApi = {
  fetchMovies: async () => {
    const response = await instance.get("/trending/movie/day");
    console.log(response.data);
    return response.data;
  },
  getMovieDetails: async (id) => {
    const response = await instance.get(`/movie/${id}`);
    console.log(response.data);
    return response.data;
  },
  getMovieCredits: async (id) => {
    const response = await instance.get(`/movie/${id}/credits`);
    console.log(response.data);
    return response.data;
  },
  getMovieReviews: async (id) => {
    const response = await instance.get(`/movie/${id}/reviews`);
    console.log(response.data);
    return response.data;
  },
  getMovieByQuery: async (query) => {
    const options = {
      params: { query },
    };
    const response = await instance.get(`/search/movie`, options);
    console.log(response.data);
    return response.data;
  },
};
