import { Link } from "react-router-dom"
import { FaDiscord } from "react-icons/fa6";
// import { LuArrowUpRight } from "react-icons/lu";
import Logo from "@/components/shared/Logo";
import uniswap from "../../../public/icons/ic_uni.png"
import Motto from "./Motto";

const Header = () => {
  return (
    <section className="z-50 bg-white/15 border-b border-zinc-700 backdrop-blur-md shadow-md fixed top-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>
        <div className="hidden lg:flex items-center justify-center flex-grow pointer-events-none">
          <Motto />
        </div>
        <ul className="z-50 flex space-x-2 ml-auto mr-4 text-zinc-700 items-center">
          <li className="space-x-1">
            <Link className="common transition duration-250" target="_blank" rel="noopener noreferrer" to="https://wallet.coinbase.com/">
              <div className="flex items-center gap-1 hover:bg-violet-500/10 px-2">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#3f3f46"
                  stroke="#3f3f46" stroke-linecap="round" stroke-linejoin="round"
                  id="Brand-Coinbase--Streamline-Tabler"
                  className="size-6">
                  <path d="M12.95 22c-4.503 0 -8.445 -3.04 -9.61 -7.413 -1.165 -4.373 0.737 -8.988 4.638 -11.25a9.906 9.906 0 0 1 12.008 1.598l-3.335 3.367a5.185 5.185 0 0 0 -7.354 0.013 5.252 5.252 0 0 0 0 7.393 5.185 5.185 0 0 0 7.354 0.013L20 19.088A9.887 9.887 0 0 1 12.95 22z" stroke-width="2"></path></svg>

                <span className="hidden sm:inline">Coinbase</span>
              </div>
            </Link>
          </li>
          <span className="border-l border-gray-300 h-6 self-center"></span>
          <li className="space-x-1">
            <Link className="common transition duration-250" to="https://app.uniswap.org/explore/tokens/base/0x2425598dd959e47a294a737ee4104316864817cf">
              <div className="flex items-center gap-1 hover:bg-violet-500/10 px-2">
                <img src={uniswap} alt="uniswap" className="size-7" />
                <span className="hidden sm:inline">Uniswap</span>
              </div>
            </Link>
          </li>
          <span className="border-l border-gray-300 h-6 self-center"></span>
          <li className="flex items-center space-x-1">
            <Link className="common transition duration-250" target="_blank" rel="noopener noreferrer" to="https://discord.com/invite/cqvUdjSZUR">
              <div className="flex items-center gap-1 hover:bg-violet-500/10 px-2">
                <FaDiscord className="size-6" />
                <span className="hidden sm:inline">Discord</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header