import { FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { MdOutlineHive } from "react-icons/md";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/AnimatedBeamMultipleOutput";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
// import AnimatedListDemo from "./AnimatedList";
import { VerticalMarquee } from "@/components/sections/VerticalMarquee";
import { ClientTweetCard } from "@/components/ui/ClientTweetCard";
import { AnimatedBeamMultipleInputDemo } from "./AnimatedBeamMultipleInput";

const files = [
  {
    name: "crypto.pdf",
    body: "CloudAI is a cryptocurrency token deployed on the BASE blockchain. The token's smart contract source code has been verified and is publicly available for audit.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Safe Records",
    description: "All your record encrypted and safe.",
    href: "https://basescan.org/token/0x2425598dD959E47a294A737eE4104316864817cf",
    cta: "Learn more",
    className: "col-span-3 sm:col-span-1 md:col-span-1", // Adjusted for smaller screens
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified by market reactions.",
    href: "https://x.com/CloudAiOnBase",
    cta: "Learn more",
    className: "col-span-3 sm:col-span-3 md:col-span-2", // Adjusted for smaller screens
    background: (
      <ClientTweetCard id="1888892087736975634" className="absolute right-2 top-4 h-[300px] w-full scale-90 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-92" />),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "https://cloudaionbase.netlify.app/docs/",
    cta: "Learn more",
    className: "col-span-3 sm:col-span-4 md:col-span-2", // Adjusted for smaller screens
    background: (
      <>
        <div className="hidden sm:hidden md:block">
          <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        </div>
        <div className="block sm:block md:hidden">
          <AnimatedBeamMultipleInputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        </div>
      </>
    ),
  },
  {
    Icon: MdOutlineHive,
    name: "Agents",
    description: "Get to know the agents under the cloudAI umbrella.",
    className: "col-span-3 sm:col-span-2 md:col-span-1", // Adjusted for smaller screens
    href: "https://cloudaionbase.netlify.app/docs/agents/",
    cta: "Learn more",
    background: (
      <VerticalMarquee
        pauseOnHover
        className="absolute h-[300px] w-full justify-center border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
      />
    ),
  },
];

export function HeroBento() {

  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
