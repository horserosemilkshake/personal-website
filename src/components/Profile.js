import React from 'react';
import head from './images/head.jpeg';
import { PersonCircle, GeoAlt, Building, Book, Briefcase } from 'react-bootstrap-icons';
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.div className='p-4 m-4 bg-zinc-800 rounded-2xl shadow-2xl'
        initial={{ opacity: 0, scale: 1, rotate: 20, }}
        animate={{ opacity: 1, scale: 1, rotate: 0, }}
        transition={{ duration: 0.3, }}
        whileHover={{
            scale: 1.05,
            rotate: -2,
            transition: { duration: 0.3 },
          }}
        >
            <img src={head} className="rounded-full my-4 h-[4rem] sm:h-[8rem] shadow-2xl ring-4 ring-yellow-500 hover:animate-pulse" alt="how-I-look"></img>
            <div className='my-4 py-2 text-white'>
                <p className='text-xl'><PersonCircle className='inline mb-1' /><span>  Tsoi Tsz Chun</span></p>
                <p className='text-xl'><GeoAlt className='inline mb-1' /><span>  Hong Kong SAR</span></p>
                <p className='text-xl'><Building className='inline mb-1' /><span>  City University of Hong Kong</span></p>
                <p className='text-xl'><Book className='inline mb-1' /><span>  Computer Science (Minor in Neuroscience)</span></p>
                <p className='text-xl'><Briefcase className='inline mb-1' /><span>  Open for jobs</span></p>
            </div>
        </motion.div>
    )
}