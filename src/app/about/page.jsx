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

  const targetRef = useRef(null);
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
          scrollbarWidth: "none", // Hides scrollbar for Firefox
          msOverflowStyle: "none", // Hides scrollbar for IE/Edge
        }}>
        {/* Text Container  */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Biography Container  */}
          <div className="flex flex-col gap-12 justify-center">
            {/* Biography Title  */}
            <h1 className="text-5xl font-extrabold">BIOGRAPHY</h1>
            {/* Biography DESC  */}
            <p className="text-lg text-white">
            I'm Shivam Verma, a backend developer passionate about building efficient and scalable web applications. With experience in Node.js, Express.js, and databases like MongoDB and SQL, I develop secure, high-performance systems. My work spans full-stack projects, from task management platforms to interactive coding environments. Always exploring new technologies, I focus on creating seamless digital experiences through clean, maintainable code.
            </p>
            {/* Biography Quote  */}
            <span className="italic text-white">
            Crafting reliable code to build the future, one project at a time.
            </span>
            {/* Biography Scroll Svg  */}
            <Link
              href="#skill"
              className="p-2 border border-y-2 border-x-2 border-white text-red-600 font-extrabold text-2xl rounded-full self-start animate-bounce transition-all"
            >
              &darr;
            </Link>
          </div>

          {/* Skill Container  */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* Skill Title  */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={skillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=" text-4xl font-extrabold"
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
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            {/* Skill scroll SVG  */}
            <Link
              href="#skill"
              className="p-2 border border-y-2 border-x-2 border-white text-red-600 font-extrabold text-2xl  rounded-full self-start animate-bounce transition-all"
            >
              &darr;
            </Link>
          </div>

          {/* ACHIEVEMENT Container */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={achieveRef}>
            {/* ACHIEVEMENT Title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={achieveRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl font-extrabold"
            >
              ACHIEVEMENT
            </motion.h1>

            {/* ACHIEVEMENT List */}
            <div className="">
              {/* ACHIEVEMENT List Item */}
              {[
                {
                  title: "Secondary School Certificate",
                  description: "Passed from City Convent Senior Secondary School Atrauli, Aligarh  with overall 90 Percentage",
                  date: "Year: 2019",
                  organization: "CBSE",
                },
                {
                  title: "Coding Contest",
                  description: "Achieved a 3-star rating on CodeChef and ranked 295th globally in the CodeChef Starters 149 contest.",
                  organization: "CodeChef",
                },
                {
                  title: "Programming Contest",
                  description:
                    "Ranked within the top 10 in a highly competitive programming event organized by the Algorithmus Club at IIIT Kota.",
                  organization: "Algorithmus Club, IIIT Kota",
                },
                {
                  title: "Coding",
                  description:
                    "Successfully solved over 1200 problems across multiple platforms including LeetCode, GeeksforGeeks, Codeforces, Coding Ninjas, and HackerRank.",
                  organization: "Different Platforms",
                },
              ].map((item, index) => (
                <div className="flex justify-between items-start h-auto space-y-3 p-2" key={index}>
                  {/* Left */}
                  <div className="w-screen"> {/* Increased width to w-2/3 */}
                    {/* Title */}
                    <div className="bg-black p-3 font-semibold rounded-b-lg rounded-s-lg border border-gray-400 border-x-4 border-y-4 text-white text-md">
                      {item.title}
                      <div className="p-3 text-sm italic text-white">{item.description}</div>
                    {/* Date */}
                    {item.date && (
                      <div className="text-red-400 text-sm font-semibold">{item.date}</div>
                    )}
                    {/* Organization */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit text-black">{item.organization}</div>
                    </div>
                    {/* Description */}
                    
                  </div>

                  {/* Center */}
                  <div className="w-1/6">
                    {/* Line */}
                    <div className="w-1 h-full bg-red-500 rounded relative">
                      {/* Line Circle */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-white bg-black -left-2"></div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="w-1/3"></div>
                </div>
              ))}
            </div>
            <Link
              href="#skill"
              className="p-2 border border-y-2 border-x-2 border-white text-red-600 font-extrabold text-2xl  rounded-full self-start animate-bounce transition-all"
            >
              &darr;
            </Link>
          </div>

          {/* Experience Container  */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* Experience Title  */}
            <motion.h1 initial={{ x: "-300px" }} animate={experienceRefInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className="text-4xl font-extrabold ">EXPERIENCE</motion.h1>
            {/* EXPERIENCE List */}
            <motion.h1 initial={{ x: "-300px" }} animate={experienceRefInView ? { x: "0" } : {}} className="">
              {/* EXPERIENCE List Item */}
              <div className="flex justify-between h-48">
                {/* Left  */}
                <div className="w-1/3">
                  {/* Job Title  */}
                  <div className="bg-black p-3 font-semibold rounded-b-lg rounded-s-lg border border-gray-400 border-x-4 border-y-4 text-white">.................</div>
                  {/* Job DESC  */}
                  <div className="p-3 text-sm italic text-white">..........................</div>
                  {/* Job date */}
                  <div className="text-red-400 text-sm font-semibold">......... - Present</div>
                  {/* Job Company  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">.........</div>
                </div>
                {/* Center  */}
                <div className="w-1/6">
                  {/* Line  */}
                  <div className="w-1 h-full bg-gray-400 rounded relative">
                    {/* Line Circle  */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-white bg-black -left-2'></div>
                  </div>
                </div>
                {/* Right  */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE List Item */}
              <div className="flex justify-between h-48">
                {/* Left  */}
                <div className="w-1/3">

                </div>
                {/* Center  */}
                <div className="w-1/6">
                  {/* Line  */}
                  <div className="w-1 h-full bg-gray-400 rounded relative">
                    {/* Line Circle  */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-white bg-black -left-2'></div>
                  </div>
                </div>
                {/* Right  */}
                <div className="w-1/3">
                  {/* Job Title  */}
                  <div className="bg-black p-3 font-semibold rounded-b-lg rounded-s-lg border border-gray-400 border-x-4 border-y-4 text-white">.................</div>
                  {/* Job DESC  */}
                  <div className="p-3 text-sm italic text-white">..........................</div>
                  {/* Job date */}
                  <div className="text-red-400 text-sm font-semibold">......... - .........</div>
                  {/* Job Company  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">.........</div></div>
              </div>

              {/* EXPERIENCE List Item */}
              <div className="flex justify-between h-48">
                {/* Left  */}
                <div className="w-1/3">
                  {/* Job Title  */}
                  <div className="bg-black p-3 font-semibold rounded-b-lg rounded-s-lg border border-gray-400 border-x-4 border-y-4 text-white">.................</div>
                  {/* Job DESC  */}
                  <div className="p-3 text-sm italic text-white">..........................</div>
                  {/* Job date */}
                  <div className="text-red-400 text-sm font-semibold">......... - .........</div>
                  {/* Job Company  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">.........</div>
                </div>
                {/* Center  */}
                <div className="w-1/6">
                  {/* Line  */}
                  <div className="w-1 h-full bg-gray-400 rounded relative">
                    {/* Line Circle  */}
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-white bg-black -left-2'></div>
                  </div>
                </div>
                {/* Right  */}
                <div className="w-1/3"></div>
              </div>

            </motion.h1>
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
