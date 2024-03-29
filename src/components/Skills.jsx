import React from "react"

import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import SASS from "../assets/sass.png"
import JavaScript from "../assets/javascript.png"
import ReactImg from "../assets/react.png"
import Node from "../assets/node.png"
import Wordpress from "../assets/Wordpress_Blue_logo.png"
import GitHub from "../assets/github.png"
// import Tailwind from "../assets/tailwind.png"
import Python from "../assets/python.png"
import Bitbucket from "../assets/bitbucket.png"
// import Illuustrator from "../assets/illustrator.png"
// import Photoshop from "../assets/photoshop.png"
import Nest from "../assets/nestJS.png"
import C from "../assets/c-logo-vector.png"
import Mongo from "../assets/mongo.png"
import Express from "../assets/express.png"

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#010201] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-green-300 ">
            Skills
          </p>
          <p className="py-4">I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={Node} alt="HTML icon" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={Nest} alt="HTML icon" />
            <p className="my-4">NestJS</p>
          </div>

          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={Mongo} alt="HTML icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Express} alt="HTML icon" />
            <p className="my-4">ExpressJS</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={SASS} alt="HTML icon" />
            <p className="my-4">SASS</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={Bitbucket}
              alt="HTML icon"
            />
            <p className="my-4">Bitbucket</p>
          </div>
          {/* <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div> */}
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={Wordpress}
              alt="HTML icon"
            />
            <p className="my-4">WordPress</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={Python} alt="HTML icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={C} alt="HTML icon" />
            <p className="my-4">C++</p>
          </div>
          {/* <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Illuustrator} alt="HTML icon" />
            <p className="my-4">Illuustrator</p>
          </div>
          <div className="shadow-md shadow-green-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Photoshop} alt="HTML icon" />
            <p className="my-4">Photoshop</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Skills
