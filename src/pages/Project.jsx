import React from 'react';
import { assets } from '../assets/assets.js';
import { FileBox } from 'lucide-react';
import ReactPlayer from 'react-player';

const Project = () => {
  return (
    <div className="px-4 sm:px-4 md:px-6 lg:px-8 mb-10">
      <div className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#7aa9a9] font-bold flex text-center justify-center mt-10'>
        <FileBox className='w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-9 lg:h-11 text-[#7aa9a9] mr-3 pb-1' src={assets.Project} alt="" />
        PROJECTS
      </div>

      {/* Grid container for all project cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 sm:gap-5 md:gap-6 lg:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-10'>
        {[{
          url: "https://youtu.be/pL2gK5n8uwU",
          title: "Bed Allocation App",
          summary: "A MERN-based hospital management app streamlines bed allocation by displaying available beds in real-time. It allows staff to assign patients to specific rooms and beds, ensuring efficient hospital management."
        }, {
          url: "https://youtu.be/Y4-5LJ2ewvo",
          title: "E-Commerce",
          summary: "Clothify is a sleek e-commerce website for trendy fashion. It showcases the latest arrivals with premium fabrics and stylish designs. Users can browse collections, shop easily, and enjoy a seamless shopping experience."
        }, {
          url: "https://youtu.be/XLCUK8fu2vs",
          title: "Real Time Chat App",
          summary: "Chatty is a real-time chat application with a sleek dark theme. It features secure login, user authentication, and instant messaging. Users can create accounts, sign in, and continue conversations seamlessly."
        }, {
          url: "https://youtu.be/ZIfPisf8VMA",
          title: "Medicare",
          summary: "The MERN Hospital Management System manages patient admissions, bed allocations, and records. It ensures efficient room management, tracks patient details, and updates availability dynamically for streamlined hospital operations."
        }, {
          url: "https://youtu.be/Y96gcyPbNiU",
          title: "Chess Board",
          summary: "A React-based chessboard app with dynamic grid sizing (8 to 20), allowing users to change box colors on click. Features include undo, redo, and reset for seamless interaction and customization."
        }, {
          url: "https://youtu.be/q5Z-WpjIDZ8",
          title: "Bookify",
          summary: "Bookify is a MERN-based book management app that helps users organize their book collections seamlessly. Built with MongoDB Compass and React.js, it allows users to add, update, and delete books dynamically."
        }].map((project, index) => (
          <div key={index} className='w-full p-3 sm:p-4 md:p-5 bg-[#2e3038] rounded-xl'>
            <div className='w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px]'>
              <ReactPlayer width='100%' height='100%' className='rounded-lg' url={project.url} muted playing loop />
            </div>
            <h3 className='mt-4 bg-[#7aa9a9] text-[#1b1c21] rounded-md px-2 py-1 w-fit text-sm sm:text-base md:text-lg'>{`TITLE : ${project.title}`}</h3>
            <h4 className='mt-3 text-sm sm:text-md md:text-lg text-[#7aa9a9] underline font-semibold bg-[#2e3038]'>Summary</h4>
            <p className='mt-2 text-sm sm:text-base text-white bg-[#2e3038]'>{project.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;