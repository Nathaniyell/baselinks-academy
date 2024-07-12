"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import courses from "@/lib/courses.json";
import Search from '@/utils/Search';
import CourseCard from '@/components/courseCard/CourseCard';
import Space from '@/components/Space';

const Page = () => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search");
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (searchQuery !== null) {
            setIsLoading(true);
            setTimeout(() => {
                const filtered = courses.filter(course =>
                    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    course.description.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setFilteredCourses(filtered);
                setIsLoading(false);
            }, 600); // Mimicking debounced search delay
        } else {
            setFilteredCourses(courses);
        }
    }, [searchQuery]);

    return (
        <main className='bg-orange-50 min-h-screen'>
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-16">
                <div className="w-11/12 md:w-10/12 mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Courses</h1>
                    <p className="text-lg md:text-xl">Explore our wide range of courses and enhance your skills today.</p>
                </div>
            </div>
            <div className="w-11/12 md:w-10/12 mx-auto md:py-10">
                <div className='grid md:grid-cols-2 gap-4 items-center w-full mx-auto p-4'>
                    <h2 className="text-3xl font-bold text-gray-800">Courses</h2>
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className="justify-self-end w-full md:w-auto">
                            <Search />
                        </div>
                    </Suspense>
                </div>
                {isLoading ? (
                    <div className="text-center py-10">
                        <p className="text-xl">Loading...</p>
                    </div>
                ) : (
                    <div>
                        <div className="text-center py-4">
                            {searchQuery !== null && searchQuery.trim() !== "" && (
                                <p className="text-lg">
                                    {filteredCourses.length} {filteredCourses.length === 1 ? 'course found' : 'courses found'}
                                </p>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
                            {filteredCourses.map((course, index) => (
                                <CourseCard
                                    key={index}
                                    id={course.id}
                                    title={course.title}
                                    description={course.description}
                                    videoLink={course.videoLink}
                                    stars={course.stars}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Space border="md:hidden lg:block" />
            <Space border="md:hidden lg:block" />
        </main>
    );
}

export default Page;
