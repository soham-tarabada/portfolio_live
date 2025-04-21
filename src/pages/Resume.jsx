import React from "react";
import ResumePdf from '../assets/Resume.pdf';

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">

      <div className="border mt-5 shadow-md p-2 w-full max-w-4xl">
        <object
            type="application/pdf"
            data={ResumePdf}
            className="w-full h-[90vh] md:h-[600px]"
            title="My Resume"
        ></object>
      </div>
    </div>
  );
};

export default Resume