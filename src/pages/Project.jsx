import React from 'react';
import {assets} from'../assets/assets.js';
import {ExternalLink} from 'lucide-react';

const Project = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className='text-3xl md:text-4xl lg:text-5xl text-[#FFEB00] font-bold flex text-center justify-center mt-10'>
        <img className='w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 mr-3' src={assets.Project} alt="" />PROJECTS
      </div>

      {/* Grid container for all project cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 pt-10'>
        {/* PROJECT-1 */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('https://youtu.be/cjy7ri61noo')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.WorkoutVideo} muted autoPlay loop />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Workout Buddy</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>This MERN-based Workout Buddy app helps users log exercises with weight and reps, displaying them dynamically. Users can add and delete workouts, making fitness tracking seamless and efficient with a user-friendly interface.</p>
        </div>

        {/* PROJECT-2 */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('https://youtu.be/Y_BB0-QkQBs')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.ClothifyVideo} muted autoPlay loop />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[200px]'>TITLE : E-Commerce</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>Clothify is a sleek e-commerce website for trendy fashion. It showcases the latest arrivals with premium fabrics and stylish designs. Users can browse collections, shop easily, and enjoy a seamless shopping experience.</p>
        </div>

        {/* PROJECT-3 */}

        {/* CHAT APP REMAINING */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.ChatVideo} muted autoPlay loop/>
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[270px]'>TITLE : Real Time Chat App</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>Chatty is a real-time chat application with a sleek dark theme. It features secure login, user authentication, and instant messaging. Users can create accounts, sign in, and continue conversations seamlessly.</p>
        </div>

        {/* PROJECT-4 */}
        {/* BED ALLOCATION REMAINING */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.BedVideo} loop autoPlay muted />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Bed App</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>A MERN-based hospital management app streamlines bed allocation by displaying available beds in real-time. It allows staff to assign patients to specific rooms and beds, ensuring efficient hospital management.</p>
        </div>

        {/* PROJECT-5 */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('https://youtu.be/AzyLvD5tpdM')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.BookVideo} loop autoPlay muted />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Bookify</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>Bookify is a MERN-based book management app that helps users organize their book collections seamlessly. Built with MongoDB Compass and React.js, it allows users to add, update, and delete books dynamically.</p>
        </div>

        {/* PROJECT-6 */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('https://youtu.be/y2qG_9gYIiQ')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.WeatherVideo} loop autoPlay muted />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Weather App</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>WeatherNow is a React-based weather app that fetches real-time weather data using a Weather API. Styled with Tailwind CSS, it provides users with current conditions, hourly and daily forecasts, and location-based weather updates.</p>
        </div>

        {/* PROJECT-7 */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('https://youtu.be/RWVxisr4cDc')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.AuthVideo} loop muted autoPlay />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Email Auth</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>The MERN Email Authentication project implements user registration, login, and authentication using JWT, bcrypt, and MongoDB. It includes secure password hashing, token-based authentication, and protected routes for user access control.</p>
        </div>

        {/* PROJECT-8 */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('https://youtu.be/A8ZlgGG-omo')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.HmsVideo} loop muted autoPlay />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Medicare</h3>
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>The MERN Hospital Management System manages patient admissions, bed allocations, and records. It ensures efficient room management, tracks patient details, and updates availability dynamically for streamlined hospital operations.</p>
        </div>

        {/* PROJECT-9 */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('https://youtu.be/iVxEcHZPSz8')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.CartVideo} loop autoPlay muted />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Cart(Redux)</h3>
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>The Redux Toolkit Functional Cart manages product selection, cart updates, and state management. It ensures efficient item handling, tracks quantities, and updates dynamically for a seamless shopping experience.</p>
        </div>

        {/* PROJECT-10 */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('https://youtu.be/Gs-TaiGWFrQ')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.ParadiseVideo} loop muted autoPlay />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Paradise Club</h3> 
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>The Paradise Club & Hospitality is a MERN-based travel management platform that streamlines admin operations, manages users, payments, and travel packages, and offers seamless trip booking with dynamic features for enhanced customer experience.</p>
        </div>

        {/* PROJECT-11 */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('https://youtu.be/XGtghXdNb-0')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.ChessVideo} loop muted autoPlay />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : ChessBoard</h3>
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>A React-based chessboard app with dynamic grid sizing (8 to 20), allowing users to change box colors on click. Features include undo, redo, and reset for seamless interaction and customization.</p>
        </div>

        {/* PROJECT-12 */}
        <div className='w-full p-4 md:p-5 bg-[#2e3038] rounded-xl hover:shadow-2xl hover:shadow-[#454754]'>
          <ExternalLink onClick={() => window.open('https://youtu.be/3r51pMUui9I')} className='float-right bg-transparent cursor-pointer text-[#FFEB00]'/>
          <video className='w-full rounded-lg bg-white' src={assets.UserVideo} loop autoPlay muted />
          <h3 className='mt-4 bg-[#FFEB00] text-[#1b1c21] rounded-md px-2 py-1 w-[220px]'>TITLE : Redux Toolkit</h3>
          <h4 className='mt-3 text-md text-[#FFEB00] font-semibold bg-[#2e3038]'>Summary</h4>
          <p className='mt-2 text-white bg-[#2e3038]'>A Redux Toolkit-powered admin panel for user management, enabling adding users, deleting a single user, and bulk deletion. Ensures efficient state management and seamless user operations with a responsive interface.</p>
        </div>
      </div>
    </div>
  );
};

export default Project;