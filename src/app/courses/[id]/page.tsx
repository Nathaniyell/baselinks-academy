"use client"
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { courses } from '@/lib/courses';
import { SingleCourseType } from '@/utils/courseTypes';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import { BiUser } from 'react-icons/bi';
import Space from '@/components/Space';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';

interface CourseDetailProps {
  params: { id: string };
}

const getCourseById = (id: string): SingleCourseType | undefined => {
  return courses.find((course: SingleCourseType) => course.id.toString() === id);
};

const CourseDetail = ({ params }: CourseDetailProps) => {
  const { user } = useAuth();
  const router = useRouter()
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const course = getCourseById(params.id);
  const handleOptionChange = (questionIndex: number, option: string) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getYoutubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\?v=|embed\/)|youtu\.be\/)([^/?&]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
  };

  if (!course) {
    notFound();
  }

  if (!user) {
    return (
      <main className="min-h-[70vh] w-full flex items-center justify-center text-titles">
      
          <div className="max-w-[500px] w-[97%] hover:shadow-md flex flex-col items-center justify-center gap-5 p-4 rounded-md">
          
              <h1 className="font-semibold text-lg">To access course, Please sign in</h1>
                      <button className="bg-titles text-white hover:bg-opacity-80 rounded-md p-3 transition-all duration-300 capitalize" onClick={() => router.push("/auth/login")}>Sign in</button>
              
          </div>
          
      </main>
  )

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
          <div className='w-full lg:pt-4 lg:pb-10'>
          <div className="w-11/12 lg:w-3/4 mx-auto">
              <iframe
                className="w-full"
                height="400"
                src={getYoutubeEmbedUrl(course.videoLink)}
                title={course.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:mr-10 h-full">
          <div className="bg-white p-6 shadow border border-slate-200 grid gap-6">
            <div>
              <h1 className='font-semibold text-lg'>Course Materials</h1>
              <div className='flex flex-col gap-4 text-blue-600 underline mt-4'>
                <Link href="" download>Material 1</Link>
                <Link href="" download>Material 2</Link>
                <Link href="" download>Material 3</Link>
              </div>
            </div>
            <div>
              <h1 className='font-semibold text-lg'>Quiz</h1>
              {course?.quiz.questions.map((q, questionIndex) => (
                <div key={questionIndex} className='mt-4'>
                  <p className='font-[500] '>{questionIndex + 1}. {" "} {q.question}</p>
                  <ul className='list-none ml-6'>
                    {q.options.map((option, optionIndex) => (
                      <li key={optionIndex} className='mt-2'>
                                 <label className={`inline-flex items-center gap-2 ${submitted ? option === q.answer ? 'text-green-600' : selectedAnswers[questionIndex] === option ? 'text-red-600' : '' : ''}`}>
                          <input
                            type="radio"
                            name={`question-${questionIndex}`}
                            value={option}
                            checked={selectedAnswers[questionIndex] === option}
                            onChange={() => handleOptionChange(questionIndex, option)}
                            disabled={submitted}
                            className="form-radio"
                          />
                        &nbsp;{option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {!submitted && (
                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              )}
            </div>
            <div>
              <h1 className='font-semibold text-lg'>Exercise</h1>
              <p className='mt-4'>{course.exercise}</p>
            </div>
          </div>
        </div>
      </div>
      <Space border="md:hidden lg:block" />
      <Space border="md:hidden lg:block" />
    </>
  );
};

export default CourseDetail;
