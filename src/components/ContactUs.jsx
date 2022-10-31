import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  // max width of the map
  width: "100%",
  height: "350px",
  // width: "1200px",
};

const center = {
  lat: 21.053576,
  lng: 79.066198,
};

const ContactUs = () => {
  return (
    <div>
 
      <section className="text-gray-600 body-font relative">
        <div className=" absolute right-0 left-0 top-0 text-white">
        <h1 className="text-4xl py-8 ">Contact Information</h1>
      <p>
      Consectetur adipiscing elit sed do eiusmod tr incididunt
ut labore et dolore magna aliquauis ipsum.
      </p> <p>
      Consectetur adipiscing elit sed do eiusmod tr incididunt
ut labore et dolore magna aliquauis ipsum.
      </p>
        </div>
        <div className="absolute bottom-0 right-0 left-0 bg-gray-300">
          <LoadScript googleMapsApiKey="AIzaSyATgxd_pN8VBTJ_3f7wn-5le3Zqz9sSCKU">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default ContactUs;
