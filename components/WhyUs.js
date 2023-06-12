import { useRef, React } from "react";
import shape from "../public/images/svg/shape.svg";
import { animate, motion } from "framer-motion";

const WhyUs = () => {
  const yearsCount = useRef(null);

  const animationYearsCount = () => {
    const count = +yearsCount.current.innerText;
    animate(0, 15, {
      duration: 1,
      onUpdate: (v) => {
        yearsCount.current.innerText = Math.floor(v);
      },
    });
  };

  const SuccessCount = useRef(null);

  const animationSuccessCount = () => {
    const count = +SuccessCount.current.innerText;
    animate(0, 80, {
      duration: 1,
      onUpdate: (v) => {
        SuccessCount.current.innerText = Math.floor(v);
      },
    });
  };

  const horoscopeCount = useRef(null);

  const animationHoroscopeCount = () => {
    const count = +horoscopeCount.current.innerText;
    animate(0, 800, {
      duration: 1,
      onUpdate: (v) => {
        horoscopeCount.current.innerText = Math.floor(v);
      },
    });
  };

  const clientCount = useRef(null);

  const animationClientCount = () => {
    const count = +clientCount.current.innerText;
    animate(0, 1500, {
      duration: 1,
      onUpdate: (v) => {
        clientCount.current.innerText = Math.floor(v);
      },
    });
  };

  return (
    <>
      <div className="max-w-[1240px] bg-[#031d2e] text-white grid grid-cols-12 justify-self-end py-12 md:py-16 mx-auto px-2 md:px-10 xl:px-0 ">
        <div className="pr-0 lg:pr-[46px] col-span-full md:col-span-4">
          <h1 className="text-center xl:text-justify md:text-4xl sm:text-4xl text-4xl font-bold md:py-2 font-thin font-normal serif">
            Why Choose Us?
          </h1>
          <hr className=" mx-auto xl:mx-0 w-24 text-center my-6 border-[#ff7010] border-t-4 rounded-r-full" />
          <p className="font-bold text-gray-400 text-center md:text-justify">
            Our astrological advice are based on the ancient system of Vedic
            astrology, which is the most authentic, time-tested, and trustworthy
            astrological system in the world.
          </p>
        </div>
        <div className="inline-grid grid-cols-12 col-span-full md:col-span-8 gap-2 pt-8 md:pt-0">
          <div className=" as_whychoose_box text-center col-span-6 md:col-span-3">
            <span className="as_number">
              <span>
              <motion.span ref={clientCount} whileInView={animationClientCount}>
                  1500
                </motion.span>
                +
              </span>
              <img src={shape} alt="" />
            </span>
            <h4>
              Trusted by <br /> thousand clients
            </h4>
          </div>
          <div className=" as_whychoose_box text-center col-span-6 md:col-span-3">
            <span className="as_number">
              <span>
              <motion.span ref={horoscopeCount} whileInView={animationHoroscopeCount}>
                  800
                </motion.span>
                +
              </span>
              <img src={shape} alt="" />
            </span>
            <h4>Types of horoscopes</h4>
          </div>
          <div className=" as_whychoose_box text-center col-span-6 md:col-span-3">
            <span className="as_number">
              <span>
                <motion.span ref={SuccessCount} whileInView={animationSuccessCount}>
                  80
                </motion.span>
                %
              </span>
              <img src={shape} alt="" />
            </span>
            <h4>Success rate</h4>
          </div>

          <div className=" as_whychoose_box text-center col-span-6 md:col-span-3">
            <span className="as_number">
              <span>
                <motion.span ref={yearsCount} whileInView={animationYearsCount}>
                  15
                </motion.span>
                +
              </span>
              <img src={shape} alt="" />
            </span>
            <h4>Year experience</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
