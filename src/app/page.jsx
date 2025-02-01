"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Homepage = ({ openNavbar }) => {
  const router = useRouter();

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className={`h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ${openNavbar ? "hidden" : "flex"}`}
      >
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mb-6 lg:mb-0">
          <Image src="/hero.png" alt="Hero Image" fill className="object-contain" />
        </div>

        {/* Text Container */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 sm:gap-12 items-center justify-center mt-6 sm:mt-0">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black text-center sm:text-left">
          Code That Performs, Systems That Scale.
          </h1>

          {/* Desc */}
          <p className="md:text-xl text-white text-center sm:text-left">
          Welcome to my backend playground, where logic meets efficiency. With a passion for scalable architecture and clean code, my portfolio showcases robust systems, optimized APIs, and backend solutions designed for performance and reliability.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center sm:justify-start">
            <button className="px-4 py-2 rounded-lg ring-1 ring-white bg-[#560909] text-white"
              onClick={() => router.push("/portfolio")}
            >
              View My Work
            </button>
            <button className="px-4 py-2 rounded-lg ring-1 ring-white text-white bg-green-900"
              onClick={() => router.push("/contact")}
            >
              Contact Me
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 w-full justify-center sm:justify-start">
            <div className="lg:hidden md:hidden flex gap-3">
              <Link href="https://github.com/Thunder2367shiv" className="border-spacing-1 border-black border-4">
                <Image src="/github.png" alt="" width={21} height={21} />
              </Link>
              <Link href="https://www.instagram.com/thunder11.21/" className="border-spacing-1 border-black border-4">
                <Image src="/instagram.png" alt="" width={21} height={21} />
              </Link>
              <Link href="https://www.linkedin.com/in/shivam-verma-711463257/" className="border-spacing-1 border-black border-4">
                <Image src="/linkedin.png" alt="" width={21} height={21} />
              </Link>
              <Link href="https://leetcode.com/Thunderk11/" className="border-spacing-1 border-black border-4">
                <Image src="/leetcode.png" alt="" width={21} height={21} />
              </Link>
              <Link href="https://codeforces.com/profile/coder_thunder" className="border-spacing-1 border-black border-4">
                <Image src="/codeforces.png" alt="" width={21} height={21} />
              </Link>
              <Link href="https://www.geeksforgeeks.org/user/shivamve16ur/" className="border-spacing-1 border-black border-4">
                <Image src="/gfg.png" alt="" width={21} height={21} />
              </Link>
              <Link href="https://www.codechef.com/users/shivam13579ver" className="border-spacing-1 border-black border-4">
                <Image src="/codechef.jpeg" alt="" width={21} height={21} />
              </Link>
              <Link href="https://www.hackerrank.com/shivamverma1022" className="border-spacing-1 border-black border-4">
                <Image src="/hackerrank.png" alt="" width={21} height={21} />
              </Link>
              <Link href="https://www.codingninjas.com/studio/profile/8e0a5011-033d-441a-aa97-fe0be920bcfc" className="border-spacing-1 border-black border-4">
                <Image src="/codingninja.jpeg" alt="" width={21} height={21} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
