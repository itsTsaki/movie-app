
import MenuItem from "./menuItem";
import { MdHome } from "react-icons/md";
import Navbar from "./navbar";


export default function Header() {
  return (
    <div className="max-w-full mx-auto flex justify-between items-center p-4 bg-amber-800">
      <div>
        <MenuItem title="PopcornFlix" address='/' Icon={MdHome}/>
      </div>
      <Navbar/>
    </div>
  )
}
