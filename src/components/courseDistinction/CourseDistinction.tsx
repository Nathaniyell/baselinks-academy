import Accordion from '../accordion/Accordion';
import learn from "../../../public/learn.svg"
import Image from 'next/image';
import FramerAnimation from '@/utils/framer-animation';

const CourseDistinction = () => {
    const attributes = [
        { title: 'Expert Instructors', content: 'Our courses are taught by industry experts with years of experience.' },
        { title: 'Comprehensive Curriculum', content: 'Each course covers all necessary topics to ensure a deep understanding.' },
        { title: 'Flexible Schedule', content: 'Learn at your own pace with our flexible scheduling options.' },
        { title: 'Community Support', content: 'Join a community of learners and get support from peers and instructors.' },
        { title: 'Certification', content: 'Receive a certificate upon completion of the course.' }
      ];
      return (
        <FramerAnimation className="w-11/12 md:w-10/12 p-2 mx-auto bg-white text-lightBg">
          <h2 className="text-3xl text-center font-bold mb-6 md:mb-10" >Unparalleled <span className='text-titles'>Course Distinction</span> </h2>
         <section className='flex flex-col lg:flex-row'>
          <div className="w-full grid gap-4">
            {attributes.map((attribute, index) => (
              <Accordion key={index} title={attribute.title} content={attribute.content} />
            ))}
          </div>
          <Image
            className="size-full md:w-[45%]"
            src={learn}
            alt="Hero"
          />
          </section>
        </FramerAnimation>
      );
}

export default CourseDistinction