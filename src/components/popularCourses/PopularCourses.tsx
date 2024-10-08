import { LinkBtn } from '../button/LinkBtn';
import CourseCard from '../courseCard/CourseCard';
import {courses }from '@/lib/courses';

const PopularCourses: React.FC = () => {
  const popularCourses = courses.filter(course => course.stars === 5).slice(0, 3);

  return (
    <main className="w-11/12 md:w-10/12 mx-auto py-10">
      <h2 className="text-3xl text-center font-bold mb-6 text-titles">Popular Courses</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 md:gap-12">
        {popularCourses.map((course, index) => (
          <CourseCard
          tag={course.tag}
          key={index}
          id={course.id}
          title={course.title}
          description={course.description}
          videoLink={course.videoLink}
          image={course.image}
          stars={course.stars}
          price={course.price}
          students={course.students}
          />
        ))}
      </div>
      <LinkBtn href='/courses' className='mt-5 md:w-2/5 lg:w-1/3 mx-auto text-center' variant='titles' arrow> Explore more Courses </LinkBtn>
    </main>
  );
};

export default PopularCourses;
