
import MenuItem from "./menuItem";
import { MdHome } from "react-icons/md";


export default function Header() {
  return (
    <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <div>
        <MenuItem title="PopcornFlix" address='/' Icon={MdHome}/>
      </div>
    </div>
  )
}
