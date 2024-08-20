import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { FaStar } from 'react-icons/fa';
import { CourseType } from '../../utils/courseTypes';
import { BiUser } from 'react-icons/bi';

const CourseCard: React.FC<CourseType> = ({ id, title, description, videoLink, stars, price, students, tag, image }) => {
  return (
    <Link href={`/courses/${id}`} className="block">
      <div className="bg-white rounded-md shadow overflow-hidden flex flex-col h-full">
        <div className="relative h-48">
          <Suspense fallback={<div>Loading...</div>}>
            <Image
              src={image}
              alt={title}
       
              className="w-full size-full rounded-t"
            />
          </Suspense>
        </div>
        <div className="flex flex-col justify-between flex-1 p-4">
          <div className="flex items-center justify-between gap-4 text-sm font-medium text-amber-700 mb-2">
            <span className="capitalize bg-slate-100 shadow rounded-sm px-2 py-1">{tag}</span>
            {price === 0 ? <span className="bg-green-100 text-green-600 px-2 py-1">Free</span> : <span className="px-2 py-1">N{price}</span>}
          </div>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <div className="flex items-center justify-between gap-4 md:gap-8 md:flex-row border-t border-slate-200 pt-2 mt-auto">
            <div className="flex items-center">
              {Array(stars).fill(0).map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-lightBg"><BiUser className="text-amber-700" />{students} students</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
