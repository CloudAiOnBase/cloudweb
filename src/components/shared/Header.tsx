import { Link } from "react-router-dom"
import { FaFileLines, FaDiscord, FaToriiGate } from "react-icons/fa6";
// import { LuArrowUpRight } from "react-icons/lu";
import Logo from "@/components/shared/Logo";

const Header = () => {
  return (
    <section className="z-50 bg-white/15 border-b border-zinc-700 backdrop-blur-md shadow-md fixed top-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>
        <ul className="z-50 flex space-x-2 ml-auto mr-4 text-zinc-700 items-center">
          <li className="space-x-1">
            <Link className="common transition duration-250" to="/">
              <div className="flex items-center gap-1 hover:bg-violet-500/10 px-2">
                <FaToriiGate />
                <span className="hidden sm:inline">Home</span>
              </div>
            </Link>
          </li>
          <span className="border-l border-gray-300 h-6 self-center"></span>
          <li className="flex items-center space-x-1">
            <Link className="common transition duration-250" target="_blank" rel="noopener noreferrer" to="https://discord.com/invite/cqvUdjSZUR">
              <div className="flex items-center gap-1 hover:bg-violet-500/10 px-2">
                <FaDiscord className="size-6" />
                <span className="hidden sm:inline">Community</span>
              </div>
            </Link>
          </li>
          <span className="border-l border-gray-300 h-6 self-center"></span>
          <li className="space-x-1">
            <Link className="common transition duration-250" target="_blank" rel="noopener noreferrer" to="https://cloudaionbase.netlify.app/docs/">
              <div className="flex items-center gap-1 hover:bg-violet-500/10 px-2">
                <FaFileLines />
                <span className="hidden sm:inline">Docs</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header