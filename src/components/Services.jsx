import React from "react";
import img1 from "../../images/anydesk.png";
import img2 from "../../images/deloitte.png";
import img3 from "../../images/ebay.png";
import img4 from "../../images/ibm.png";
import img5 from "../../images/viber.png";
import img6 from "../../images/nestle.png";
import img7 from "../../images/tietoevry.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Orgnisations",
      description:
        "Our membership managment software provides full automation of membership renewal and payment",
      image: "/src/assets/pngegg1.png",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership managment software provides full automation of membership renewal and payment",
      image: "/src/assets/pngegg.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership managment software provides full automation of membership renewal and payment",
      image: "/src/assets/pngegg2.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-silverPrimary" id="services">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Communities
        </h2>
        <p className="text-sm text-neutralDGrey py-5">
          We have been working with some Fortune 500+ communities
        </p>

        <div className="my-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-20">
          <img className="sm:w-24 md:w-24 lg:w-24 " src={img1} alt="" />
          <img className="sm:w-24 md:w-24 lg:w-24" src={img2} alt="" />
          <img className="sm:w-24 md:w-24 lg:w-24" src={img3} alt="" />
          <img className="sm:w-24 md:w-24 lg:w-24" src={img4} alt="" />
          <img className="sm:w-24 md:w-24 lg:w-24" src={img5} alt="" />
          <img className="sm:w-24 md:w-24 lg:w-24" src={img6} alt="" />
          <img className="sm:w-24 md:w-24 lg:w-24" src={img7} alt="" />
        </div>
      </div>
      <div className="mt-20 md:w1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Manage your entire community in a sigle system
        </h2>
        <p className="text-lg text-neutralDGrey py-5">
          Who is RushHour suitable for?
        </p>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((services) => (
          <div
            key={services.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-16 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={services.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {services.title}
              </h4>
              <p className="text-sm text-neutralGrey">{services.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
