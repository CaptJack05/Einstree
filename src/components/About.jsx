import React from 'react'
import "../index.css"
import hero from "../Video/hero.png"


export default function About() {
  return (
    //   <div className="py-16 bg-white">
    //       <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    //           <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
    //               <div className="md:5/12 lg:w-5/12">
    //                   <img
    //                       src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
    //                       alt="image"
    //                   />
    //               </div>
    //               <div className="md:7/12 lg:w-6/12">
    //                   <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
    //                       React development is carried out by passionate developers
    //                   </h2>
    //                   <p className="mt-6 text-gray-600">
    //                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
    //                       accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
    //                       aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
    //                   </p>
    //                   <p className="mt-4 text-gray-600">
    //                       Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
    //                       Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
    //                   </p>
    //               </div>
    //           </div>
    //       </div>
    //   </div>



    // <div className = "h-4/5 w-4/5 absolute left-36 top-32  z-10">
    //     <div className="py-16 ">
    //       <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    //           <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
    //               <div className="md:5/12 lg:w-5/12">
    //                    <img
    //                       className="object-cover w-full h-96 z-10 rounded-md"
    //                       src="Apj.webp"
    //                       alt="image"
    //                   />
    //               </div>
    //               <div className="md:7/12 lg:w-6/12">
    //                   <h2 className="text-2xl text-white font-bold md:text-4xl">
    //                       React development is carried out by passionate developers
    //                   </h2>
    //                   <p className="mt-6 text-white">
    //                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
    //                       accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
    //                       aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
    //                   </p>
    //                   <p className="mt-4 text-white">
    //                       Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
    //                       Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
    //                   </p>
    //               </div>
    //           </div>
    //       </div>
    //   </div>
    // </div>

    <div className='h-[100%]   w-[100%] flex flex-col  gap-[2vh]    '>
      

      <div className='text-[7vh]  font-bold  text-orange-300 text-center shadow-sm'>
        About us
      </div>
      <div class="text-[3vw] font-semibold ml-5 mt-5"><h4>Who We Are</h4></div>
      <div class="mt-2 ml-5 mr-5 font-medium text-[2vw]">
        <p>Einstree Educational Services Pvt. Ltd – We are a team of
          passionate educators and industry professionals dedicated
          to empowering the next generation. We believe in the
          power of experiential learning to ignite curiosity, foster
          innovation, and inspire lifelong learning. Our goal is to make
          a bridge the gap between education and the real world,
          providing students with the knowledge and skills they need
          to thrive in an ever-evolving society.</p>
      </div>
      <div className=" bg-[#E0F7FF]  text-center flex justify-center rounded-lg">
        <img src={hero} className='h-[50vh] w-[]' />
      </div>

    </div>


  );
}