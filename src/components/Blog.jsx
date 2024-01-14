import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import laptop1 from "../../images/laptop1.jpg"
import laptop2 from "../../images/laptop2.jpg"
import laptop3 from "../../images/laptop3.jpg"



const Blog = () => {
    const blogs =[
        {id: 1, title: "Creating Streamline Safeguarding Processes with OneRen", image: laptop1},
        {id: 1, title: "What are your safeguarding responsibilities and how can you manage them?", image: laptop2},
        {id: 1, title: "Revamping the Membership Model with Triahlon Australia", image: laptop3},
    ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="faq">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">Caring is the new marketing</h2>
        <p className="text-sm text-neutralSilver mb-8 md:w-3/4 mx-auto">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
      {blogs.map(blog => <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
        <img className="rounded-md hover:scale-95 translate-all duration-300" src={blog.image} alt="" />
        <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12" 
        ><h3 className="mb-3 text-neutralSilver font-semibold ">{blog.title}</h3>
        <div className="flex items-center justify-center gap-8">
                  <a
                    href=""
                    className="font-bold text-brandPrimary hover:text-neutral-700"
                  >
                  <div className="flex items-center">
                  <p className="mr-2">Meet all customers</p>
                  <FaArrowRightLong className="text-xl" />
                </div>                
                  </a>
                </div>
        </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
