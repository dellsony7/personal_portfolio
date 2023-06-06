import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-300">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Delsony Dissanayaka, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I thrive on the thrill of solving complex problems through the art
              of coding. With a deep passion for web development, my goal is to
              craft exceptional websites that not only enhances lives but also
              propels businesses forward. From individuals and small businesses
              to large enterprises, I am dedicated to creating tailored
              solutions that address unique needs. Imagine having a software
              expert right at your fingertips, ready to turn your ideas into
              reality and revolutionize your digital presence. Let's collaborate
              and bring your vision to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
