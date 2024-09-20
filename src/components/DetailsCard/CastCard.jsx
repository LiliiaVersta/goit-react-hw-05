export default function CastCard({ itm }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${itm.profile_path}`}
        alt={itm.name}
        style={{ maxWidth: "150px" }}
      />
      <p>{itm.name}</p>
      <p>{itm.character}</p>
    </div>
  );
}
