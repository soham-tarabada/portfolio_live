import React from "react";
import ResumePdf from '../assets/Resume.pdf';

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">

      <div className="border mt-5 shadow-md p-2 w-full max-w-4xl">
        <iframe
          src={ResumePdf}
          className="border w-full h-[80vh] md:h-[600px]"
          title="My Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;