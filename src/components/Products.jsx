import React from "react";
import login from "../assets/login.png";
import productslogo from '../assets/productslogo.png';
import { FaArrowRightLong } from "react-icons/fa6";

const Products = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 " id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="md:w-20 sm:w-24" src={login} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-xs pt-5 text-neutralDGrey mb-8">
              For a more intimate and informative experience we invite you to
              partake in our Cork Torque Tour. After being greeted with a glass
              of our Paulina Sparkling wine, climb aboard the Malbec Express,
              our eco-friendly tour bus, for a one-of-a-kind tour of our
              vineyard! Learn about our unique farming methods and the different
              varietals that we produce, view our winemaking facilities, and
              visit the MotoDoffo Vintage Motorcycle Collection. Tours can be
              taken with or without a wine tasting.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-silverPrimary py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
          <img src={productslogo} alt="" />
          </div>

          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 mb-8 leading-7">
                Se contentus est sapiens. Hoc, mi Lucili, plerique perperam
                interpretantur; sapientem undique submovent et intra cutem suam
                cogunt. Distinguendum autem est, quid et quatenus vox ista
                promittat; se contentus est sapiens ad beate vivendum, non ad
                vivendum. Ad hoc enim multis illi rebus opus est, ad illud
                tantum animo sano et erecto et despiciente fortunam.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-neutralDGrey mb-8">British Dragon Boat Association</p>
              <div>
              <div className="flex items-center gap-8 flex-wrap pb-5">
              <img src="src/assets/product1.png" alt="" className="w-10 h-auto" />
              <img src="src/assets/product2.png" alt="" className="w-10 h-auto" />
              <img src="src/assets/product3.png" alt="" className="w-10 h-auto" />
              <img src="src/assets/product4.png" alt="" className="w-10 h-auto" />
              <img src="src/assets/product5.png" alt="" className="w-10 h-auto" />
              <img src="src/assets/product6.png" alt="" className="w-10 h-auto" />
            </div>
            
                <div className="flex items-center gap-8">
                  <a
                    href=""
                    className="font-bold text-brandPrimary hover:text-neutral-700"
                  >
                  <div className="flex items-center">
                  <p className="mr-2">Meet all customers</p>
                  <FaArrowRightLong className="text-xl" />
                </div>                
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      className="inline-block-ml-2"
                    >
                      <path
                        d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                        stroke="#4CF4F"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
