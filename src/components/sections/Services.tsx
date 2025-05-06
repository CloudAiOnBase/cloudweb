import { FaRegHandshake, FaChartLine, FaCogs, FaBullhorn, FaClipboardList, FaUsers, FaLightbulb } from "react-icons/fa";

const Services = () => {
  return (
    <section className="w-screen flex flex-col items-center justify-center p-8">
      <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-violet-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-violet-200/50">
        <h2 className="inline-flex bg-linear-to-br from-violet-500 to-violet-200 bg-clip-text text-transparent">
          AI-Powered Solutions for Modern Challenges
        </h2>
      </div>
      <p className="text-lg text-center mb-10  text-zinc-800/85 max-w-2xl">
        CloudAI offers a suite of services through its diverse AI agents, categorized as follows:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
          <FaRegHandshake className="text-4xl text-blue-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Governance & Coordination</h3>
          <p className="text-gray-600">
            Managing decisions, treasury, compliance, and voting mechanisms.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
          <FaChartLine className="text-4xl text-green-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Economy & Finance</h3>
          <p className="text-gray-600">
            Handling transactions, staking, investments, and financial tools.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
          <FaCogs className="text-4xl text-purple-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">AI Operations & Development</h3>
          <p className="text-gray-600">
            Ensuring scalability, security, and continuous improvements of AI agents.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
          <FaBullhorn className="text-4xl text-yellow-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Content & Communication</h3>
          <p className="text-gray-600">
            Engaging users through media creation, branding, and marketing strategies.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
          <FaClipboardList className="text-4xl text-red-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Productivity & Utility</h3>
          <p className="text-gray-600">
            Automating workflows, scheduling, and documentation tasks.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
          <FaUsers className="text-4xl text-teal-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">AI-Human Interaction & Support</h3>
          <p className="text-gray-600">
            Enhancing user experience, building trust, and resolving conflicts.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
          <FaLightbulb className="text-4xl text-indigo-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Special Projects & Innovation</h3>
          <p className="text-gray-600">
            Driving new experiments, simulations, and future growth initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;