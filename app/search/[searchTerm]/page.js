import Result from "@/components/result";

const API_KEY = process.env.TMDB_API_KEY
const URL = process.env.TMDB_URL

export default async function SearchPage({params}) {
  
  const searchTerm = params.searchTerm;
  const res = await fetch(`${URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=1`);
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results  && results.length ===  (<h1 className="text-center pt-6">No results found!</h1>)}
      {results && <Result results={results}/>}
    </div>
  )
}
