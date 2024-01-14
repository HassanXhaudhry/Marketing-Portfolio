import React from "react";
import pngegg3 from "../assets/pngegg3.png";
import people from  "/images/people.png"
import members from "/images/members.png"
import hand from "/images/hand.png"
import card from "/images/card.png" 
const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="md:w-96" src={pngegg3} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-xs pt-5 text-neutralDGrey mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-silverPrimary py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8" >
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="md:w-3/4 text-SM pt-3 text-neutralGrey mb-8">
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className="mx-auto text-center md:w-1/2 max-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
    <div className="space-y-8">
        <div className="flex items-center gap-4">
            <img className="w-10" src={people} alt="" />
            <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,341
                </h4>
                <p>Members</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <img className="w-12" src={members} alt="" />
            <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                    12,251
                </h4>
                <p>Clients</p>
            </div>
        </div>
    </div>
    <div className="space-y-8">
        <div className="flex items-center gap-4">
            <img className="w-10" src={hand} alt="" />
            <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,243
                </h4>
                <p>Event Booking</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <img className="w-10" src={card} alt="" />
            <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1,445,641
                </h4>
                <p>Payment</p>
            </div>
        </div>
    </div>
</div>

          
        </div>
      </div>
    </div>
  );
};

export default About;
