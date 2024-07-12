"use client"
import { useParams } from 'next/navigation';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '@/config/firebase-config'; 

const CoursePage = () => {
  const { id } = useParams();

  // Ensure the id is available before attempting to fetch the document
  const courseRef = id ? doc(db, 'courses', id as string) : null;
  const [course, loading, error] = useDocumentData(courseRef);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading course.</div>;
  }

  // if (!course) {
  //   return <div>No course found.</div>;
  // }
  console.log(course)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">{course?.title}</h1>
      <div className="mb-8">
        <video controls width="100%">
          <source src={course?.videoLink}  type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quizzes</h2>
        {/* Add quizzes here */}
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Downloadable Materials</h2>
        {/* Add downloadable materials here */}
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Interactive Exercises</h2>
        {/* Add interactive exercises here */}
      </div>
    </div>
  );
};

export default CoursePage;
