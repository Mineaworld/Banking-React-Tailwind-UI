import styles from "../styles";
import { discount, robot } from "../assets";
import Getstarted from "./Getstarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[25px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white ">20%</span> Discount For{" "}
          <span className="text-white ">1 Month</span> Account
        </p>
      </div>
      // Add a hover effect over the Get Started
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          THE NEXT <br className="sm:block hidden" />{" "}
          <span className="text-gradient">GENERATION</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <Getstarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[65px] text-[52px] text-white w-full ss:leading-[100px] leading-[75px]">
        {" "}
        PAYENT METHOD.
      </h1>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing-robot"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z[0] w-[40%] h-[35%] top-0 blue__gradient" />
      <div className="absolute rounded-full z[1] w-[80%] h-[80%] bottom-40 white__gradient" />
      <div className="absolute z[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter} `}>
      <Getstarted />
    </div>
  </section>
);

export default Hero;
