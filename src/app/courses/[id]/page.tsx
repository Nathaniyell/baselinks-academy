
import { FaStar } from 'react-icons/fa';
import { courses } from '@/lib/courses';
import { CourseType } from '@/utils/courseTypes';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import { BiUser } from 'react-icons/bi';
import Space from '@/components/Space';

interface CourseDetailProps {
  params: { id: string };
}

const getCourseById = (id: string): CourseType | undefined => {
  return courses.find((course: CourseType) => course.id.toString() === id);
};

const CourseDetail = ({ params }: CourseDetailProps) => {
  const course = getCourseById(params.id);

  if (!course) {
    notFound();
    return null;
  }

  return (
    <>
      <Breadcrumb previousPage='Courses' previousPageLink='/courses' currentPage={`${course.title}`} />
      <div className="flex flex-col lg:flex-row gap-8 mt-2">
        <div className="w-full lg:w-2/3 bg-[#eff5f5] ">
        <div className="w-11/12 lg:w-3/4 pt-4 mx-auto">
            <h1 className="text-xl font-semibold mb-4">{course.title}</h1>
            <p className="text-gray-700 mb-6">{course.description}</p>
          
            <div className="mb-6 flex items-center">
              {Array(course.stars).fill(0).map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
              <span className="ml-6 space-x-2 text-lightBg flex gap-2 items-center"><BiUser />{course.students} students</span>
            </div>
          </div>
          <div className='bg-white w-full lg:pt-4 lg:pb-10'>
          <div className="video-section w-11/12 lg:w-3/4 mx-auto">
            <video className="w-full" controls>
              <source src={course.videoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:mr-10">
          <div className="bg-white p-6 shadow border border-slate-200 grid gap-6">
            <div>
         <h1>Course Materials</h1>
         <Link href="" download>Material 1</Link>
         <Link href="" download>Material 2</Link>
         <Link href="" download>Material 3</Link>
         </div>
            <div>
         <h1>Quiz</h1>
         <Link href="" download>Material 1</Link>
        
         </div>
            <div>
         <h1>Exerceise</h1>
         <Link href="" download>Material 1</Link>
        
         </div>
          </div>
        </div>
      </div>
      <Space border="md:hidden lg:block" />
      </>
    
  );
};

export default CourseDetail;
