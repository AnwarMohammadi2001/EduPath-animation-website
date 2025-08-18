import React from "react";
import { Users, CheckCircle, RefreshCw, ArrowBigLeft } from "lucide-react";
import { IoIosArrowRoundForward } from "react-icons/io";

const softSkills = [
  {
    id: 1,
    title: "Leadership",
    icon: <Users className="w-5 h-5 text-white" />,
    description:
      "Ability to guide, motivate, and inspire a team toward achieving common goals.",
  },
  {
    id: 2,
    title: "Responsibility",
    icon: <CheckCircle className="w-5 h-5 text-white" />,
    description:
      "Taking ownership of tasks and delivering results with accountability.",
  },
  {
    id: 3,
    title: "Flexibility",
    icon: <RefreshCw className="w-5 h-5 text-white" />,
    description:
      "Adapting to changes quickly and efficiently in different situations.",
  },
];

const Skill = () => {
  return (
    <div className="min-h-screen px-12  relative ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <h3 className="text-xl md:text-3xl lg:text-5xl max-w-md ">
          Get the skills you need for a job that is in demand
        </h3>
        <p className="text-lg text-gray-700 pt-2 pr-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          animi. Aliquam, expedita quis aliquid dolorem ex optio pariatur,
          voluptas beatae iusto eos accusantium atque vero fugiat tempore
        </p>
      </div>
      <div className="h-[500px] flex gap-5 items-center relative w-full mt-7">
        <div className="absolute h-24 bg-[#6c8555] -top-12 w-[500px] right-20 py-4 px-10 grid grid-cols-2 z-20 gap-7">
          <div className="flex items-center gap-3 border-r-2 border-white">
            <span className="text-6xl font-bold text-white">15</span>
            <p className="text-white max-w-1 text-lg font-medium">
              Leadership Projects
            </p>
          </div>
          <div className="flex items-center gap-3 ">
            <span className="text-6xl font-bold text-white">15</span>
            <p className="text-white text-lg max-w-1 font-medium">
              Successful Trainings
            </p>
          </div>
        </div>
        {/* Left Column: Timeline */}
        <div className="w-[350px] relative p-5 mt-8 h-full">
          {/* Vertical Line */}
          <div className="absolute left-12 top-10 h-[280px] w-[2px] bg-black/20 z-0"></div>

          {/* Skills List */}
          <div className="grid grid-cols-1 gap-6 relative z-10">
            {softSkills.map((skill) => (
              <div key={skill.id} className="flex gap-5 items-start">
                {/* Icon wrapper */}
                <div className="relative flex items-center justify-center h-14 w-14 mt-1">
                  {/* Icon circle */}
                  <span className="bg-primary h-10 w-10 flex items-center justify-center rounded-full   shadow-md z-20">
                    {skill.icon}
                  </span>
                </div>

                {/* Skill content */}
                <div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="text-gray-600 max-w-[200px] text-base mt-2">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 h-full relative">
          <img
            src="skill.webp"
            alt="Skill illustration"
            className="rounded-xl object-cover h-full w-full"
          />
          <div className="absolute bottom-5 right-5 bg-white p-1 rounded-full">
            <IoIosArrowRoundForward className="text-black"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
