import { motion, useAnimation } from 'framer-motion';
import { React, useEffect } from 'react';
import companion_cube from './images/companion-cube.png';

export default function Point() {
    const animationControls = useAnimation();

    async function sequence() {
        animationControls.start({
          scale: [1, Math.floor((Math.random()*3)+1), Math.floor((Math.random()*2)+1), 1, 1],
          rotate: [0, 0, Math.floor((Math.random()*270)+1), 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          transition: {
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }
        });
      }

    useEffect(() => {
        sequence();
      }, []);

    return (
        <motion.div className="h-[40rem] p-4 m-4 bg-zinc-800 rounded-2xl shadow-2xl grid place-items-center"
        initial={{ opacity: 0, scale: 1, rotate: -20, }}
        animate={{ opacity: 1, scale: 1, rotate: 0, }}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.3 },
        }}
        >
            <p className='text-white text-xl antialiased'>If you feel exhausted...</p>
            <div className='mx-auto'>
                <motion.div className="h-6 w-6 bg-yellow-500 shadow-xl animate-pulse" src={companion_cube} animate={animationControls}></motion.div>
            </div>
            <p className='text-white text-xl antialiased'>Focus on the dot. It helps you relax.</p>
        </motion.div>
    )

    /*<p className="w-2/3 text-white rounded-2xl">Focusing at this dot helps you calm down.</p> */
}