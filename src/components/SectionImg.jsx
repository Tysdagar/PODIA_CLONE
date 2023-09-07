import React from "react";
import { styles } from "../styles";

const SectionImg = ({ label, title, description, linkTitle, imgSection }) => {
  return (
    <section className="w-full flex items-center justify-between gap-3 mb-[8rem] sm:flex-nowrap flex-wrap-reverse">
      <article className="sm:w-[47%] w-full flex flex-col justify-center h-full">
        <p className={`${styles.titleXs}`}>{label}</p>
        <h1 className={`${styles.titleMD}`}>{title}</h1>
        <p className={`${styles.textSM} mt-3`}>{description}</p>
        <a
          href=""
          className="text-primary font-bold md:text-[21px] text-[17px] mt-6"
        >
          {linkTitle}
        </a>
      </article>
      <div className="sm:w-[50%] w-full sm:m-0 mb-4">
        <img
          src={imgSection}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default SectionImg;
