import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import One from '../assets/1.json'

const Hero = () => {
  const roles = ["Full Stack Developer", "Computer Engineer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000)
      return;
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText(roles[index].substring(0, subIndex));
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 bg-[#1c1b21] text-white">
      
      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Hi, I Am <span className="text-[#FFEB00]">Soham Tarabda</span></h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">I'm A <span className="bg-[#FFEB00] text-[#1c1b21] px-2 rounded">{text}</span></h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Skilled Full Stack Developer with over six months of experience in 
          building scalable and high-performance web applications. Proficient 
          in MongoDB, Express.js, React.js, Tailwind CSS, and Node.js, with a 
          strong ability to create seamless user experiences, optimize 
          application performance, and integrate APIs effectively. Passionate 
          about problem-solving and continuous learning.
        </p>
      </div>

      {/* RIGHT ANIMATION */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Lottie 
          className="w-48 sm:w-64 md:w-80 lg:w-96 hover:scale-110 transition-all duration-500 shadow-md" 
          animationData={One} 
          loop={true} 
        />
      </div>
    </section>
  );
};

export default Hero;