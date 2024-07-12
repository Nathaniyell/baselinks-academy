"use client"

import React, { FormEvent, useState } from 'react';
import { auth, googleProvider } from "@/config/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from '@/context/auth-context';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Space from '@/components/Space';

const Login = () => {
    const { user } = useAuth();
    const router = useRouter();
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const signIn = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            setIsSubmitted(true);
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful");
            router.push("/"); // Redirect to homepage after login
            // e.currentTarget.reset();
        } catch (error) {
            console.error(error);
            toast.error("Login failed");
        } finally {
            setIsSubmitted(false);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success("Login with Google successful");
            router.push("/"); // Redirect to homepage after Google login
        } catch (error) {
            console.error(error);
            toast.error("Login with Google failed");
        }
    };

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
        <div className='w-11/12 md:w-full mx-auto flex flex-col items-center justify-center min-h-screen'>
            <motion.div 
             animate={{ y: 0, opacity: 1 }}
             initial={{ opacity: 0, y: 100 }}
             transition={{
                 type: "spring",
                 stiffness: 100,
                 delay: 0.1,
                 duration: 1,
             }}
            className='bg-white border-[#eee] border shadow-md rounded-md p-6 w-full max-w-md'>
                <div className={`${user ? "flex justify-between items-center gap-8": "block text-center"}  mb-6`}>
                <h1 className='text-2xl font-semibold text-center'>Sign in</h1>
                {user && (
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        className='w-1/3 text-white bg-red-600 rounded-md p-3 mb-4'
                        onClick={signOutFromApp}
                    >
                        Signout
                    </motion.button>
                )}
                </div>
                

                <motion.button
                    type='button'
                    whileTap={{ scale: 0.8 }}
                    className='w-full border border-lightBg rounded-md p-3 flex items-center justify-center gap-2 mb-4'
                    onClick={signInWithGoogle}
                >
                    <FcGoogle className='text-2xl' />
                    Sign in with Google
                </motion.button>
                <p className='text-center mb-4 text-lightBg'>Or <br /> Sign in with credentials</p>

                <form className='flex flex-col gap-4' onSubmit={signIn}>
                    <input
                        className='w-full border border-lightBg rounded-md p-3 focus:outline-none focus:border-blue-500'
                        type="email"
                        name="email"
                        placeholder='Email'
                        required
                    />
                    <input
                        className='w-full border border-lightBg rounded-md p-3 focus:outline-none focus:border-blue-500'
                        type="password"
                        name="password"
                        placeholder='Password'
                        required
                    />
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        disabled={isSubmitted}
                        className={`w-full text-white bg-blue-600 rounded-md p-3 ${isSubmitted && "opacity-70"}`}
                        type="submit"
                    >
                        {isSubmitted ? "Loading..." : "Sign in"}
                    </motion.button>
                </form>

                <div className="flex justify-between items-center mt-6">
                    <p className='text-gray-600'>Don&apos;t have an account?</p>
                    <Link href="/auth/register" className="text-blue-600 hover:text-red-600 transition-colors duration-200">
                        Sign up
                    </Link>
                </div>
            </motion.div>
            <ToastContainer />
            <Space  />
        </div>
    )
}

export default Login;
