import Link from "next/link";


export default function MenuItem({title, address, Icon}) {
  return (
    <div>
      <Link href={address} className="hover:text-blue-800">
      <Icon className="text-2xl sm:hidden"/>
      <p className="hidden sm:inline text-sm font-bold ">{title}</p>
      </Link>
    </div>
  )
}
