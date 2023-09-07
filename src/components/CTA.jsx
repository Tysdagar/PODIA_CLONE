import React from "react";
import { styles } from "../styles";

const CTA = () => {
  return (
    <section className="w-full bg-[#201445] md:p-[3.5555555556rem] sm:p-[30px] p-[20px] rounded-xl flex flex-col items-center text-center">
      <h3 className={`${styles.titleMD} mb-3 text-white`}>
        Get your free Podia account
      </h3>
      <p className={`${styles.textMD} mb-5 text-gray-300 font-medium`}>
        Join the 150,000+ creators who use Podia to create websites, sell
        digital products, and build online communities.
      </p>
      <button
        className={`${styles.buttonStyle} bg-[#9484c6] hover:bg-[#4b2aad]`}
      >
        Sign up free
      </button>
    </section>
  );
};

export default CTA;
