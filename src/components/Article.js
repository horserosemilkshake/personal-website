import React from 'react';
import Project from './Project';
import { motion } from 'framer-motion';
import Contact from './Contact.js';

export default function Article() {

    function handleScroll() {
        if (window.innerWidth > 648) {
            document.getElementById("article").scroll({
                top: document.getElementById("article").offsetHeight,
                left: 0,
                behavior: 'smooth',
            });
        }
        else {
            window.scroll({
                top: document.body.offsetHeight,
                left: 0,
                behavior: 'smooth',
            });
        }
    }

    return (
        <motion.div className='p-4 m-4 sm:w-screen h-full sm:h-[65rem] overflow-show sm:overflow-y-scroll bg-zinc-800 rounded-2xl shadow-2xl text-white'
            initial={{ opacity: 0, scale: 1, }}
            animate={{ opacity: 1, scale: 1, }}
            transition={{ duration: 0.5 }}
            id="article"
        >
            <button type="button" onClick={handleScroll} className="bg-yellow-500 p-4 my-4 rounded-xl absolute right-16 text-xl animate-bounce">Contact</button>
            <motion.div>
                <h2 className='text-2xl antialiased'>About Me</h2>
                <hr></hr> <br></br>
                <p className='text-xl antialiased'>I'm a sophomore computer science student at the City University of Hong Kong (CityU). Before that, I was a business student at the University of Hong Kong (HKU) for two years (2019-2021) and decided to switch tracks due to my determined interest in computer science. <br></br><br></br>Starting with web and mobile application development a year ago, my knowledge of computer science has extended to fields of hardware configurations, desktop application programming, programming language analysis, and automated data analytics. Below are some of my creative projects that I found interesting.</p>
                <br></br>
            </motion.div>

            <motion.div>
                <h2 className='text-2xl antialiased'>Interesting Projects (Let's try clicking them)</h2>
                <hr></hr> <br></br>
                <ul className='flex flex-col 2xl:grid grid-cols-3 gap-3'>
                    <motion.li initial={{ opacity: 0, scale: 1, }}
                        animate={{ opacity: 1, scale: 1, }}
                        transition={{ duration: 0.5 }}
                    ><Project title="E-Commerce Shopping Website for Fast Food Chains" lifecycle="Developing" tech="React JS + Tailwind CSS + PostCSS + Axios + Spring Boot (JDK 18) + Mysql" link="https://github.com/horserosemilkshake/family-bucket"></Project></motion.li>
                    <motion.li initial={{ opacity: 0, scale: 1, }}
                        animate={{ opacity: 1, scale: 1, }}
                        transition={{ duration: 1.0 }}><Project title="Room Scheduler for CityU Campus" lifecycle="Completed" tech="Spring Boot + Thymeleaf + Tailwind CSS"></Project></motion.li>
                    <motion.li initial={{ opacity: 0, scale: 1, }}
                        animate={{ opacity: 1, scale: 1, }}
                        transition={{ duration: 1.5 }}><Project title="BF-lang Interpreter" lifecycle="Completed" tech="C/C++" link="https://github.com/horserosemilkshake/BF-Interpreter"></Project></motion.li>
                    <motion.li initial={{ opacity: 0, scale: 1, }}
                        animate={{ opacity: 1, scale: 1, }}
                        transition={{ duration: 2.0 }}><Project title="EFI for Bootloading Mac OS on x86 Machine (for Academic Purposes only)" lifecycle="Completed" tech="Well... A lot" link="https://github.com/horserosemilkshake/H410M-E-Opencore-0.6.5-EFI"></Project></motion.li>
                </ul>
                <br></br>
            </motion.div>

            <motion.div>
                <h2 className='text-2xl antialiased'>My Interests</h2>
                <hr></hr> <br></br>
                <ul className='text-xl antialiased'>
                    <li>- Hiking</li>
                    <li>- Trekking</li>
                    <li>- Swimming (not good at it though)</li>
                    <li>- Cooking</li>
                </ul>
                <br></br>
            </motion.div>

            <motion.div>
                <h2 className='text-2xl antialiased'>My Thoughts on Business with Technology</h2>
                <hr></hr> <br></br>
                <ul className='text-xl antialiased'>
                    <li>- Hiking</li>
                    <li>- Trekking</li>
                    <li>- Swimming (not good at it though)</li>
                    <li>- Cooking</li>
                </ul>
                <br></br>
            </motion.div>

            <Contact></Contact>
        </motion.div>
    )
}