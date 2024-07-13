"use client";
import React, { useState, useEffect, } from "react";
import { BsArrowBarUp } from "react-icons/bs";
import Logo from "../../../public/images/logo.png";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import Space from "@/components/Space";
import { motion } from "framer-motion";
import { LinkBtn } from "../button/LinkBtn";
import FramerAnimation from "@/utils/framer-animation";



function Footer() {
  const [isMoveToVisible, setIsMoveToVisible] = useState(false);


  const year = new Date().getFullYear();

  const moveTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  };



  const scrolling = () =>
    window.scrollY > 100 ? setIsMoveToVisible(true) : setIsMoveToVisible(false);

  useEffect(() => {
    window.onscroll = scrolling;
    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="bg-backgrounds"
    >
      <FramerAnimation className="text-white border-b p-8 md:p-14 flex flex-col gap-10 md:flex-row justify-between items-center">
        <h1 className="text-white w-full md:w-1/2 lg:w-2/5 mx-auto md:mx-0 text-2xl md:text-3xl">
     Start learning with 1000 students around the world!
        </h1>
<div className="flex items-cener gap-6">
        <LinkBtn
          href="/auth/register"
          variant="titles"
          className="text-white  shadow-md rounded border-lightBg"
          >
        Get started
        </LinkBtn>
        <LinkBtn
          href="/auth/register"
          variant="background2"
          className="text-white  shadow-md  rounded border-lightBg"
          >
         Browse all courses
        </LinkBtn>
        </div>
      </FramerAnimation>

      <Space />
      <div className="p-4 text-[#eee] shadow-transparent shadow-2xl">
        <footer className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-2 lg:grid-cols-3 md:px-10">
          <div className="text-[#eee] text-base flex flex-col gap-4 md:gap-6 hover:bg-black hover:bg-opacity-10 p-4 rounded-md">
            <h4 className="font-semibold text-white text-2xl">About Baselinks Academy</h4>
            <p className="text-base">
              Baselinks Academy is a robust, user-friendly online learning platform designed to empower individuals by providing access to in-demand creative and technical skills. As Baselinks&apos; flagship tool, it democratizes education and supports aspiring learners with a comprehensive course library, interactive learning experiences, and community features.
            </p>
          </div>
          <div className="text-[#eee] text-base flex flex-col gap-4 md:gap-6 capitalize hover:bg-black hover:bg-opacity-10 p-4 rounded-md">
            <h4 className="font-semibold text-white text-2xl">Quick Links</h4>
            <Link href="" className="hover:underline hover:text-white">
              <span>Terms of use</span>
            </Link>
            <Link href="" className="hover:underline hover:text-white">
              <span>Cookies</span>
            </Link>
            <Link href="" className="hover:underline hover:text-white">
              <span>Privacy Policy</span>
            </Link>
          </div>
          <div className="text-[#eee] text-base flex flex-col gap-4 md:gap-6 hover:bg-black hover:bg-opacity-10 p-4 rounded-md">
            <h4 className="font-semibold text-white text-2xl">Contact</h4>
            <p className="text-base">
              6A D-Sha Street, Lekki Palm City Estate, <br /> Addo Road, Ajah, Lagos, Nigeria
            </p>
            <Link
              href="mailto:info@baselinksng.com"
              className="underline mt-1 text-base flex items-center gap-1 font-semibold"
            >
              <CiMail className="text-xl font-semibold" /> <span>info@baselinksng.com</span>
            </Link>
          </div>

          <button
            onClick={moveTop}
            className={`${isMoveToVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } fixed bottom-5 right-5 bg-lightBg bg-opacity-70 hover:bg-opacity-100 text-titles p-2 rounded-full z-[10000] outline-0 transition-all duration-300`}
          >
            <BsArrowBarUp className="text-2xl" />
          </button>
        </footer>
        <Space />
        <div className="text-center mt-4 p-4 text-[#eee] text-opacity-80 border-t border-t-backgrounds">
          <Space />
          <span>Copyright &copy; All rights reserved by Baselinks Academy {year}</span>
        </div>
      </div>
        </motion.div>
  );
}

export default Footer;
