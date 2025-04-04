'use client'
import { useEffect } from "react"

export default function Error({error,reset}) {

  useEffect(() => {
    console.log(error);
    
  }, [error])
  
  return (
    <div className="text-center mt-5">
      <h1 className="text-2xl">Something went wrong!</h1>
      <button className="hover:text-amber-950 cursor-pointer" onClick={()=> reset()}>Click to refresh</button>
    </div>
  )
}
