'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function NavbarItems({title,param}) {
  
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <Suspense>
      <Link href={`/?genre=${param}`} className={`hover:text-amber-50 ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-50 rounded-lg' : ''}`}>
      {title}</Link>
      </Suspense>
  )
}
