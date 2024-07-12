import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context'; 
import { auth, db } from "@/config/firebase-config";
import { doc, setDoc } from 'firebase/firestore';
import { CourseType } from './courseTypes';

const useEnrollCourse = () => {
  const router = useRouter();
  const { user } = useAuth();

  const enrollCourse = async (course: CourseType) => {
    if (!user) {
      router.push('/auth/login'); // Redirect to the signup/signin page
      return;
    }

    try {
      // Add course to the user's "My Courses" collection in Firestore
      const userCoursesRef = doc(db, 'users', user.uid, 'myCourses', course.id);
      await setDoc(userCoursesRef, course);

      // Redirect to the course page
      router.push(`/courses/${course.id}`);
    } catch (error) {
      console.error("Error enrolling in course:", error);
    }
  };

  return enrollCourse;
};

export default useEnrollCourse;
