"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import investSvg2 from "../../public/invest3.svg";
import Space from "@/components/Space";
import Search from "@/utils/Search";
import { Suspense } from "react";
import PopularCourses from "@/components/popularCourses/PopularCourses";
import CourseDistinction from "@/components/courseDistinction/CourseDistinction";
import Testimonials from "@/components/testimonial/Testimonials";
import Statistics from "@/components/statistics/Statistics";
import { LinkBtn } from "@/components/button/LinkBtn";
import FramerAnimation from "@/utils/framer-animation";



export default function Home() {
  return (
    <main className="" style={{ overflow: "hidden" }}>
      <div className=" flex flex-col mx-auto w-[90%] md:flex-row md:items-center justify-between lg:gap-10 relative">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="p-4 lg:w-1/2 xl:w-3/5 grid grid-cols-1 gap-2 lg:gap-6"
        >
          <h1 className="text-2xl md:text-4xl flex flex-col gap-2 md:gap-6 text-titles">
            <span className="text-backgrounds">Welcome to</span>
            <span className="text-[1.8rem] md:text-[3rem]">Baselinks Academy</span>
          </h1>

          <div className="mb-4">
            <p
              className="text-lg text-lightBg"
            >
              Democratizing education with a comprehensive course library, interactive learning experiences, and community features.
            </p>
          </div>
          <Suspense>
            <Search />
          </Suspense>
        </motion.div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="md:flex md:justify-end md:items-center"
        >
          <Image
            className="size-full lg:w-[70%]"
            src={investSvg2}
            alt="Hero"
          />
        </motion.div>
      </div>
      <Space border="md:hidden lg:block" />
      <FramerAnimation className="bg-[#eee] ">
        <PopularCourses />
        <Space border="md:hidden lg:block" />
      </FramerAnimation>
      <Statistics />
      <Space border="md:hidden lg:block" />
      <CourseDistinction />
      <Space border="md:hidden lg:block" />

      <Testimonials />
      <FramerAnimation className="bg-backgrounds my-10 p-8 md:p-14 flex flex-col gap-10 md:flex-row justify-between items-center">
        <h1 className="text-white w-full md:w-1/2 lg:w-2/5 mx-auto md:mx-0 text-2xl md:text-3xl">
          Ready to kickstart your career?
        </h1>

        <LinkBtn
          href="/auth/register"
          variant="transparent"
          className="text-white  shadow-md !text-2xl !text-center"
          arrow
        >
          Click here to register
        </LinkBtn>
      </FramerAnimation>
    </main>
  );
}
