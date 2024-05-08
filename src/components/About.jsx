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

        <p className="text-xl mt-8">
          Hello! I'm Pratham Pali, a final year B.Tech student in Computer Science and Engineering at MANIT Bhopal. With a passion for technology, I've immersed myself in the dynamic fields of web development, machine learning, and blockchain technology.
        </p>

        <br />

        <p className="text-xl">
          Over the course of my studies, I've gained practical experience and deepened my knowledge through projects using technologies such as HTML, CSS, JavaScript, React, MongoDB, Node.js, Express, as well as data science and machine learning libraries like Pandas, NumPy, TensorFlow, and Keras. Additionally, I've explored blockchain development with Solidity. My technical internship at JPMorgan Chase as an SDE intern allowed me to refine my skills in a real-world setting, pushing forward my capabilities in software development and engineering solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
