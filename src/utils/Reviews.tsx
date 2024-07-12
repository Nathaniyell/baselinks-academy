import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { TfiQuoteLeft } from "react-icons/tfi";
import firstReviewer from "../../../public/images/girl1.png";
import secondReviewer from "../../../public/images/girl2.png";
import thirdReviewer from "../../../public/images/man1.png";
import { twMerge } from 'tailwind-merge'

type reviewProps = {
  classes?: string
    img: StaticImageData;
  review: string;
  name: string;
};
const reviewData = [
  {
    image: firstReviewer,
    review:
      "I was lost in debt, Journey to Wealth rescued me! Personalized coaching, zero judgment, and now I'm crushing it financially. Thanks guys!",
    name: "Sarah M., Entrepreneur",
  },
  {
    image: thirdReviewer,
    review:
      " Journey to Wealth coaches gets me! Dream-chasing, career changes, even retirement - they're there for it all. My financial partner in crime!",
    name: "John D., Teacher",
      },
  {
    image: secondReviewer,
    review:
      "Didn't just want a coach, I craved knowledge. Journey to Wealth delivered! Expert guidance, tons of resources, and now I'm money-savvy and confident. ",
    name: "Lisa W., Marketing Manager",
  },
];

const ReviewCards = ({ classes, img, review, name }: reviewProps) => {
  return (
    <div
      key={name}
      className={twMerge(`grid grid-cols-1 pb-8 md:pb-0 md:w-[90%] mx-auto`, classes)}
    >
      <motion.div 
       whileInView={{ x: 0, opacity: 1 }}
       initial={{ opacity: 0, x: -100 }}
       transition={{ delay: 0.5, duration: 1 }}
       viewport={{once: true}}
      className="grid grid-cols-1 gap-4 p-6">
        <TfiQuoteLeft className="text-5xl" />
        <p className="text-white/60 text-opacity-75">{review}</p>
        <p className="font-semibold text-white/60">- {name}</p>
      </motion.div>
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ delay: 0.5, duration: 1 }}
      viewport={{once: true}}
      className="place-self-center md:mb-4"
    >

      <Image className="w-fit  rounded-full" src={img} alt={name} />
    </motion.div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="grid lg:grid-cols-3">
    {reviewData.map((data, index) => {
      return (
        <ReviewCards
          key={data.name}
          img={data.image}
          name={data.name}
          review={data.review}
          classes={index === 1 ? "border-y lg:border-x lg:border-y-0 border-white/60 border-opacity-30" : ""}
        />
      );
    })}
  </div>
  
  );
};

export default Reviews;
