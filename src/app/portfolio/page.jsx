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
    // ... (your existing project data remains the same)
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
      {/* Hero Section - Changed to use min-h-screen instead of fixed vh */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br px-4 pt-16 pb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mb-6 sm:mb-8 px-4"
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

      {/* Projects Horizontal Scroll - Made more mobile-friendly */}
      <div className="relative h-[600vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-black">
          <motion.div style={{ x }} className="flex">
            {project_data.map((item) => (
              <div
                className={`h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r ${item.color} p-4 sm:p-8 relative overflow-hidden`}
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

                {/* Project Content - Made responsive */}
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white z-10 px-2 mb-4 sm:mb-8"
                >
                  {item?.title}
                </motion.h1>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-8 w-full z-10 px-2 sm:px-4">
                  {/* Image - Made responsive */}
                  {item?.img && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      className="flex flex-col items-center order-2 lg:order-1"
                    >
                      <div className="relative w-full max-w-xs h-48 sm:w-80 sm:h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] group">
                        <Image
                          src={item.img}
                          alt="Project image"
                          fill
                          unoptimized
                          className="rounded-xl border-4 border-gray-700 shadow-2xl transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-500 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl" />
                      </div>

                      {/* Buttons - Made responsive */}
                      <div className="flex gap-2 sm:gap-4 mt-4 sm:mt-6 flex-wrap justify-center">
                        {item?.githublink && (
                          <Link href={item.githublink} target="_blank">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
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
                              className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                            >
                              {item.democheck} <span className="text-sm sm:text-lg">→</span>
                            </motion.button>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Description - Made responsive */}
                  {item?.desc && (
                    <motion.div
                      initial={{ opacity: 0, x: 0, y: 50 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-black bg-opacity-40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700 max-w-full lg:max-w-lg order-1 lg:order-2 w-full"
                    >
                      <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
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

      {/* CTA Section - Made responsive */}
      <div className="w-full min-h-screen flex flex-col gap-8 sm:gap-16 items-center justify-center text-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative px-4 py-16">
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold z-10 px-4"
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
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -65, 0 a 65,65 0 0,1 130,0 a 65,65 0 0,1 -130,0"
              />
            </defs>
            <text fill="#fff" className="text-sm sm:text-base font-semibold">
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
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all"
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