import { CButton, CHeader, CNav } from "@coreui/react";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faAnglesDown,
  faArrowCircleRight,
  faBars,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

export default function WebPage() {
  return (
    <>
      {/* header section */}
      <CHeader
        className=" h-auto md:h-[100%] bg-cover text-[#043A53] w-[100vw]"
        style={{ backgroundImage: "url(./assets/BG.png)" }}>
        <CNav
          className="bg-cover fixed top-0 z-20 w-[100vw] px-4 lg:x-14 md:bg-transparent h-16 justify-center items-center flex "
          style={{ backgroundImage: "url(./assets/BG.png)" }}>
          <div className="flex justify-between items-center w-full">
            {/* <img src="./assets/Logo.png" alt="pic" className="w-24 h-4" /> */}
             <h1 className=" text-black font-extrabold display-6 p-2">@Notes_Planner</h1>
            <ul className=" hidden md:flex first-letter:font-semibold">
              <li className="md:mx-2 lg:mx-2 cursor-pointer">Home</li>
              <li className="md:mx-2 lg:mx-2 cursor-pointer">About</li>
              <li className="md:mx-2 lg:mx-2 cursor-pointer">Contact</li>
              <li className="md:mx-2 lg:mx-2 cursor-pointer">Resources</li>
              <li className="md:mx-2 lg:mx-2 cursor-pointer">Services</li>
            </ul>
            <div className="md:hidden text-3xl text-[#043A53] p-3">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="hidden md:flex ">
              <CButton  component={NavLink} to="/login" className="md:px-2 lg:px-4 py-1 bg-slate-200 text-[#12141D] rounded-2xl mr-2">
                Login
              </CButton>
              <CButton  component={NavLink} to="/register" className="md:px-2 lg:px-4 py-1 bg-blue-600 text-[#12141D] rounded-2xl mr-2">
                SingUp
              </CButton>
            </div>
          </div>
        </CNav>
        <div className="flex flex-wrap h-full w-full pt-16">
            <div className="text-centre self-center px-4 w-full lg:h-[230px] md:px-2 lg:px-20 md:text-left md:w-6/12 md:flex lg:flex-col md:justify-between">
             <h3 className="text-3xl md:text-4xl text-black font-bold">
             GET a platform to store your <span className="block text-[#043A53]">NOTES</span>
             </h3> 
             <p className="mt-3 md:mt-0 text-[#404040]">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus molestias dolores id itaque praesentium minus doloremque voluptas consequuntur vel!
             </p>
             <CButton className=" bg-gray-900 text-white md:p-1 lg:p-3 p-3 m-2 rounded-3xl">
              Explore Our Work <FontAwesomeIcon icon={faArrowCircleRight} />
            </CButton>
            </div>
            {/* header image */}
            <div className="w-full md:w-6/12 h-full relative">
                 <img src="./assets/ManMobile.png" alt="man Mobile" className="md:hidden bg-transparent w-full h-full "/>
                 <img src="./assets/ManMobile.png" alt="man Mobile" className="hidden md:inline-block md:bg-transparent md:object-contain md:h-full md:w-full bg-transparent w-full h-full "/>
            </div>
        </div>
      </CHeader>

      {/* advertisement */}
      <div className="h-auto w-full bg-white p-4 m-2 bg-cover">
        <ul className="p-2 m-2 flex flex-wrap  space-y-2 ">
          <li className="mx-9 text-black text-sm italic font-semibold underline">
            Trusted by the best in the world
          </li>
          <li className="mx-9 ">
            <img src="./assets/Amazon.png" alt="logo-pic" />
          </li>
          <li className="mx-9">
            <img src="./assets/Atlassian.png" alt="logo-pic" />
          </li>
          <li className="mx-9">
            <img src="./assets/Canon.png" alt="logo-pic" />
          </li>
          <li className="mx-9">
            <img src="./assets/Google.png" alt="logo-pic" />
          </li>
          <li className="mx-9">
            <img src="./assets/Walmart.png" alt="logo-pic" />
          </li>
        </ul>
      </div>

      {/* video section  */}
      <div className="bg-gradient-to-t from-slate-900 to-slate-800 h-full w-[100vw] ">
        <div className="flex">
          <h1 className="lg:w-1/2 font-bold text-left text-xl text-white m-5 p-2">
            High-Level Sales
            <span className=" text-orange-800"> teams & Professionals </span>
          </h1>
          <h3 className=" text-white lg:w-1/2 p-5 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            veritatis alias delectus quam nesciunt quidem libero dignissimos!
            Facere, rerum aut?
          </h3>
        </div>
        <div className="relative flex justify-center items-center h-full bg-cover bg-no-repeat bg-center text-[#043A53] w-full">
          <img
            src="./assets/teamVideo.png"
            alt="pic"
            className="md:h-full rounded-lg mr-10 ml-10"/>
          <FontAwesomeIcon
            icon={faPlay}
            className="absolute w-20 h-20 text-white"
            style={{ zIndex: 10 }}/>
        </div>
      </div>

      {/* card section */}
      <div className="lg:flex h-auto  bg-yellow-50 justify-around items-center w-[100vw] flex-wrap p-7">
        <div className=" lg:w-1/2 lg:mt-10 mb-10 justify-around items-center lg:text-center font-extrabold">
          <div className="lg:w-1/2">
            <CButton className=" bg-gray-900 text-white md:p-1 lg:p-3 p-2 m-2 rounded-3xl">
              Benificial <FontAwesomeIcon icon={faArrowCircleRight} />
            </CButton>
            <h2 className=" md:text-2xl lg:text-3xl p-4 text-gray-950">
              Beneficial <br /> Elements
            </h2>
            <p className=" text-gray-950 m-2 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              incidunt error?
            </p>
          </div>
        </div>

        <div className=" lg:w-1/2 flex flex-wrap w-full  justify-around Lg:justify-centre items-center">
          <div className=" bg-neutral-300 rounded-lg font-mono text-lg w-48 h-auto p-4 m-1">
            <img src="./assets/card1.png" alt="" className="h-16" />
            <h1 className=" text-blue-900 text-lg font-medium  mb-3">
              Happy Customer
            </h1>
            <p className=" text-sm p-1 font-serif">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              itaque quaerat nisi rerum sint debitis possimus odio blanditiis
              nostrum delectus!
            </p>
          </div>
          <div className=" bg-neutral-300 rounded-lg font-mono text-lg w-48 h-auto p-4 m-1 ">
            <img src="./assets/card2.png" alt="" className="h-16" />
            <h1 className=" text-blue-900 text-lg font-medium  mb-3">
              Happy Customer
            </h1>
            <p className=" text-sm p-1 font-serif">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              itaque quaerat nisi rerum sint debitis possimus odio blanditiis
              nostrum delectus!
            </p>
          </div>
          <div className=" bg-neutral-300 rounded-lg font-mono text-lg w-48 h-auto p-4 m-1 ">
            <img src="./assets/card3.png" alt="" className="h-16" />
            <h1 className=" text-blue-900 text-lg font-medium  mb-3">
              Happy Customer
            </h1>
            <p className=" text-sm p-1 font-serif">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              itaque quaerat nisi rerum sint debitis possimus odio blanditiis
              nostrum delectus!
            </p>
          </div>
        </div>
      </div>

      {/* deal offer */}
      <div className=" bg-slate-900 w-[100vw]">
        <div className=" flex flex-wrap h-auto w-full justify-between items-center">
          <div className=" lg:mt-10 mb-10 justify-start items-center  font-extrabold lg:w-1/2">
            <h2 className=" md:text-2xl lg:text-3xl p-4 text-white">
              Take Your Customer <br /> Service to The Next Level
            </h2>
            <CButton className=" bg-amber-300 text-black md:p-1 lg:p-2 m-2 rounded-lg">
              Get 40 days Free trial{" "}
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </CButton>
            <p className="text-white font-thin m-2"> NO Credit card Required</p>
          </div>
          <div className="justify-between items-center lg:w-1/2">
            <img
              src="./assets/Decorations.png"
              alt="deal"
              className=" h-80 pt-5"
            />
          </div>
        </div>
      </div>

      {/* about section */}
      <div className=" flex flex-wrap justify-center lg:justify-between items-center h-auto w-[100vw] bg-slate-50 ">
        <div className="top-2 p-3 lg:w-1/4 m-5">
          <img src="./assets/Logo.png" alt="logo" className="w-24 h-4 m-4" />
          <div className="flex space-x-4 text-2xl">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>

        <h4 className="p-3 justify-center items-center text-black  text-justify lg:w-1/3 font-mono underline m-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero odit,
          porro vel quaerat nisi aliquid dolores adipisci nihil, similique
          cupiditate, impedit nemo! Fugiat alias, dignissimos doloribus quae
          autem quibusdam fugit.
        </h4>

        <ul className="flex lg:flex-col space-x-5 text-[#043A53] text-justify lg:w-1/5 justify-center p-5 lg:m-5 m-6">
          <li className="md:mx-2 lg:mx-2 cursor-pointer">Home</li>
          <li className="md:mx-2 lg:mx-2 cursor-pointer">About</li>
          <li className="md:mx-2 lg:mx-2 cursor-pointer">Contact</li>
          <li className="md:mx-2 lg:mx-2 cursor-pointer">Resources</li>
          <li className="md:mx-2 lg:mx-2 cursor-pointer">Services</li>
        </ul>

      </div>

      {/* footer Section */}
      <div
        className="flex flex-wrap w-[100vw] justify-between items-center h-auto bg-cover text-[#043A53] font-serif "
        style={{ backgroundImage: "url(./assets/BG.png)" }}>
        <div className=" text-neutral-800">@2022-2023 Trustco</div>
        <div className="flex">
          <ul className=" hidden md:flex first-letter:font-semibold">
            <li className="md:mx-2 lg:mx-2 cursor-pointer">Term of Services</li>
            <li className="md:mx-2 lg:mx-2 cursor-pointer">Privacy Policy</li>
            <li className="md:mx-2 lg:mx-2 cursor-pointer">Help</li>
          </ul>
        </div>
        <div className="text-lg p-4 m-2">
          Language <FontAwesomeIcon icon={faAnglesDown} />
        </div>
      </div>
    </>
  );
}
