import React from "react";
import { HeroImg } from "../assets";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-between gap-3 my-[8rem] sm:flex-nowrap flex-wrap-reverse">
      <article className="sm:w-[47%] w-full">
        <p className={`${styles.titleXs}`}>DIGITAL PRODUCTS</p>
        <h1 className={`${styles.titleXL}`}>
          Sell online courses, coaching sessions, webinars, workshops, ebooks,
          and anything you can think of on Podia
        </h1>
        <p className={`${styles.textMD} mt-3`}>
          Get everything you need in one place that you own. Podia takes care of
          hosting products, taking payments, and getting products to your
          customers. And you always control your own work.
        </p>
        <button className={`${styles.buttonStyle} mt-5`}>
          Get your free account
        </button>
      </article>
      <div className="sm:w-[47%] w-full sm:m-0 mb-4">
        <img src={HeroImg} alt="" className="w-full h-auto rounded-lg" />
      </div>
    </section>
  );
};

export default Hero;
