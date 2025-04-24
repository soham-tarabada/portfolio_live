import React from "react";
import { GraduationCap, Calendar, Award, BrainCircuit, BriefcaseBusiness } from "lucide-react";
import { assets } from '../assets/assets.js';

const educationData = [
  {
    institution: "Alembic Vidyalaya",
    location: "Vadodara",
    degree: "Secondary School Certification",
    duration: "Mar 2018 - Mar 2019",
    grade: "92.5 %",
    description: "Secured an impressive 92.5% in SSC examinations from Alembic Vidyalaya in Vadodara.",
    logo: "https://www.alembicgroupschools.org/wp-content/uploads/2024/02/Alembic_Vidyalaya_Logo-1024x1024_webp.webp",
    position: "left",
  },
  {
    institution: "Parth School of Science and Competition",
    location: "Vadodara",
    degree: "Higher Secondary Education (XII), Science",
    duration: "Mar 2020 - Mar 2021",
    grade: "89.73%",
    description: "Achieved an outstanding 89% in HSC examinations from Parth School of Science and Competition in Vadodara. Demonstrated consistent academic excellence and a strong grasp of core subjects",
    logo: "https://th.bing.com/th/id/OIP.QprsBMAIbBqXQpk0nX6rxQHaHa?rs=1&pid=ImgDetMain",
    position: "right",
  },
  {
    institution: "GEC Gandhinagar",
    location: "Gandhinagar",
    degree: "Bachelor of Engineering",
    duration: "Sept 2021 - Present...",
    grade: "7.67 CGPA",
    description: "Currently maintaining a 7.83 CGPA in my BE program at GEC Gandhinagar. Committed to furthering my education and honing my technical skills",
    logo: "https://gecg28.ac.in/img/GECG_logo.png",
    position: "left",
  },
];

const internshipData = [
  {
    institution: "CodSoft",
    location: "Ahmedabad",
    degree: "Android Development",
    duration: "Mar 2024 - Apr 2024",
    description: "Completed a 1-month Android Development internship at CodSoft, gaining experience in building and debugging Android apps",
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=630,fit=crop,f=jpeg/Aq20eV79zLfpXV6b/1685789339697-YrDL60zzRBfzM6Wr.jpg",
    position: "right",
  },
  {
    institution: "STYPIPX",
    location: "Ahmedabad",
    degree: "Android Development",
    duration: "June 2024 - July 2024",
    description: "Completed a 1-month internship at STYPIX specializing in Android development. Gained experience in app development.",
    logo: "https://media.glassdoor.com/sql/2328612/stypix-squarelogo-1540816898025.png",
    position: "left",
  },
  {
    institution: "Web-brain Technologies",
    location: "Vadodara",
    degree: "Full Stack (MERN)",
    duration: "Jan 2025 - Present...",
    description: "My ongoing MERN Stack internship at Web-brain Technologies, Vadodara, has been a journey of hands-on learning, skill development, and professional growth. I am gaining expertise in MongoDB, Express.js, React, and Node.js while working on real-world projects, enhancing my problem-solving abilities, and collaborating with a dynamic development team.",
    logo: "https://www.webbrainstechnologies.com/wp-content/uploads/2022/03/weblogo-e1629894882198.png",
    position: "right",
  },
];

export const About = () => {
  return (
    <div className="min-h-screen text-white py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* EDUCATION SECTION */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3 text-[#7aa9a9]">
            <GraduationCap className="w-8 h-8 md:w-9 md:h-9 text-[#7aa9a9]" />
            Education
          </h1>
          <p className="text-[#7aa9a9] px-4 py-2 rounded-md text-base">
            My education has been a journey of self-discovery, growth, and skill development.
          </p>
        </div>

        <div className="flex flex-col space-y-12">
          {educationData.map((education, index) => (
            <div key={index} className="flex flex-col md:flex-row border-2 border-white/70 p-4 rounded-2xl items-center md:items-start text-center md:text-left">
              <img
                src={education.logo}
                alt={education.institution}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h3 className="text-xl font-semibold">{education.institution}</h3>
                <p className="text-gray-400 text-sm">{education.location}</p>
                <p className="text-blue-400 font-medium mt-2">{education.degree}</p>
                <div className="flex justify-center md:justify-start items-center gap-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex justify-center md:justify-start items-center gap-2 text-white text-sm mt-1">
                  <Award className="w-4 h-4" />
                  <span>{education.grade}</span>
                </div>
                <p className="text-white text-sm mt-2">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INTERNSHIP SECTION */}
      <hr className="w-full h-1 bg-gray-400 my-12" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3 text-[#7aa9a9]">
            <BriefcaseBusiness className="w-8 h-8 md:w-9 md:h-9 text-[#7aa9a9]" />
            Internships
          </h1>
          <p className="text-[#7aa9a9] px-4 py-2 rounded-md text-base">
            My internships have provided valuable hands-on experience and professional growth.
          </p>
        </div>

        <div className="flex flex-col space-y-12">
          {internshipData.map((internship, index) => (
            <div key={index} className="flex flex-col md:flex-row border-2 border-white/70 p-4 rounded-2xl items-center md:items-start text-center md:text-left">
              <img
                src={internship.logo}
                alt={internship.institution}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h3 className="text-xl font-semibold">{internship.institution}</h3>
                <p className="text-gray-400 text-sm">{internship.location}</p>
                <p className="text-blue-400 font-medium mt-2">{internship.degree}</p>
                <div className="flex justify-center md:justify-start items-center gap-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{internship.duration}</span>
                </div>
                <p className="text-white text-sm mt-2">{internship.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS SECTION */}
      <hr className="w-full h-1 bg-gray-400 my-12" />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#7aa9a9] flex justify-center items-center gap-3">
          <BrainCircuit className="w-9 h-9 text-[#7aa9a9]" /> SKILLS
        </h1>
        <p className="text-base text-[#7aa9a9] px-4 py-2 rounded-md mt-4">The Skills, Tools, and Technologies I Use</p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {[assets.JavascriptCopy, assets.Node1, assets.Express, assets.React, assets.Mongo, assets.Tailwind, assets.Postman].map((skill, index) => (
          <img key={index} className="w-16 h-16 hover:shadow-xl rounded-full" src={skill} alt="skill" />
        ))}
      </div>
    </div>
  );
};

export default About;