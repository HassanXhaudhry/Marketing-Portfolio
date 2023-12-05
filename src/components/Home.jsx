import React from "react";
import { Carousel } from "flowbite-react";
import slider1 from "../../images/Community1.png";
import slider2 from "../../images/Community2.png";
import slider3 from "../../images/Community3.png";

const Home = () => {
  return (
    <div id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto sm:pl-24 ">
          <div className="my-28 md:my-8  flex flex-col md:flex-row-reverse items-center justify-between">
            <div className=" max-w-md pr-20">
              <img className="w-64 max-w-full h-auto pt-5" src={slider1} alt="" />
            </div>
            <div className="md:w-1/2 px-10 pl-30">
              <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralDGrey textbase mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="h-auto max-w-md pr-20">
              <img className="w-64 max-w-full h-auto pt-15 sm:pl-5" src={slider2} alt="" />
            </div>
            <div className="md:w-1/2 px-10 pl-30">
            <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
              Learn and Earn{" "}
              <span className="text-brandPrimary leading-snug">
                in 4 months
              </span>
            </h1>
            <p className="text-neutralDGrey textbase mb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="btn-primary">Register</button>
          </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="h-auto max-w-md pr-20">
              <img className="w-64 max-w-full h-auto pt-5" src={slider3} alt="" />
            </div>
            <div className="md:w-1/2 px-10 pl-30">
            <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
              Grow your community{" "}
              <span className="text-brandPrimary leading-snug">
                by Social Media
              </span>
            </h1>
            <p className="text-neutralDGrey textbase mb-8 ">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="btn-primary">Register</button>
          </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
