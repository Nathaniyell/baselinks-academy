"use client";

// import React from 'react';
import { VscMenu, VscClose } from "react-icons/vsc";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { useGlobalContext } from "@/context";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { BiUser } from "react-icons/bi";
import { signOut } from 'firebase/auth';
import { auth } from "@/config/firebase-config"
import { useAuth } from '@/context/auth-context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function NavBar() {
  const { isMenuClicked, isScrolled, setIsMenuClicked, setIsScrolled } = useGlobalContext();
  const pathName = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuClicked((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 24) {
        // console.log(window.scrollY)
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  const { user } = useAuth();

  const signOutFromApp = async () => {
    try {
      await signOut(auth);
      toast.success("Sign out successful");
    } catch (error) {
      console.error(error);
      toast.error("Sign out failed");
    }
  }
    return (
      <motion.div
        className={`bg-white shadow ${isScrolled && "fixed top-0 z-50 left-0 right-0 "
          }  lg:before:h-[90px] w-full fixed top-0 left-0  z-50 right-0 `}>
        <nav
          className={`text-lightBg w-full flex items-center justify-between transition-all duration-200 !bg-white md:w-[95%] mx-auto`}
        >
          <header className="mx-auto p-4 md:px-2 lg:p-4 flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 md:gap-2 lg:gap-4">

            <div className="h-full w-full flex items-center justify-between md:justify-start md:w-1/2">

              <Link onClick={() => setIsMenuClicked(false)} href="/" className="inline w-1/12">
                <Image
                  className="object-cover"
                  src={logo}
                  alt="logo"
                />
                {/* <Logo /> */}
              </Link>


              <button
                className="opacity-70 hover:opacity-100 text-2xl text-titles md:hidden"
                onClick={toggleMenu}
              >
                {isMenuClicked ? <VscClose /> : <VscMenu />}
              </button>
            </div>

            <aside
              className={`bg-white ${!isMenuClicked
                ? "left-full md:left-0 -z-10 opacity-10 md:opacity-100 md:z-50"
                : "left-0 md:top-0 opacity-100"
                } bg-white md:bg-transparent fixed md:relative top-[50px] md:top-0 flex flex-col md:flex-row justify-between p-4 md:p-2 gap-8 sm:p-6 w-full md:text-[1rem] lg:gap-0 md:w-full text-lg transition-all duration-500 md:transition-none capitalize text-lightBg `}
            >
              <Link
                onClick={() => setIsMenuClicked(false)}
                href="/"
                className={`${pathName === "/" ? "text-titles font-semibold" : "text-lightBg  hover:text-titles"
                  } flex items-center w-fit px-0 ${isMenuClicked && "w-full pb-2 pl-2"
                  }`}
              >
                <span>home</span>
              </Link>
              {/* <Link
              onClick={() => setIsMenuClicked(false)}
              href="/dashboard"
              className={`${pathName === "/dashboard"
                  ? "text-titles font-semibold"
                  : "text-lightBg hover:text-titles"
                } flex items-center  w-fit px-0 ${isMenuClicked && "w-full pb-2 pl-2"
                }`}
            >
              <span>dashboard</span>
            </Link> */}

              <Link
                onClick={() => setIsMenuClicked(false)}
                href="/courses"
                className={`${pathName === "/courses"
                  ? "text-titles font-semibold"
                  : "text-lightBg  hover:text-titles"
                  } flex items-center  w-fit px-0 ${isMenuClicked && "w-full pb-2 pl-2"
                  }`}
              >
                <span>courses</span>
              </Link>

              <Link
                onClick={() => setIsMenuClicked(false)}
                href="/contact"
                className={`${pathName === "/contact"
                  ? "text-titles font-semibold"
                  : "text-lightBg  hover:text-titles"
                  } flex items-center  w-fit px-0 ${isMenuClicked && "w-full pb-2 pl-2"
                  }`}
              >

                <span>contact</span>
              </Link>
              <aside
                onClick={() => setIsMenuClicked(false)}


                className={`text-white flex items-center justify-center gap-4 md:gap-2 p-2 text-center w-full md:text-sm md:hidden lg:flex lg:w-1/3 transition-all duration-200`}
              >
                {/* <Link href="/" className="bg-backgrounds p-2 rounded-lg">my courses</Link> */}
              
                  <div>
                    {user ? (<div className="flex gap-2 items-center"> <span className="text-blue-600 underline">{user.email}</span> <button onClick={signOutFromApp} className="border-titles  p-2 text-white shadow-md border bg-titles rounded-md">Logout</button></div>) : (<Link className="border-green-700 p-2 shadow bg-green-100 text-green-600 font-semibold rounded-md" href="/auth/login">Sign in</Link>)}

                  </div>
            


              </aside>
            </aside>
          </header>
        </nav>
      </motion.div>
    );
  }
