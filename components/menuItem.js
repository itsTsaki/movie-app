import Link from "next/link";


export default function MenuItem({title, address, Icon}) {
  return (
    <div>
      <Link href={address} className="hover:text-amber-50">
      <Icon className="text-2xl sm:hidden"/>
      <p className="hidden sm:inline text-3xl font-bold ">{title}</p>
      </Link>
    </div>
  )
}
