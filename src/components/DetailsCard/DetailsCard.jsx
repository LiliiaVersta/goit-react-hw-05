export default function DetailsCard({ data }) {
  const movieTitle = `${data.title} (${data.release_date.split("-")[0]})`;
  console.log(movieTitle);
  const imgUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  console.log(imgUrl);
  const genreList = data.genres.map((item) => item.name).join(" ");
  return (
    <div>
      <h1>{movieTitle}</h1>
      <img src={imgUrl} style={{ maxWidth: "150px" }} />
      <h3>Overview</h3>
      <p>{data.overview}</p>
      <h3>Genres</h3>
      <p>{genreList}</p>
    </div>
  );
}
