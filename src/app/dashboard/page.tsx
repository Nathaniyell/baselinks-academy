"use client"
import { signOut } from 'firebase/auth';
import { auth } from "@/config/firebase-config"
import { useAuth } from '@/context/auth-context'; 
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Page = () => {
  const { user } = useAuth();
  const router = useRouter();
  const signOutFromApp = async () => {
    try {
        await signOut(auth);
        toast.success("Sign out successful");
    } catch (error) {
        console.error(error);
        toast.error("Sign out failed");
    }
};
  return (
    <div>
       {user && <motion.button whileTap={{ scale: 0.8 }} className='text-white bg-red-600 rounded-md p-2 ' onClick={signOutFromApp}>Signout</motion.button>}
    </div>
  )
}

export default Page