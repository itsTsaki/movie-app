'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Search() {

  const [search, setSearch] = useState ('');
  const router = useRouter();
  const handleSubmit = (e)=>{
    e.preventDefault();
    router.push(`/search/${search}`);
  }

  return (
    <form className="flex justify-between px-5 max-w-7xl mx-auto" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for movies..." className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1" value={search} onChange={(e)=> setSearch(e.target.value)}></input>
      <button className="text-gray-950 disabled:text-gray-400" disabled={search === ''}>Search</button>
    </form>
  )
}
