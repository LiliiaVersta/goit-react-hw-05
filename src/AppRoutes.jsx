// import MovieCast from 'components/MovieCast/MovieCast';
// import MovieReviews from 'components/MovieReviews/MovieReviews';
// import HomePage from 'pages/HomePage/HomePage';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { lazy, Suspense } from "react";
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading page...</div>}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />

      <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
