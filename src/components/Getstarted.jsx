// import { arrowUp } from "../assets";
// import styles from "../styles";

// const Getstarted = () => {
//   return (
//     <div
//       className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
//     >
//       <div
//         className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
//       >
//         <div className={`${styles.flexStart} flex-row`}>
//           <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
//             <span className="text-gradient">Get</span>
//           </p>
//           <img
//             src={arrowUp}
//             alt="arrow-up"
//             className="w-[23px] h-[23px] object-contain"
//           />
//         </div>

//         <p className="font-poppins font-medium text-[18px] leading-[24px]">
//           <span className="text-gradient">Started</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Getstarted;
// Getstarted.jsx
import { arrowUp } from "../assets";
import styles from "../styles";

const Getstarted = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.buttonContainer}`}>
      <div className={`${styles.flexCenter} ${styles.buttonInner}`}>
        <div className={`${styles.flexStart} flex-row group`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className={styles.textGradient}>Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className={`${styles.arrowUp}`} />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[24px]">
          <span className={styles.textGradient}>Started</span>
        </p>
      </div>
    </div>
  );
};

export default Getstarted;
