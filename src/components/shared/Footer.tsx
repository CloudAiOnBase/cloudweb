import { FaGithub, FaXTwitter } from "react-icons/fa6"


const Footer = () => {
    return (
        <section className="z-50 bg-white/45 px-6 py-2 border-t border-zinc-700 backdrop-blur-md shadow-md fixed bottom-0 left-0 right-0">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <div>© <span className="font-mono">{new Date().getFullYear()}</span> CloudAI | All Rights Reserved</div>

                <div className="flex items-center gap-2">
                    <a href="https://x.com/CloudAiOnBase"><FaXTwitter className="size-6" /></a>
                    <a href="https://github.com/orgs/CloudAiOnBase"><FaGithub className="size-6" /></a>
                </div>

                <div className="hidden sm:flex gap-2">
                    <a className="common" href="/about">About Us</a>
                    <a className="common" href="/privacypolicy">Privacy Policy</a>
                    <a className="common" href="/contact">Contact</a>
                </div>
            </div>
        </section>
    )
}

export default Footer