import React from 'react'
import Space from '../Space'
import {motion} from "framer-motion"
import CountUp from 'react-countup';

const Statistics = () => {

    const data =[
        {
        detail: 100,
        title: "Courses"

    },
        {
        detail:  1000,
        title: "Active Students"

    },
        {
        detail: 500,
        title: "Daily Users"

    },
   
]


  return (
    <motion.div 
    whileInView={{ y: 0, opacity: 1 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ delay: 0.5, duration: 1 }}
    viewport={{ once: true }}
    className='bg-titles text-white py-8 px-12'>
<Space />
    <div className='grid grid-cols-1 md:grid-cols-3 place-items-center w-[90%] gap-8'>
        {
            data.map(item=>(
                <div key={item.title}>
                    <h4 className='text-[50px] md:text-[70px] text-center'> <CountUp delay={5} start={0} end={item.detail} />+</h4>
                    <p className='text-16px md:text-[18px] lg:text-[24px] text-center'>{item.title}</p>
                </div>
            ))
        }
    </div>
    <Space />
    </motion.div>
  )
}

export default Statistics