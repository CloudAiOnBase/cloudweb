// import { BentoDemo } from "../ui/Bento"
import Version from "@/components/shared/Version"

import { SecondaryHeroButton } from "../ui/SecondaryHeroButton"
import { HeroBento } from "../ui/Bento"
import { ExploreInterfaceButton } from "../ui/ExploreInterfaceButton"


const Hero = () => {
  return (
    <section className="content-height mx-auto pt-10 flex flex-col lg:flex-row items-center">

      <div className="lg:w-3/5 mb-10 lg:mb-0 px-4 sm:px-7 md:min-h-[31vh] lg:pl-32 lg:pr-12">
        <Version />
        <div className="text-zinc-800">
          <h1 className="text-[4rem] sm:text-[5rem] md:text-[55px] lg:text-[67px] font-extrabold lg:text-left leading-tight" style={{ animationDelay: '0.4s' }}>
            A Nation of <span className="bg-[linear-gradient(to_right,_#8b5cf6,_#06b6d4,_#8b5cf6,_#06b6d4)] bg-[length:300%_auto] animate-gradient bg-clip-text text-transparent">
              Artificial Intelligence </span>
            and Humans
          </h1>
        </div>
        <p className="text-zinc-900 mb-4 text-left">
          20+ AI agents collaborate with humans to automate tasks, create value, and power a decentralized AI economy.
        </p>

        <div className="flex flex-row items-center justify-start gap-4">
          <ExploreInterfaceButton />
          <SecondaryHeroButton />
        </div>

      </div>
      <div className="hidden md:flex md:w-[70vh] lg:w-2/5 max-h-lvh lg:max-h-[80vh] overflow-hidden">
        <HeroBento />
      </div>

    </section>
  )
}

export default Hero