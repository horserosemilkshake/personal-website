import React, { Component } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Project(props) {
    return (
        <a href={props.link}>
            <motion.ul className='m-6 w-96 h-auto bg-zinc-900 rounded-xl shadow-2xl text-black hover:cursor-pointer'
                initial={{ opacity: 0, scale: 1, }}
                animate={{ opacity: 1, scale: 1, }}
                whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 },
                }}
            >
                <li className='p-4 text-yellow-500 ring-2 rounded-xl ring-yellow-500'>Project Content: {props.title}</li>
                <li className='p-4 text-yellow-500 ring-2 rounded-xl ring-yellow-500'>Lifecycle: {props.lifecycle}</li>
                <li className='p-4 text-yellow-500 ring-2 rounded-xl ring-yellow-500'>Technology involved: {props.tech}</li>
            </motion.ul>
        </a>
    )
}