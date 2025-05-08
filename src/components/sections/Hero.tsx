// import { BentoDemo } from "../ui/Bento"

import Version from "@/components/shared/Version"
import { HeroBento } from "../ui/Bento"
import { ExploreInterfaceButton } from "../ui/ExploreInterfaceButton"
import { SecondaryHeroButton } from "../ui/SecondaryHeroButton"


const Hero = () => {
  return (

    <section className="pt-5 pb-20 w-screen grid grid-cols-1 lg:grid-cols-2 items-center px-4 sm:px-7 lg:px-12 gap-8">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-start md:px-4">
        <Version />
        <div className="text-zinc-800">
          <h1 className="text-[4rem] sm:text-[5rem] md:text-[55px] lg:text-[67px] font-extrabold leading-tight">
            A Nation of{" "}
            <span className="bg-[linear-gradient(to_right,_#8b5cf6,_#06b6d4,_#8b5cf6,_#06b6d4)] bg-[length:300%_auto] animate-gradient bg-clip-text text-transparent">
              Artificial Intelligence{" "}
            </span>
            and Humans
          </h1>
        </div>
        <p className="text-zinc-900 mb-4">
          20+ AI agents collaborate with humans to automate tasks, create value, and power a decentralized AI economy.
        </p>
        <div className="flex flex-row items-center justify-start gap-4">
          <ExploreInterfaceButton />
          <SecondaryHeroButton />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center">
        <div className="w-full max-h-[190vh] sm:max-h-[140vh] lg:max-h-[130vh] overflow-hidden">
          <HeroBento />
        </div>
      </div>
    </section>
  )
}

export default Hero