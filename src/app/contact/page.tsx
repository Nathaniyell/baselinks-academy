"use client"
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Space from "@/components/Space";
import Link from "next/link";
import { useRef, FormEvent } from "react";



interface FormFields {
  email: string;
  name: string;
  message: string;
}
const Page = () => {

  const formRef = useRef<HTMLFormElement | null>(null);
  const messageSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_YOUR_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID || '',
          formRef.current,
          process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY || '' // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            // console.log(formRef.current);
            formRef.current?.reset(); // Clear the form fields
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

  };
  return (
    <div>

      <motion.section
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        id="contact"
        className="w-[95%] md:w-[60%] mx-auto"
      >
        {/* <Space /> */}
        <h5 className="text-titles text-3xl my-4 text-center">
          Complete the form below to get in touch with us today
        </h5>

        <form method="POST" ref={formRef} onSubmit={messageSubmitHandler} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 lg:p-10 space-y-6">
          <div className="relative">
            <input
              className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:border-blue-500 transition duration-200"
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Alex Johnson"
            />      </div>
          <div className="relative">
            <input
              className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:border-blue-500 transition duration-200"
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Email address"
            />
          </div>
          <div className="relative">
            <textarea
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-4 text-sm focus:outline-none focus:border-blue-500 transition duration-200"
              name="message"
              id="message"
              placeholder="Type your comment"
            ></textarea>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full text-white md:w-3/5 lg:w-2/5 !mx-auto bg-blue-600 rounded-lg p-4 text-center transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="submit"
          >
            Send Message
          </motion.button>
        </form>      </motion.section>
      <Space />
    </div>
  )
}

export default Page