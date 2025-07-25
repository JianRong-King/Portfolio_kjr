import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { IoLogoNodejs } from "react-icons/io";
import { FaJava } from "react-icons/fa";

const stackItems = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 3, name: "Typescript", icon: SiTypescript, color: "#3178C6" },
  { id: 4, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { id: 5, name: "Java", icon: FaJava, color: "white" },
];

export const Stack = () => {
  return (
    <section
      className="py-16 bg-black scroll-mt-20 "
      id="TechStack"
    >
      <div className="max-w-[1200px] mx-auto px-4 text-center bg-black">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">
          Tech Stack & <span className="text-purple-400">Tools</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 bg-black">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center flex-col rounded-xl p-4"
            >
              <div className="mb-4 bg-white/10 p-6 rounded-xl ">
                {React.createElement(item.icon, {
                  className: "w-32 h-32",
                  style: { color: item.color },
                })}
              </div>

              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
