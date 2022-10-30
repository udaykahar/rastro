import React from "react";
import service1 from "../assets/images/svg/service1.svg";
import service2 from "../assets/images/svg/service2.svg";
import service3 from "../assets/images/svg/service3.svg";
import service6 from "../assets/images/svg/service6.svg";
import trendingup from "../assets/images/svg/trendingup.svg";
import health_and_safety from '../assets/images/svg/health_and_safety.svg';
import query_stats from '../assets/images/svg/query_stats.svg';
import travel_explore from '../assets/images/svg/travel_explore.svg';

const OurServices = () => {
  return (
    <>
        <div className=" bg-[#031d2e] text-white w-full py-12 md:py-16  flex flex-col text-center flex-wrap mx-auto px-2 md:px-10 xl:px-0  ">
          <div>
            <h1 className="md:text-4xl sm:text-4xl text-4xl font-bold md:pb-2 font-thin font-normal serif">
              Our Services
            </h1>
            <hr className="w-24 text-center my-6 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
            <p className="font-bold text-gray-400">
              We offer a range of OurServices, from personalised readings to
              remedies, <br />
              to help people connect with their true purpose in life.
            </p>
          </div>
          <div className="flex justify-center gap-2 pt-6 flex-wrap md:pt-12 gap-6  ">
            <div class="as_service_box text-center w-[296px] flex flex-col justify-center items-center p-6">
              <span class="as_icon flex-shrink-0">
                <img src={service1} alt="Property icon" />
              </span>
              <h4 class="as_subheading serif text-2xl pt-6">
                Property Purchase and selling
              </h4>
              <hr className="w-24 text-center my-2 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
              <p>
                Find the finest possible dates to sell and buy the right thing.
              </p>
            </div>
            <div class="as_service_box text-center w-[296px] flex flex-col justify-center items-center p-6">
              <span class="as_icon flex-shrink-0">
                <img src={service2} alt="Child icon" />
              </span>
              <h4 class="as_subheading serif text-2xl pt-6">
              Child Related Problems
              </h4>
              <hr className="w-24 text-center my-2 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
              <p>
              ​Figure out the nature of the parent-child bond..</p>
            </div>
            <div class="as_service_box text-center w-[296px] flex flex-col justify-center items-center p-6">
              <span class="as_icon flex-shrink-0">
                <img src={service3} alt="Relationship icon" />
              </span>
              <h4 class="as_subheading serif text-2xl pt-6">
              Relationship Counselling
              </h4>
              <hr className="w-24 text-center my-2 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
              <p>
              We can help you build a stronger, happier relationship.</p>
            </div>
            <div class="as_service_box text-center w-[296px] flex flex-col justify-center items-center p-6">
              <span class="as_icon flex-shrink-0">
                <img src={service6} alt="Kundli icon" />
              </span>
              <h4 class="as_subheading serif text-2xl pt-6">
              Kundli Milan
              </h4>
              <hr className="w-24 text-center my-2 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
              <p>
              ​​Find perfect blend with an unknown soul in an known way.</p>
            </div>
            <div class="as_service_box text-center w-[296px] flex flex-col justify-center items-center p-6">
              <span class="as_icon flex-shrink-0">
                <img src={trendingup} alt="Career icon" />
              </span>
              <h4 class="as_subheading serif text-2xl pt-6">
              Career Counseling
              </h4>
              <hr className="w-24 text-center my-2 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
              <p>
              Find your path→Find your purpose→Find your passion→Start your journey.</p>
            </div>
            <div class="as_service_box text-center w-[296px] flex flex-col justify-center items-center p-6">
              <span class="as_icon flex-shrink-0">
                <img src={health_and_safety} alt="Health icon" />
              </span>
              <h4 class="as_subheading serif text-2xl pt-6">
              Health Related Issues
              </h4>
              <hr className="w-24 text-center my-2 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
              <p>
              ​Discover everything about your health in advance to avoid future health crises.</p>
            </div>
            <div class="as_service_box text-center w-[296px] flex flex-col justify-center items-center p-6">
              <span class="as_icon flex-shrink-0">
                <img src={query_stats} alt="Share Market icon" />
              </span>
              <h4 class="as_subheading serif text-2xl pt-6">
              Share Market Analysis
              </h4>
              <hr className="w-24 text-center my-2 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
              <p>
              ​​Analyze the sectors that will produce the maximum rewards with reference to planets.</p>
            </div>
            <div class="as_service_box text-center w-[296px] flex flex-col justify-center items-center p-6">
              <span class="as_icon flex-shrink-0">
                <img src={travel_explore} alt="Travel icon" />
              </span>
              <h4 class="as_subheading serif text-2xl pt-6">
              Foreign Travel & Settlement
              </h4>
              <hr className="w-24 text-center my-2 mx-auto border-[#ff7010] border-t-4 rounded-r-full" />
              <p>
              Discover about the fortunate timeline for your foreign journey.</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default OurServices;
