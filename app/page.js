import Result from "@/components/result";

const API_KEY = process.env.TMDB_API_KEY
const URL = process.env.TMDB_URL

export default async function Home({searchParams}) {
  
  const genre = await searchParams.genre || 'fetchTrending';
  const res = await fetch(`${URL}${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`);
  const data = await res.json();
  if(!res.ok){
    throw new Error('Something went wrong')
  }
  const results = data.results;
  
  return (
    <div>
      <Result results={results}/>
    </div>
  );
}
