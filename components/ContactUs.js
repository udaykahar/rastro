import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useForm, ValidationError } from "@formspree/react";
import call1 from "../assets/images/svg/call1.svg";
import { motion } from "framer-motion";


const containerStyle = {
  width: "100%",
  height: "350px",
};

const center = {
  lat: 21.053576,
  lng: 79.066198,
};

const ContactUs = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [state, handleSubmit] = useForm("maykplzw");

  
  const [data, setData] = React.useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const notifer = () => {
    if (state.succeeded) {
      alert("Message sent successfully🚀");
    }else{
      alert("Message not sent😢, cannot leave any field blank.");
    }
  };


  return (
    <motion.div 
    initial={{ opacity:0}}
        animate={{ opacity:1}}
        transition={{ duration: 0.5, type: 'tween' }} 
    >
      <section className="text-gray-600 body-font relative ">
        <div className="flex max-w-[1240px] justify-between mx-auto py-16 flex-wrap ">
          <div className="z-[0] text-white  text-center md:text-justify">
            <h1 className="text-4xl serif ">Contact Information</h1>
            <hr className=" mx-auto xl:mx-0 w-24 text-center my-6 border-[#ff7010] border-t-4 rounded-r-full" />
            <p className="px-4 md:px-0">
              We would love to hear from you! <br />
              Please contact us for any questions or comments.
            </p>
            <div className="as_contact_expert mt-8 mx-6 md:mx-0">
              <span className="as_icon">
                <img src={call1} alt="call-icon" />
              </span>
              <a href="tel:+918839274398">
                <div>
                  <h5 className="as_white">Contact Us for Astrology</h5>
                  <h1 className="as_orange">+ (91) 8839274398</h1>
                </div>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto md:mx-0">
            <div className=" max-w-[500px] md:w-[500px] mx-auto flex  text-white ">
              <div className=" bg-[#17384e] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0  z-[0]  shadow-md ">
                <h2 className="pb-4 serif text-3xl">Have A Question?</h2>
                <div className="static md:relative mb-4">
                  <label for="email" className="leading-7 text-sm ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    // required
                    className="w-full bg-[#17384e] rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                </div>
                <div className="static md:relative mb-4">
                  <label for="message" className="leading-7 text-sm">
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    className="w-full bg-[#17384e] rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                      <ValidationError 

        prefix="Message" 
        field="message"
        // required

        errors={state.errors}

      />
                </div>
                <button onClick={ (email.length>5 && message.length > 5) ? handleSubmit : notifer} type="submit" disabled={state.submitting} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-gray-300  z-[-1]  ">
          <LoadScript googleMapsApiKey="AIzaSyATgxd_pN8VBTJ_3f7wn-5le3Zqz9sSCKU">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactUs;
