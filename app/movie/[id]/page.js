import Image from "next/image";

const API_KEY = process.env.TMDB_API_KEY
const URL = process.env.TMDB_URL

export default async function DetailsPage({params}) {
  
  const movieId = params.id;
  const res = await fetch(`${URL}/movie/${movieId}?api_key=${API_KEY}`);
  const movie = await res.json();
  
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} width={500} height={300} className="rounded-lg" style={{maxWidth:'100%', height:'100%'}} alt={`${movie.backdrop_path}`}></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
          <p className="mb-3"><span className="font-semibold mr-1">Release Date : </span>{movie.release_date || movie.first_air_date}</p>
          <p className="text-lg mb-3">{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}
