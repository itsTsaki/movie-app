import Card from "./card";


export default function Result({results}) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto py-5 gap-3">
      {
        results.map((result)=>(
          <Card key={result.id} result={result}/>
        ))
      }
    </div>
  )
}
