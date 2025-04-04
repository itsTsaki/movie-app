
import { Suspense } from "react";
import NavbarItems from "./navbarItems";


export default function Navbar() {
  return (
    <Suspense>
      <div className="flex justify-center gap-7  p-3 lg:text-lg font-bold ">
        <NavbarItems title="Trending" param="fetchTrending"/>
        <NavbarItems title="Top Rated" param="fetchTopRated"/>
        <NavbarItems title="TV Shows" param="fetchTV"/>
      </div>
    </Suspense>
  )
}
