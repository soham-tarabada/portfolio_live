import React, { useState } from 'react';
import ContactLogo from '../assets/ContactEdited.json';
import Lottie from "lottie-react";
import { assets } from '../assets/assets.js';
import emailjs from '@emailjs/browser';
import { MailsIcon } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const serviceId = "service_oi8rvmm";
    const templateId = "template_qq1tzd2";
    const publicKey = "Zr73TqcotdHs3aPN1";

    const templateParam = {
      from_name: name,
      from_email: email,
      to_name: "Soham Tarabada",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParam, publicKey)
      .then((response) => {
        console.log("Email sent Successfully!", response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Error sending email!", error);
      })
      .finally(() => setLoading(false)); // Stop loading
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 mb-10">
        {/* ANIMATION */}
        <Lottie className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" animationData={ContactLogo} loop={true} />

        <div className="flex flex-col items-center w-full max-w-lg gap-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#7aa9a9] font-bold text-center mt-5 flex items-center">
            <MailsIcon className="w-10 h-10 sm:w-12 sm:h-12 mr-3" src={assets.Mail} alt="" />
            Contact Me
          </h1>
          <hr className="opacity-0" />

          <form onSubmit={handleSubmit} className="w-full space-y-4 flex flex-col">
            <label className="text-[#7aa9a9] font-medium">NAME</label>
            <input 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              className="w-full px-4 py-2 text-[#7aa9a9] rounded-md bg-[#2e3038] focus:outline-none focus:ring-2 focus:ring-blue-200" 
              type="text" 
              placeholder="name..." 
              required
            />
            
            <label className="text-[#7aa9a9] font-medium">E-MAIL</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              className="w-full px-4 py-2 text-[#7aa9a9] rounded-md bg-[#2e3038] focus:outline-none focus:ring-2 focus:ring-blue-200" 
              type="email" 
              placeholder="email..." 
              required
            />

            <label className="text-[#7aa9a9] font-medium">MESSAGE</label>
            <textarea 
              onChange={(e) => setMessage(e.target.value)} 
              value={message} 
              className="w-full h-[150px] px-4 py-2 text-[#7aa9a9] rounded-md bg-[#2e3038] focus:outline-none focus:ring-2 focus:ring-blue-200" 
              placeholder="message..."
              required
            />

            <div className="flex justify-center">
              <button 
                className="text-[#7aa9a9] transition-all duration-300 hover:scale-110 hover:text-[#1b1c21] hover:bg-[#7aa9a9] mt-4 w-32 text-xl rounded-md px-4 py-2 border border-[#7aa9a9] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Sending..." : "SEND"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;