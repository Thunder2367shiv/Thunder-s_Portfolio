"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

const Homepage = ({ openNavbar }) => {
  const router = useRouter();
  const text = "Code That Performs, Systems That Scale.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <motion.div
      className="h-full bg-gradient-to-br text-white overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className={`h-full flex flex-col mb-2 lg:flex-row px-6 sm:px-10 md:px-16 xl:px-32 ${openNavbar ? "hidden" : "flex"}`}>
        
        {/* Left Section - Text Content */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-4/6 gap-3 sm:gap-5 md:gap-6 items-start justify-center mt-6">
          <Image 
            src="/bin.gif" 
            alt="Hero Image" 
            width={1000} 
            height={100} 
            className="rounded-lg w-full max-w-[85%] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px] object-cover mt-36 lg:mt-16"
            priority
          />

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Welcome to My Portfolio
          </motion.h1>

          <h1 className="text-2xl sm:text-xl md:text-3xl font-bold text-left text-gray-200">
            {displayedText}
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-400 text-left leading-relaxed">
            Welcome to my backend playground, where logic meets efficiency. With a passion for scalable architecture and clean code, my portfolio showcases robust systems, optimized APIs, and backend solutions designed for performance and reliability.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-start mb-6">
            <motion.button
              className="w-full sm:w-auto px-6 py-3 rounded-full text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition transform shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => router.push("/portfolio")}
            >
              🚀 View My Work
            </motion.button>

            <motion.button
              className="w-full sm:w-auto px-6 py-3 rounded-full text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-teal-500 hover:scale-105 transition transform shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => router.push("/contact")}
            >
              ✉️ Contact Me
            </motion.button>
          </div>
        </div>
        
        {/* Right Section - Hero Image */}
        <div className="h-1/2 lg:h-full lg:w-2/6 hidden md:flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image 
              src="/hero.png" 
              alt="Hero Image" 
              width={350} 
              height={300} 
              className="rounded-lg w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-auto"
            />
          </motion.div>
        </div>

        {/* Social Links - Visible only on small screens */}
        <div className="mt-6 h-1/2 lg:h-full lg:w-2/6 flex sm:hidden items-center justify-center">
          <div className="flex gap-4">
            <Link href="https://github.com/Thunder2367shiv">
              <Image src="/github.png" alt="GitHub" width={30} height={20} />
            </Link>
            <Link href="https://www.instagram.com/thunder11.21/">
              <Image src="/instagram.png" alt="Instagram" width={30} height={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/shivam-verma-711463257/">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={20} />
            </Link>
            <Link href="https://leetcode.com/Thunderk11/">
              <Image src="/leetcode.png" alt="LeetCode" width={30} height={20} />
            </Link>
            <Link href="https://codeforces.com/profile/coder_thunder">
              <Image src="/codeforces.png" alt="Codeforces" width={30} height={20} />
            </Link>
            <Link href="https://www.geeksforgeeks.org/user/shivamve16ur/">
              <Image src="/gfg.png" alt="GFG" width={30} height={20} />
            </Link>
            <Link href="https://www.codechef.com/users/shivam13579ver">
              <Image src="/codechef.jpeg" alt="CodeChef" width={30} height={20} />
            </Link>
            <Link href="https://www.hackerrank.com/shivamverma1022">
              <Image src="/hackerrank.png" alt="HackerRank" width={30} height={20} />
            </Link>
            <Link href="https://www.codingninjas.com/studio/profile/8e0a5011-033d-441a-aa97-fe0be920bcfc">
              <Image src="/codingninja.jpeg" alt="Coding Ninjas" width={30} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
