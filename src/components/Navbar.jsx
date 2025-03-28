"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [openNavbar, setopenNavbar] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255, 255, 255)" },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255, 255, 255)" },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  const listitemvariants = {
    closed: { opacity: 0, x: -10 },
    opened: { opacity: 1, x: 0 },
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className={`hidden md:flex gap-4 w-1/3 md:w-1/2`}>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <a
          href="/resume.pdf" // Ensure the file path is correct and accessible in the `public` folder
          download="Shivamverma_Resume.pdf" // Force download with a specified file name
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center border-gray-500 border-2"
        >
          <span className="text-white mr-1">Download</span>
          <span className="w-16 h-8 rounded bg-white text-black flex items-center justify-center">
            Resume
          </span>
        </a>
      </div>

      {/* Social handles */}
      <div className="hidden md:flex gap-4 w-1/3 md:w-1/2">
        <Link href="https://github.com/Thunder2367shiv">
          <Image src="/github.png" alt="" width={30} height={20} />
        </Link>
        <Link href="https://www.instagram.com/thunder11.21/">
          <Image src="/instagram.png" alt="" width={30} height={20} />
        </Link>
        <Link href="https://www.linkedin.com/in/shivam-verma-711463257/">
          <Image src="/linkedin.png" alt="" width={30} height={20} />
        </Link>
        <Link href="https://leetcode.com/Thunderk11/">
          <Image src="/leetcode.png" alt="" width={30} height={20} />
        </Link>
        <Link href="https://codeforces.com/profile/coder_thunder">
          <Image src="/codeforces.png" alt="" width={30} height={20} />
        </Link>
        <Link href="https://www.geeksforgeeks.org/user/shivamve16ur/">
          <Image src="/gfg.png" alt="" width={30} height={20} />
        </Link>
        <Link href="https://www.codechef.com/users/shivam13579ver">
          <Image src="/codechef.jpeg" alt="" width={30} height={20} />
        </Link>
        <Link href="https://www.hackerrank.com/shivamverma1022">
          <Image src="/hackerrank.png" alt="" width={30} height={20} />
        </Link>
        <Link href="https://www.codingninjas.com/studio/profile/8e0a5011-033d-441a-aa97-fe0be920bcfc">
          <Image src="/codingninja.jpeg" alt="" width={30} height={20} />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setopenNavbar((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            className="w-10 h-1 bg-black rounded origin-left"
            animate={openNavbar ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            className="w-10 h-1 bg-black rounded"
            animate={openNavbar ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            className="w-10 h-1 bg-black rounded origin-left"
            animate={openNavbar ? "opened" : "closed"}
          ></motion.div>
        </button>

        {/* Menu List */}
        {openNavbar && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div variants={listitemvariants} className="" key={link.title}>
                <Link href={link.url}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
