import Link from "next/link";
import MenuItem from "./menuItem";
import { MdHome } from "react-icons/md";

export default function Header() {
  return (
    <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
      <div>
        <MenuItem title="PopcornFlix" address='/' Icon={MdHome}/>
      </div>
      <div className="flex gap-5 items-center">
        <Link href={'/'}>
          <span className="font-bold">Movies</span>
        </Link>
        <Link href={'/'}>
          <span className="font-bold">TV Shows</span>
        </Link>
      </div>
    </div>
  )
}
