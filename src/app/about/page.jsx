"use client";

import Brain from "@/components/brain";
import { useScroll, useInView, motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function AboutPage() {
  const skillList = [
    "C",
    "C++",
    "Java",
    "Python",
    "Javascript",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Framer Motion",
    "SQL",
    "Mongoose",
    "Express.js",
    "React.js",
    "Next.js",
    "Node.js",
    "MATLAB",
    "Postman",
    "Git",
    "IntelliJ",
    "Visual Studio Code",
    "Sublime Text",
  ];
  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef(null);
  const skillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef(null);
  const experienceRefInView = useInView(experienceRef, { margin: "-100px" });
  const achieveRef = useRef(null);
  const achieveRefInView = useInView(achieveRef, { margin: "-100px" });

  return (
    <motion.div className="h-full"
    initial={{y: "-200vh"}}
    animate={{y: "0%"}}
    transition={{duration: 1}}
    >
      {/* Container  */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}  style={{
          overflow: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}>
        {/* Text Container  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Biography Container  */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography Title  */}
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">BIOGRAPHY</h1>
            {/* Biography DESC  */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
              <p className="text-lg text-gray-200">
                {"I'm Shivam Verma, a backend developer passionate about building efficient and scalable web applications. With experience in Node.js, Express.js, and databases like MongoDB and SQL, I develop secure, high-performance systems. My work spans full-stack projects, from task management platforms to interactive coding environments. Always exploring new technologies, I focus on creating seamless digital experiences through clean, maintainable code."}
              </p>
            </div>
            
            {/* Biography Quote  */}
            <div className="bg-gray-900/50 p-4 rounded-xl border-l-4 border-red-600 italic text-gray-300">
              Crafting reliable code to build the future, one project at a time.
            </div>
            {/* Biography Scroll Svg  */}
            <Link
              href="#skill"
              className="p-2 border-2 border-white bg-black text-white font-bold text-xl rounded-full self-start animate-bounce hover:bg-white hover:text-black transition-all w-12 h-12 flex items-center justify-center"
            >
              ↓
            </Link>
          </div>

          {/* Skill Container  */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef} id="skill">
            {/* Skill Title  */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={skillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-5xl font-extrabold bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent"
            >
              SKILLS
            </motion.h1>
            {/* SKILL List  */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={skillRefInView ? { opacity: 1 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skillList.map((skill, idx) => (
                <div
                  key={idx}
                  className="rounded-lg p-3 text-sm cursor-pointer bg-gray-900 text-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white hover:scale-105 transition-all border border-gray-700 shadow-md"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* Skill scroll SVG  */}
            <Link
              href="#achievement"
              className="p-2 border-2 border-white bg-black text-white font-bold text-xl rounded-full self-start animate-bounce hover:bg-white hover:text-black transition-all w-12 h-12 flex items-center justify-center"
            >
              ↓
            </Link>
          </div>

          {/* ACHIEVEMENT Container */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={achieveRef} id="achievement">
            {/* ACHIEVEMENT Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={achieveRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              ACHIEVEMENTS
            </motion.h1>

            {/* ACHIEVEMENT List */}
            <div className="space-y-8">
              {/* ACHIEVEMENT List Item */}
              {[
                {
                  title: "Secondary School Certificate",
                  description: "Passed from City Convent Senior Secondary School Atrauli, Aligarh with overall 90 Percentage",
                  date: "Year: 2019",
                  organization: "CBSE",
                },
                {
                  title: "Senior Secondary School Certificate",
                  description: "Passed from City Convent Senior Secondary School Atrauli, Aligarh with overall 93.4 Percentage",
                  date: "Year: 2021",
                  organization: "CBSE",
                },
                {
                  title: "Coding Contest",
                  description: "Achieved a title 'Pupil' on Codeforces and ranked 3520.",
                  organization: "CodeChef",
                },
                {
                  title: "Coding Contest",
                  description: "Achieved a 3-star rating on CodeChef and ranked 295th globally in the CodeChef Starters 149 contest.",
                  organization: "CodeChef",
                },
                {
                  title: "Programming Contest",
                  description: "Ranked within the top 10 in a highly competitive programming event organized by the Algorithmus Club at IIIT Kota.",
                  organization: "Algorithmus Club, IIIT Kota",
                },
                {
                  title: "Coding",
                  description: "Successfully solved over 1200 problems across multiple platforms including LeetCode, GeeksforGeeks, Codeforces, Coding Ninjas, and HackerRank.",
                  organization: "Different Platforms",
                },
              ].map((item, index) => (
                <div className="flex justify-between items-start" key={index}>
                  {/* Left */}
                  <div className="w-full max-w-2xl">
                    <div className="bg-gray-900/80 p-5 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      {/* Description */}
                      <p className="text-gray-300 mb-3">{item.description}</p>
                      <div className="flex justify-between items-center">
                        {/* Date */}
                        {item.date && (
                          <span className="text-red-400 text-sm font-semibold">{item.date}</span>
                        )}
                        {/* Organization */}
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold">
                          {item.organization}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center */}
                  <div className="w-16 flex justify-center">
                    <div className="relative h-full">
                      <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 rounded-full transform -translate-x-1/2"></div>
                      <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-white ring-4 ring-purple-500 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="w-16"></div>
                </div>
              ))}
            </div>
            <Link
              href="#experience"
              className="p-2 border-2 border-white bg-black text-white font-bold text-xl rounded-full self-start animate-bounce hover:bg-white hover:text-black transition-all w-12 h-12 flex items-center justify-center"
            >
              ↓
            </Link>
          </div>

          {/* Experience Container  */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef} id="experience">
            {/* Experience Title  */}
            <motion.h1 
              initial={{ x: "-300px" }} 
              animate={experienceRefInView ? { x: "0" } : {}} 
              transition={{ delay: 0.2 }} 
              className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent"
            >
              EXPERIENCE
            </motion.h1>
            
            {/* EXPERIENCE List */}
            <motion.div 
              initial={{ x: "-300px" }} 
              animate={experienceRefInView ? { x: "0" } : {}}
              className="space-y-16"
            >
              {/* EXPERIENCE List Item */}
              <div className="flex justify-between">
                {/* Left  */}
                <div className="w-full max-w-md">
                  <div className="bg-gray-900/80 p-5 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm">
                    <div className="text-xl font-bold text-white mb-2">Coming Soon</div>
                    <div className="text-gray-300 mb-3">Currently working on exciting projects to add here</div>
                    <div className="text-red-400 text-sm font-semibold">Future - Present</div>
                    <div className="mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-600 to-blue-500 text-white text-sm font-semibold w-fit">
                      To Be Announced
                    </div>
                  </div>
                </div>
                {/* Center  */}
                <div className="w-16 flex justify-center">
                  <div className="relative h-full">
                    <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-white ring-4 ring-blue-500 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                {/* Right  */}
                <div className="w-16"></div>
              </div>

              {/* EXPERIENCE List Item */}
              <div className="flex justify-between">
                {/* Left  */}
                <div className="w-16"></div>
                {/* Center  */}
                <div className="w-16 flex justify-center">
                  <div className="relative h-full">
                    <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-white ring-4 ring-green-500 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                {/* Right  */}
                <div className="w-full max-w-md">
                  <div className="bg-gray-900/80 p-5 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm">
                    <div className="text-xl font-bold text-white mb-2">More Coming</div>
                    <div className="text-gray-300 mb-3">Stay tuned for updates on my professional journey</div>
                    <div className="text-red-400 text-sm font-semibold">Future</div>
                    <div className="mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-600 to-blue-500 text-white text-sm font-semibold w-fit">
                      To Be Announced
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE List Item */}
              <div className="flex justify-between">
                {/* Left  */}
                <div className="w-full max-w-md">
                  <div className="bg-gray-900/80 p-5 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm">
                    <div className="text-xl font-bold text-white mb-2">Future Opportunities</div>
                    <div className="text-gray-300 mb-3">Open to new challenges and collaborations</div>
                    <div className="text-red-400 text-sm font-semibold">Future</div>
                    <div className="mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-600 to-blue-500 text-white text-sm font-semibold w-fit">
                      To Be Announced
                    </div>
                  </div>
                </div>
                {/* Center  */}
                <div className="w-16 flex justify-center">
                  <div className="relative h-full">
                    <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-white ring-4 ring-blue-500 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                {/* Right  */}
                <div className="w-16"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SVG container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;