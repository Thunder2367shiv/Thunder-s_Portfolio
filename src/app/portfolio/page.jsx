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
      color: "from-[#0c1e23] to-[#0c1e23]", // Indigo to Purple
      title: "",
      desc:"",
      img: "",
      githublink: "",
      link: "",
      democheck: "",
    },
    {
      id: 2,
      color: "from-[#0c1e23] to-[#52158a]", // Indigo to Purple
      title: "Cloud Based Task-Manager",
      desc: `
        ● A cloud-based task management solution for creating tasks, organizing to-dos, and team collaboration. Features include task assignment, status updates, and real-time tracking. Secure authentication and seamless workflows enhance user experience.

● Tech Stack: Node.js (back-end), JavaScript, Mongoose (DB), Firebase (hosting/auth), Cloudinary (media storage).`,
      img: "./taskmanager.png",
      githublink: "https://github.com/Thunder2367shiv/Task-Manager",
      link: "#",
      democheck: "See Demo",
    },
    {
      id: 3,
      color: "from-[#52158a] to-[#c4a010]", // Purple to Yellow
      title: "Crypto Dashboard Backend",
      desc: `● Developed a robust backend for a cryptocurrency dashboard, enabling users to view detailed information about any cryptocurrency. The system updates data at fixed intervals, calculates the mean of the latest 100 data points for enhanced insights, and provides real-time current values of cryptocurrencies for accurate tracking.`,
      img: "./crypto.jpg",
      githublink: "https://github.com/Thunder2367shiv/KoinX",
      link: "",
      democheck: "See Demo",
    },
    {
      id: 4,
      color: "from-[#c4a010] to-[#11893d]", // Yellow to Green
      title: "Next.js Portfolio Page",
      desc: `
        ● Built a responsive portfolio showcasing my skills, projects, and achievements, designed with a dynamic and interactive user interface. The portfolio provides information about me, displays my completed works, and features a contact form for direct communication.
  
        ● Tech Stack: Next.js for server-side rendering, React for dynamic components, Framer Motion for animations, EmailJS for contact functionality, and JavaScript for interactivity.
      `,
      img: "./portfolio.png",
      githublink: "#",
      link: "#",
      democheck: "See Demo",
    },
    {
      id: 5,
      color: "from-[#11893d] to-[#82172a]", // Green to Rose
      title: "React.js FakeStore",
      desc: `● Platform Overview: Created a React-based e-commerce website where users can browse, search, and interact with products, simulating a shopping experience with an intuitive interface.
  
      ● Tech Stack: React for building dynamic UI components, React Router for page navigation, and Axios for API interactions. Styled with CSS for custom designs and responsive layouts.
      `,
      img: "./fakestore.png",
      githublink: "https://github.com/Thunder2367shiv/Fakestore",
      link: "https://thunder2367shiv.github.io/",
      democheck: "See Demo",
    },
    {
      id: 6,
      color: "from-[#82172a] to-[#196a8f]", // Rose to Sky Blue
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
      color: "from-[#196a8f] to-[#a26b0d]", // Sky Blue to Amber
      title: "Full Stack Daily Blog",
      desc: `● Platform Overview: Developed a full-stack blog platform where users can create profiles, post blogs, and upload photos and images. The platform also includes user authentication and blog management features for a personalized experience.
  
      ● Tech Stack: This project is built using Node.js as the back-end, with React for the front-end, Redux for state management, and MongoDB for database storage. The styling is done with Tailwind CSS, Vite is used for fast development, and JSON Web Tokens (JWT) ensures secure user authentication.
      `,
      img: "./dailyblog.png",
      githublink: "https://github.com/Thunder2367shiv/MegaBlog",
      link: "https://mega-blog-two.vercel.app/",
      democheck: "See Demo",
    },
    {
      id: 8,
      color: "from-[#a26b0d] to-black", // Amber to Indigo (Back to the start)
      title: "Youtube Backend",
      desc: `● Platform Overview: Developed a scalable backend for a video-sharing platform inspired by YouTube using Node.js, Mongoose, and Cloudinary. Features include video upload and management, secure user authentication with JWT, and interactive functionalities like comments and likes. Designed to integrate seamlessly with any frontend, such as Next.js, for a complete user experience.`,
      img: "./backend.jpg",
      githublink: "https://github.com/Thunder2367shiv/Youtube-Backend",
      link: "",
      democheck: "See Demo",
    },
  ];


  // Function to handle line breaks and preserve formatting
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
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl text-center font-extrabold">
          Scroll Down to see My work <br />
        
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden bg-black">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#999999] to-[#0c1e23]" />
            {project_data.map((item) => (
              <div
                className={`h-screen w-screen flex flex-col items-center justify-between bg-gradient-to-r ${item.color} p-8`}
                key={item.id}
              >
                {/* Title at the Top Center */}
                <h1 className="text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl">
                  {item?.title}
                </h1>

                {/* Content Area */}
                <div className="flex flex-1 items-center justify-center gap-8 w-full flex-wrap lg:flex-nowrap">
                  {/* Left: Image */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      {item?.img && <Image
                        src={item.img}
                        alt="Project image"
                        fill
                        unoptimized
                        className="rounded-lg border border-b-4 border-r-4 border-l-4 border-t-4 border-b-gray-600 border-l-gray-600 border-r-gray-900 border-t-gray-600"
                      />}
                    </div>

                    {/* Buttons Below Image */}
                    <div className="flex gap-4 mt-4">
                      {item?.githublink && <Link href={item.githublink}>
                        <button className="hover:bg-green-800 p-3 text-sm bg-green-600 text-white font-semibold border border-green-400 rounded-lg shadow-md transition">
                          Github Code
                        </button>
                      </Link>}
                      {item?.link && (
                        <Link href={item.link}>
                          <button className="p-3 text-sm bg-gray-100 text-black font-semibold border border-gray-600 rounded-lg shadow-md hover:bg-gray-300 transition">
                            {item.democheck} 🎬
                          </button>
                        </Link>
                      )}

                    </div>
                  </div>

                  {/* Right: Description with Line Breaks */}
                  <p className="text-white text-center lg:text-left lg:max-w-md xl:max-w-lg lg:text-lg sm:text-sm">
                    {formatDescription(item.desc)}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-black text-white">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#fff"> {/* Change this to white */}
              <textPath href="#circlePath" className="text-xl">
                Back-end Developer and Coder
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="font-extrabold w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-white text-black rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>

    </motion.div>
  );
};

export default PortfolioPage;
