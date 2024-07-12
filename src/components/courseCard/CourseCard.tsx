import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { FaStar } from 'react-icons/fa';
import useEnrollCourse from '../../utils/useEnrollCourse';
import { CourseType } from '../../utils/courseTypes';

const CourseCard: React.FC<CourseType> = ({ id, title, description, videoLink, stars }) => {
  const enrollCourse = useEnrollCourse();

  const handleEnroll = () => {
    const course = { id, title, description, videoLink, stars };
    enrollCourse(course);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Suspense fallback={<div>Loading...</div>}>
          <Image
            src={`https://img.youtube.com/vi/${videoLink.split('=')[1]}/maxresdefault.jpg`}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </Suspense>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {description && <p className="text-gray-600 mb-6">{description}</p>}
        <div className='flex flex-col items-center justify-between gap-4 md:gap-8 md:flex-row'>
          <div className="flex items-center mb-4 md:mb-0">
            {Array(stars).fill(0).map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
          </div>
          <button
            onClick={handleEnroll}
            className="inline-block bg-background2 text-white py-2 px-4 rounded"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
