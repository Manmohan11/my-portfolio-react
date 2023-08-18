import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Recent Computer Science graduate with a strong passion for Full Stack development and a proven track record of creating innovative web projects. My proficiency extends in UI/UX developmentto API testing, React development, and the Adobe suite for photo and video editing. </p>

        <br />

        <p className="text-xl">
        I've achieved commendable results in API testing, ensuring project robustness, and seamlessly integrating React to elevate projects. From refining user experiences to crafting persuasive UI designs, my skills are a fusion of creativity and precision.
        </p>

        <br />
        
        <p className="text-xl">
        I'm here to transform ideas into engaging and functional digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
