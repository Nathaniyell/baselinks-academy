"use client"

import React, { FormEvent, useState } from 'react';
import { auth, googleProvider } from "@/config/firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from '@/context/auth-context';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Space from '@/components/Space';

const Auth = () => {
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
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Sign in successful");
            router.push("/")
            console.log(auth?.currentUser?.email);
            // e.currentTarget.reset();
        } catch (error) {
            console.error(error);
            toast.error("Sign in failed");
        } finally {
            setIsSubmitted(false);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success("Sign in with Google successful");
        } catch (error) {
            console.error(error);
            toast.error("Sign in with Google failed");
        }
    };

    return (
        <div className='mx-auto flex flex-col gap-10 items-center min-h-screen'>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                hideProgressBar={false}
            />
            <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.1,
                    duration: 1,
                }}
                className='bg-white w-11/12 md:w-full border-[#eee] border shadow-md rounded-md p-6 max-w-md'>
                <div

                    className='flex flex-col items-center gap-2'
                >
                    <h1 className='text-2xl font-semibold mb-6'>Sign Up</h1>
                    <motion.button
                        type='button'
                        whileTap={{ scale: 0.8 }}
                        className='w-full border border-lightBg rounded-md p-3 flex items-center justify-center gap-2 mb-2'
                        onClick={signInWithGoogle}
                    >
                        <FcGoogle className='text-2xl' />
                        Sign up with Google
                    </motion.button>
                    <span className='text-center mb-2 text-lightBg'>Or <br /> Sign up with credentials</span>
                    <form className='flex flex-col gap-4 w-full' onSubmit={signIn}>
                        <input
                            className='w-full border border-lightBg rounded-md p-3 focus:outline-none focus:border-titles'
                            type="email"
                            name="email"
                            placeholder='Email'
                            required
                        />
                        <input
                            className='w-full border border-lightBg rounded-md p-3 focus:outline-none focus:border-titles'
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
                            {isSubmitted ? "Loading..." : "Sign up"}
                        </motion.button>
                    </form>

                    <div className="flex justify-between items-center mt-4 w-full">
                        <p className='text-gray-600'>Already have an account?</p>
                        <Link href="/auth/login" className="text-blue-600 hover:text-red-600 transition-colors duration-200">
                            Sign in
                        </Link>
                    </div>
                </div>
            </motion.div>
            <Space  />
        </div>
    );
};

export default Auth;
