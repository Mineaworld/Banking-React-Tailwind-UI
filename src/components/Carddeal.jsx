import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const Carddeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis to see integer faucibus. Aliquet quis pet
        eget mauris tortor.ç Pet ultrices ac, ametau.
      </p>
      <Button />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Carddeal;
