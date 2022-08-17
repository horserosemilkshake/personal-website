import React from 'react';
import Project from './Project';
import { motion } from 'framer-motion';
import Contact from './Contact.js';
import { Mailbox, ZoomOut, ZoomIn } from 'react-bootstrap-icons';
import image1 from './images/slide_1.jpeg';
import image2 from './images/slide_2.jpeg';
import image3 from './images/slide_3.jpeg';

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

        if (document.getElementById("contact_me").nextElementSibling.className === "hidden bg-neutral-800 p-4 rounded-xl"){
            document.getElementById("contact_me").nextElementSibling.className = "visible bg-neutral-800 p-4 rounded-xl";
        }
    }


    function handleFolding(event) {
        var foo = document.getElementById(event.currentTarget.id).nextElementSibling;
        if (foo.className === "visible bg-neutral-800 p-4 rounded-xl") {
            foo.className = "hidden bg-neutral-800 p-4 rounded-xl";
        }
        else {
            foo.className = "visible bg-neutral-800 p-4 rounded-xl";
        }
    }

    function collapseAll() {
        let foo = document.getElementsByClassName("visible bg-neutral-800 p-4 rounded-xl");
        while (foo.length !== 0) {
            for (let i = 0; i < foo.length; i++) {
                foo[i].className = "hidden bg-neutral-800 p-4 rounded-xl";
            }
            foo = document.getElementsByClassName("visible bg-neutral-800 p-4 rounded-xl");
        }
    }

    function expandAll() {
        let foo = document.getElementsByClassName("hidden bg-neutral-800 p-4 rounded-xl");
        while (foo.length !== 0) {
            for (let i = 0; i < foo.length; i++) {
                foo[i].className = "visible bg-neutral-800 p-4 rounded-xl";
            }
            foo = document.getElementsByClassName("hidden bg-neutral-800 p-4 rounded-xl");
        }
    }

    function dismissNotice() {
        document.getElementById("dismiss").parentNode.className = "hidden";
    }

    return (
        <motion.div className='p-4 m-4 sm:w-screen h-full sm:h-[65rem] overflow-show sm:overflow-y-scroll bg-zinc-800 rounded-2xl shadow-2xl text-white'
            initial={{ opacity: 0, scale: 1, }}
            animate={{ opacity: 1, scale: 1, }}
            transition={{ duration: 0.5 }}
            id="article"
        >
            <motion.div className='flex flex-row space-x-9 bg-neutral-700 rounded-xl px-4 py-2 w-64 my-2'
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                  }}
            >
                <button type="button" title="Compress All Sections" onClick={collapseAll} className="bg-yellow-500 w-12 h-12 p-4 rounded-full text-black text-center"><ZoomOut></ZoomOut></button>
                <button type="button" title="Expand All Sections" onClick={expandAll} className="bg-yellow-500 w-12 h-12 p-4 rounded-full text-black text-center"><ZoomIn></ZoomIn></button>
                <button type="button" title="Skip to the Contact Section" onClick={handleScroll} className="bg-yellow-500 w-12 h-12 p-4 rounded-full text-black text-center"><Mailbox></Mailbox></button>
            </motion.div>

            <motion.div className='flex flex-row items-baseline bg-neutral-700 rounded-xl px-4 py-2 w-[30rem] my-2 hover:animate-pulse'
                    initial={{ opacity: 0, left: -200, }}
                    animate={{ opacity: 1, left: 0,}}
                    transition={{ duration: 1.5 }}
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.1 },
                  }}
            >
                <p className='text-l'>Click any of the following bars to start reading</p>
                <button type="button" title="Skip to the Contact Section" className="w-24 h-12 p-2 text-yellow-500 rounded-xl" id="dismiss" onClick={dismissNotice}>Dismiss</button>
            </motion.div>

            <motion.div>
                <button className='text-2xl antialiased bg-zinc-900 w-full text-left px-4 py-2 rounded-xl my-2' id="about_me" onClick={handleFolding}>About Me</button>
                <div className='hidden bg-neutral-800 p-4 rounded-xl'>
                    <p className='text-xl antialiased'>
                        I'm a sophomore computer science student at the City University of Hong Kong (CityU). Before that, I was a business student at the University of Hong Kong (HKU) for two years (2019-2021) and decided to switch tracks due to my determined interest in computer science.
                    </p>
                    <br></br>
                    <p className='text-xl antialiased'>
                        Starting with web and mobile application development a year ago, my knowledge of computer science has extended to fields of hardware configurations, desktop application programming, programming language analysis, and automated data analytics. Below are some of my creative projects that I found interesting.
                    </p>
                    <br></br>
                </div>
            </motion.div>

            <motion.div>
                <button className='text-2xl antialiased bg-zinc-900 w-full text-left px-4 py-2 rounded-xl my-2' id="interesting_project" onClick={handleFolding}>Interesting Projects (Let's try clicking them)</button>
                <div className='hidden bg-neutral-800 p-4 rounded-xl'>
                    <ul className='flex flex-col 2xl:grid grid-cols-3 gap-3'>
                        <motion.li initial={{ opacity: 0, scale: 1, }}
                            animate={{ opacity: 1, scale: 1, }}
                            transition={{ duration: 0.5 }}
                        ><Project title="E-Commerce Shopping Website for Fast Food Chains" lifecycle="Developing" tech="React.js + Tailwind CSS + PostCSS + Axios + Spring Boot (JDK 18) + Mysql" link="https://github.com/horserosemilkshake/family-bucket"></Project></motion.li>
                        <motion.li initial={{ opacity: 0, scale: 1, }}
                            animate={{ opacity: 1, scale: 1, }}
                            transition={{ duration: 1.0 }}><Project title="Room Scheduler for CityU Campus" lifecycle="Completed" tech="Spring Boot + Thymeleaf + Tailwind CSS"></Project></motion.li>
                        <motion.li initial={{ opacity: 0, scale: 1, }}
                            animate={{ opacity: 1, scale: 1, }}
                            transition={{ duration: 1.5 }}><Project title="BF-lang Interpreter" lifecycle="Completed" tech="C/C++" link="https://github.com/horserosemilkshake/BF-Interpreter"></Project></motion.li>
                        <motion.li initial={{ opacity: 0, scale: 1, }}
                            animate={{ opacity: 1, scale: 1, }}
                            transition={{ duration: 2.0 }}><Project title="EFI for Bootloading Mac OS on x86 Machine (for Academic Purposes only)" lifecycle="Completed" tech="Well... A lot" link="https://github.com/horserosemilkshake/H410M-E-Opencore-0.6.5-EFI"></Project></motion.li>
                        <motion.li initial={{ opacity: 0, scale: 1, }}
                            animate={{ opacity: 1, scale: 1, }}
                            transition={{ duration: 2.0 }}><Project title="Currency Coversion Rate Calculator" lifecycle="Completed" tech="React.js + Axios + Node.js" link="https://github.com/horserosemilkshake/Currency-Exchange-Rate-Calculator"></Project></motion.li>
                    </ul>
                </div>
            </motion.div>

            <motion.div>
                <button className='text-2xl antialiased bg-zinc-900 w-full text-left px-4 py-2 rounded-xl my-2' id="exp" onClick={handleFolding}>My Experiences and Achievements</button>
                <div className='hidden bg-neutral-800 p-4 rounded-xl'>
                    <p className='text-xl antialiased'>Please refer to my Linkedin account (at the top right hand corner) for more information.</p>
                </div>
            </motion.div>

            <motion.div>
                <button className='text-2xl antialiased bg-zinc-900 w-full text-left px-4 py-2 rounded-xl my-2' id="interests" onClick={handleFolding}>My Interests</button>
                <div className='hidden bg-neutral-800 p-4 rounded-xl'>
                    <ul className='text-xl antialiased marker:text-yellow-500 list-outside list-disc ml-6'>
                        <li>Hiking</li>
                        <li>Trekking</li>
                        <li>Swimming (not good at it though)</li>
                        <li>Cooking</li>
                    </ul>
                    
                    <div className='flex flex-col 2xl:grid grid-cols-3 gap-3 m-8'>
                        <img src={image1} alt="scenery" width={512} className="ring-2 ring-yellow-500 rounded-xl"></img>
                        <img src={image2} alt="scenery" width={512} className="ring-2 ring-yellow-500 rounded-xl"></img>
                        <img src={image3} alt="scenery" width={512} className="ring-2 ring-yellow-500 rounded-xl"></img>
                    </div>
                </div>
            </motion.div>

            <motion.div>
                <button className='text-2xl antialiased bg-zinc-900 w-full text-left px-4 py-2 rounded-xl my-2' id="quote_on_life" onClick={handleFolding}>My Favourite Quote about Life</button>
                <div className='hidden bg-neutral-800 p-4 rounded-xl'>
                    <q cite="https://www.google.com/" className='text-xl antialiased'>Picture a wave in the ocean: you can see it measure it, its height, the way the sunlight refracts… and then it crashes on the shore and then it’s gone. But the water is still there. The wave was just a different way for the water to be for a little while. That’s one conception of death for a Buddhist. The wave returns to the ocean, where it came from, and where it’s supposed to be.</q>
                </div>
            </motion.div>

            <motion.div>
                <button className='text-2xl antialiased bg-zinc-900 w-full text-left px-4 py-2 rounded-xl my-2' id="contact_me" onClick={handleFolding}>Contact Me</button>
                <div className='hidden bg-neutral-800 p-4 rounded-xl'>
                    <Contact></Contact>
                </div>
            </motion.div>

        </motion.div>
    )
}