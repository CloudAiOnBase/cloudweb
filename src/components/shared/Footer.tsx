import { FaGithub, FaXTwitter } from "react-icons/fa6"
import uniswap from "../../../public/icons/ic_uni.png"
import dex from "../../../public/icons/ic_dex.png"

const Footer = () => {
    return (
        <section className="z-50 bg-white/45 px-6 py-2 border-t border-zinc-700 backdrop-blur-md shadow-md fixed bottom-0 left-0 right-0">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <div className="">© <span className="font-mono">{new Date().getFullYear()}</span> CloudAI | All Rights Reserved</div>

                <div className="flex items-center gap-2">
                    <a href="https://app.uniswap.org/explore/tokens/base/0x2425598dd959e47a294a737ee4104316864817cf"><img src={uniswap} alt="Uniswap" className="size-7" /></a>
                    <a href="https://dexscreener.com/base/0x0dc88ca39B46Ae5A43Afef291710D01CE3f86077"><img src={dex} alt="dex" className="size-7" /></a>
                    
                    <span className="hidden md:flex border-l border-gray-300 h-6 self-center"></span>

                    <a className="hidden md:flex" href="https://x.com/CloudAiOnBase"><FaXTwitter className="size-7" /></a>
                    <a className="hidden md:flex" href="https://github.com/orgs/CloudAiOnBase"><FaGithub className="size-7" /></a>
                </div>

                <div className="hidden sm:flex gap-2 sm:gap-1">
                    <a className="common" href="/about">About Us</a>
                    <a className="common" href="/privacypolicy">Privacy Policy</a>
                    <a className="common" href="/contact">Contact</a>
                </div>
            </div>
        </section>
    )
}

export default Footer