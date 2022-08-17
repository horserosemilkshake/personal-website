import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Navbar() {
    const [from, setFrom] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const form = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        
        emailjs.sendForm('service_p942vta', 'template_asfmhls', form.current, '7QriakcO2f8e0Qgb7')
            .then((result) => {
                console.log(result.text);
                alert("Your message is sent to my mailbox. ".concat("It's nice to know you, ").concat(from).concat(". ").concat("I will get back to you by replying to ").concat(email).concat(" within 3 working days. Keep in touch!"));
            }, (error) => {
                console.log(error.text);
                alert("Sorry, something went wrong. Please resend your message.");
            });
    }

    return (
        <motion.div>
            <p className='text-2xl antialiased'>Contact Me</p>
            <hr></hr> <br></br>
            <form className='flex flex-col' onSubmit={handleSubmit} ref={form}>
                <input type="text" className='rounded-xl px-4 py-2 bg-zinc-900 ring-2 ring-yellow-500 my-4 invalid:ring-red-300 focus:invalid:animate-bounce' name='from_name' placeholder='What is your name? (Required)' required
                    value={from} onChange={e => setFrom(e.target.value)}></input>
                <input type="email" className='rounded-xl px-4 py-2 bg-zinc-900 ring-2 ring-yellow-500 my-4 invalid:ring-red-300 focus:invalid:animate-bounce' name='from_email' placeholder='Email (Required)' required
                    value={email} onChange={e => setEmail(e.target.value)}></input>
                <textarea name="message" cols="50" rows="10" className='rounded-xl px-4 py-2 bg-zinc-900 ring-2 ring-yellow-500 my-4 invalid:ring-red-300' placeholder='Message (Required)' required
                    value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <input type="submit" value="Let's Talk!" className='bg-yellow-500 text-gray-700 rounded-xl w-36 h-12 hover:animate-pulse hover:cursor-pointer' />
            </form>
        </motion.div>
    )
}