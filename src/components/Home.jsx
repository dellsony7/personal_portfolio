import React from "react"
import { Link } from "react-scroll"
import { HiArrowNarrowRight } from "react-icons/hi"
import Dellsony from "../assets/dellsony.jpeg"
import { useMediaQuery } from "react-responsive"
// import Sololearn from "../assets/sololearn.svg"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
// import { BsFillPersonLinesFill } from "react-icons/bs"

const Profiles = () => {
  return (
    <div className="items-center flex">
      <ul className="flex">
        <li className=" w-[50px] h-[50px] flex items-center bg-blue-600">
          <a
            className="flex justify-between items-center w-full"
            href="https://www.linkedin.com/in/dellsony-dissanayaka/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[50px] h-[50px] flex items-center bg-[#333333]">
          <a
            className="flex justify-between items-center w-full"
            href="https://github.com/dellsony7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>

        <li className="w-[50px] h-[50px] flex items-center bg-[#6fc2b0]">
          <a
            className="flex justify-between items-center w-full"
            href="mailto:eng.dellsony@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineMail size={30} />
          </a>
        </li>
        {/* <li className="w-[50px] h-[50px] flex items-center bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </li> */}
      </ul>
    </div>
  )
}

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  return (
    <div>
      <section id="home" className="bg-[#010201]">
        <div className=" w-full h-screen container mx-auto flex px-10 py-20 md:flex-row flex-col items-center bg-[#010201] text-gray-300">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" py-10 text-4xl sm:text-7xl font-bold text-[#ffffff]">
              DELSONY DISSANAYAKA
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#999999]">
              Imaginer Beyond the Visibility.
            </h2>
            <p className="text-[#999999] py-4 max-w-[700px]">
              I orchestrate the symphony of technology, weaving together
              front-end finesse and back-end brilliance. As a full-stack
              developer, I am dedicated to crafting extraordinary digital
              experiences that captivate and inspire. From envisioning stunning
              designs to implementing seamless functionality, I am in my
              element. Currently, my focus lies in the realm of responsive
              full-stack web applications, where I bring dreams to life with
              code. Together, let's create a digital masterpiece that leaves a
              lasting impression.
            </p>
            <div>
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this value to fit your needs
                duration={1000}
              >
                <button className="border-[#6fc2b0] text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6fc2b0] hover:border-[#6fc2b0]">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div>{isMobile && <Profiles />}</div>

          {!isMobile && (
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={Dellsony}
              />
            </div>
          )}
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Dellsony}
            />
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default Home
