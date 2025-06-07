import React, { useEffect } from 'react'
import bg from '../assets/bg.avif'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos'
import Aos from 'aos';


function Contact() {


  useEffect(()=>{
    Aos.init({
      duration:800,
      offset:200,
      delay:100,
      easing:'ease-in-sine'
    })
  },[])

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* 🔳 Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* 🔲 Content over background */}
      <div className="relative z-10 px-6 lg:px-20 py-10 text-white flex flex-col gap-10">

        {/* 🔴 Heading */}
        <h1 className="text-4xl font-bold mt-5">Contact Us</h1>

        {/* 🔴 Info + Form Section */}
        <div className="flex flex-col lg:flex-row gap-10 w-full">

          {/* Info Section */}
          <div className="w-full lg:w-1/2 space-y-4 ">
    
            <h3  className="text-2xl font-semibold flex"> <FaMapMarkerAlt className="text-red-500 m-2" />Address</h3>
            <p>
              123, Business Street,<br />
              Mumbai, Maharashtra, 400001<br />
              India
            </p>

            <h3 className="text-2xl font-semibold flex"> <FaPhoneAlt className='text-red-500 m-2'/> Phone</h3>
            <p>+91 98674 82978</p>
            <p>+91 8346346</p>
            <h3 className="text-2xl font-semibold flex"> <FaEnvelope className='text-red-500 m-2'/> Email</h3>
            <p>info@example.com</p>
          </div>

          {/* Form Section */}
          <div data-aos='fade-in' className="w-full lg:w-1/2 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-black hover:scale-110 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
