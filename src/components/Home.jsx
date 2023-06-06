import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";


const Home = () => {
  return (
    <div>
      <div name="home" className="w-full h-screen bg-[#010201]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          {/* <p className="text-green-300">Hi, It's Me</p> */}
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
            DELSONY DISSANAYAKA
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#999999]">
            Imaginer Beyong the Visibility.
          </h2>
          <p className="text-[#999999] py-4 max-w-[700px]">
            I orchestrate the symphony of technology, weaving together front-end
            finesse and back-end brilliance. As a full-stack developer, I am
            dedicated to crafting extraordinary digital experiences that
            captivate and inspire. From envisioning stunning designs to
            implementing seamless functionality, I am in my element. Currently,
            my focus lies in the realm of responsive full-stack web
            applications, where I bring dreams to life with code. Together,
            let's create a digital masterpiece that leaves a lasting impression.
          </p>
          <div>
            <button className="border-green-300 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-300 hover:border-green-300">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
