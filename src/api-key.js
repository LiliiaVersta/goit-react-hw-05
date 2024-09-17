import axios from "axios";

const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDUyYzcyNDBlZmNkYWU2NmM1Mjk2ZTc5MjJkMmEyNCIsIm5iZiI6MTcyNjQyNjg4MS4zNzY1OTIsInN1YiI6IjY2ZTcyODBlMDUwZjE0ZTRmY2NmYTQxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0PZsubqYrcWg8uFqWhiKIUpX33OvY12A8d7MUE5nqfc";

const moviesApi = {
  fetchMovies: async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/movie/day",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    };

    return axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data.results;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  getMovieDetails: async (id) => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/" + id,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    };

    return axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};

export default moviesApi;
