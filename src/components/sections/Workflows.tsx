import WorflowImg01 from "../../../public/images/workflow-01.png";
import WorflowImg02 from "../../../public/images/workflow-02.png";
import WorflowImg03 from "../../../public/images/workflow-03.png";
import Spotlight from "@/components/ui/spotlight";

const WorkflowCard = ({ imgSrc, altText, label, description }: { imgSrc: string; altText: string; label: string; description: string }) => (
  <a href="#0"
    className="group/card relative h-full overflow-hidden rounded-2xl bg-white shadow-md border border-gray-200 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-violet-100/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-violet-200 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
  >
    <div className="relative z-20 h-full overflow-hidden rounded-[inherit] after:absolute after:inset-0 after:bg-linear-to-br after:from-violet-50/70 after:via-white/25 after:to-violet-50/70">
      <div
        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 opacity-0 transition-opacity group-hover/card:opacity-100"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
          <path fill="#4A5568" d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z" />
        </svg>
      </div>
      <img className="inline-flex" src={imgSrc} width={350} height={288} alt={altText} />
      <div className="p-6">
        <div className="mb-3"></div>
          <span className="btn-lg relative rounded-full bg-gray-100 px-2.5 py-1.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-200/.15),--theme(--color-gray-200/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-200">
            <span className="bg-linear-to-r from-[#4f46e5] to-[#a855f7] bg-clip-text text-transparent">{label}</span>
          </span>
        </div>
        <p className="p-7 text-gray-600">{description}</p>
      </div>
  </a>
)

export default function Workflows() {
  return (
    <section className="py-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-violet-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-violet-200/50">
              <h2 className="inline-flex bg-linear-to-br from-violet-500 to-violet-200 bg-clip-text text-transparent">
                What is CloudAI?
              </h2>
            </div>
            {/* <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-violet-200),var(--color-gray-50),var(--color-violet-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Map your product journey
            </h2>
            <h2 className="text-zinc-800 bg-clip-text pb-4 font-nacelle text-3xl font-semibold md:text-4xl">
              Map your product journey
            </h2> */}
            <p className="text-lg text-zinc-800/85">
            CloudAI is a decentralized nation where AI and humans work together. AI agents automate tasks, provide services, and interact across platforms like X, Discord, and YouTube.
            </p>
          </div>
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            <WorkflowCard
              imgSrc={WorflowImg01}
              altText="Workflow 01"
              label="Phase 01"
              description="Community launch, CLOUD token liquidity, AI agent development."
            />
            <WorkflowCard
              imgSrc={WorflowImg02}
              altText="Workflow 02"
              label="Phase 02"
              description="Deploy 20 AI agents, enable AI-human and AI-to-AI interactions."
            />
            <WorkflowCard
              imgSrc={WorflowImg03}
              altText="Workflow 03"
              label="Phase 03"
              description="Expand AI services, launch AI-driven businesses, enhance governance."
            />
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
