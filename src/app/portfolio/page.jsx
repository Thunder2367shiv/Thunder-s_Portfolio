"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const project_data = [
    {
      id: 0,
      color: "from-[#1e5058] to-[#1e5058]",
      title: "",
      desc: "",
      img: "",
      githublink: "",
      link: "",
      democheck: "",
    },
    {
      id: 1,
      color: "from-[#1e5058] to-indigo-900",
      title: "",
      desc: "",
      img: "",
      githublink: "",
      link: "",
      democheck: "",
    },
    {
      id: 2,
      color: "from-indigo-900 to-purple-900",
      title: "Cloud Based Task-Manager",
      desc: `● A cloud-based task management solution for creating tasks, organizing to-dos, and team collaboration. Features include task assignment, status updates, and real-time tracking. Secure authentication and seamless workflows enhance user experience.

● Tech Stack: Node.js (back-end), JavaScript, Mongoose (DB), Firebase (hosting/auth), Cloudinary (media storage).`,
      img: "./taskmanager.png",
      githublink: "https://github.com/Thunder2367shiv/Task-Manager",
      link: "#",
      democheck: "See Demo",
    },
    {
      id: 3,
      color: "from-purple-900 to-amber-600",
      title: "Crypto Dashboard Backend",
      desc: `● Developed a robust backend for a cryptocurrency dashboard, enabling users to view detailed information about any cryptocurrency. The system updates data at fixed intervals, calculates the mean of the latest 100 data points for enhanced insights, and provides real-time current values of cryptocurrencies for accurate tracking.`,
      img: "./crypto.jpg",
      githublink: "https://github.com/Thunder2367shiv/KoinX",
      link: "",
      democheck: "See Demo",
    },
    {
      id: 4,
      color: "from-amber-600 to-emerald-700",
      title: "Next.js Portfolio Page",
      desc: `● Built a responsive portfolio showcasing my skills, projects, and achievements, designed with a dynamic and interactive user interface. The portfolio provides information about me, displays my completed works, and features a contact form for direct communication.
  
● Tech Stack: Next.js for server-side rendering, React for dynamic components, Framer Motion for animations, EmailJS for contact functionality, and JavaScript for interactivity.`,
      img: "./portfolio.png",
      githublink: "#",
      link: "#",
      democheck: "See Demo",
    },
    {
      id: 5,
      color: "from-emerald-700 to-rose-800",
      title: "React.js FakeStore",
      desc: `● Platform Overview: Created a React-based e-commerce website where users can browse, search, and interact with products, simulating a shopping experience with an intuitive interface.
  
● Tech Stack: React for building dynamic UI components, React Router for page navigation, and Axios for API interactions. Styled with CSS for custom designs and responsive layouts.`,
      img: "./fakestore.png",
      githublink: "https://github.com/Thunder2367shiv/Fakestore",
      link: "https://thunder2367shiv.github.io/",
      democheck: "See Demo",
    },
    {
      id: 6,
      color: "from-rose-800 to-cyan-800",
      title: "Code Share and Run Platform",
      desc: `● Platform Overview: Developed a web platform for writing, running, and sharing code in multiple languages. Users can title snippets, execute code in real time, and engage through comments and likes.

● User Authentication: Implemented secure authentication with profile creation, login, signup, and logout for a personalized experience.

● Tech Stack: Node.js, Express.js, React, MongoDB, compile-run, compilex, Monaco Editor, TinyMCE, Axios, Multer, Cloudinary, and JWT.`,
      img: "./codeeditor.png",
      githublink: "https://github.com/Thunder2367shiv/Fakestore",
      link: "#",
      democheck: "See Demo",
    },
    {
      id: 7,
      color: "from-cyan-800 to-orange-700",
      title: "Full Stack Daily Blog",
      desc: `● Platform Overview: Developed a full-stack blog platform where users can create profiles, post blogs, and upload photos and images. The platform also includes user authentication and blog management features for a personalized experience.
  
● Tech Stack: Node.js, React, Redux, MongoDB, Tailwind CSS, Vite, JWT.`,
      img: "./dailyblog.png",
      githublink: "https://github.com/Thunder2367shiv/MegaBlog",
      link: "https://mega-blog-two.vercel.app/",
      democheck: "See Demo",
    },
    {
      id: 8,
      color: "from-orange-700 to-gray-900",
      title: "Youtube Backend",
      desc: `● Platform Overview: Developed a scalable backend for a video-sharing platform inspired by YouTube using Node.js, Mongoose, and Cloudinary. Features include video upload and management, secure user authentication with JWT, and interactive functionalities like comments and likes. Designed to integrate seamlessly with any frontend, such as Next.js, for a complete user experience.`,
      img: "./backend.jpg",
      githublink: "https://github.com/Thunder2367shiv/Youtube-Backend",
      link: "",
      democheck: "See Demo",
    },
  ];

  const formatDescription = (text) => {
    return text.split("\n").map((item, index) => (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        {/* Hero Section */}
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-black px-4 sm:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-8 px-4"
          >
            Scroll down to explore my work and technical capabilities
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-8 h-12 border-4 border-gray-400 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-white rounded-full"
              />
            </div>
            <span className="mt-2 text-gray-400">Scroll down</span>
          </motion.div>
        </div>

        {/* Projects Horizontal Scroll */}
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden bg-black">
          <motion.div style={{ x }} className="flex">
            {project_data.map((item) => (
              <div
                className={`h-screen w-screen flex flex-col items-center justify-between bg-gradient-to-r ${item.color} p-6 md:p-12 lg:p-16 relative overflow-hidden`}
                key={item.id}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-10">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-white"
                      style={{
                        width: Math.random() * 10 + 5 + 'px',
                        height: Math.random() * 10 + 5 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        opacity: Math.random() * 0.3 + 0.1,
                      }}
                      animate={{
                        y: [0, Math.random() * 100 - 50],
                        x: [0, Math.random() * 100 - 50],
                      }}
                      transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  ))}
                </div>

                {/* Project Content */}
                {item.title && (
                  <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-white z-10 mt-4 md:mt-8"
                  >
                    {item.title}
                  </motion.h1>
                )}

                <div className="flex flex-1 items-center justify-center gap-8 w-full flex-col lg:flex-row z-10 px-4 overflow-y-auto py-4">
                  {/* Image */}
                  {item?.img && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col items-center w-full max-w-2xl"
                    >
                      <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[420px] group">
                        <Image
                          src={item.img}
                          alt="Project image"
                          fill
                          unoptimized
                          className="rounded-xl border-4 border-gray-700 shadow-2xl transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-500 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl" />
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-4 mt-6">
                        {item?.githublink && (
                          <Link href={item.githublink} target="_blank">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
                            >
                              View Code
                            </motion.button>
                          </Link>
                        )}
                        {item?.link && (
                          <Link href={item.link} target="_blank">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-sm md:text-base"
                            >
                              {item.democheck} <span className="text-lg">→</span>
                            </motion.button>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Description */}
                  {item?.desc && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-black bg-opacity-40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 max-w-2xl w-full"
                    >
                      <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                        {formatDescription(item.desc)}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-screen h-screen flex flex-col gap-12 md:gap-16 items-center justify-center text-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold z-10"
        >
          Have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">project</span> in mind?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -65, 0 a 65,65 0 0,1 130,0 a 65,65 0 0,1 -130,0"
              />
            </defs>
            <text fill="#fff" className="text-base md:text-lg font-semibold">
              <textPath href="#circlePath" startOffset="0%">
                Back-end Developer&#160;&#160;•&#160;&#160;Problem Solver&#160;&#160;•
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Hire Me
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;