// import { apple, bill, google } from "../assets";
// import styles, { layout } from "../styles";

// const Billing = () => (
//   <section id="product" className={layout.sectionReverse}>
//     <div className={layout.sectionImgReverse}>
//       <img
//         src={bill}
//         alt="billing"
//         className="w-[100%] h-[100%] relative z-[5]"
//       />
//       <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
//       <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
//     </div>
//     <div className={layout.sectionInfo}>
//       <h2 className={styles.heading2}>
//         Easily control your <br className="sm:block hidden" /> billing &
//         invoicing
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         In fact, it is the product, but also the mass. Mauritian football
//         coaching method neither bronze nor The whole street is full of medical
//         supplies invest
//       </p>
//       <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
//         <img
//           src={apple}
//           alt="google_play"
//           className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
//         />
//         <img
//           src={google}
//           alt="google_play"
//           className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
//         />
//       </div>
//     </div>
//   </section>
// );

// export default Billing;

import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section
    id="product"
    className={`${layout.sectionReverse} bg-dark text-white py-12`}
  >
    <div className={`${layout.sectionImgReverse} relative`}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] rounded-lg shadow-lg"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>
    <div className={`${layout.sectionInfo} flex flex-col justify-center`}>
      <h2 className={`${styles.heading2} text-3xl sm:text-4xl`}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-dimWhite`}>
        In fact, it is the product, but also the mass. Mauritian football
        coaching method neither bronze nor The whole street is full of medical
        supplies invest.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-5">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128.86px] h-[42.05px] object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  </section>
);

export default Billing;
