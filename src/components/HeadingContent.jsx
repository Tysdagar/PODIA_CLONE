import React from "react";
import { styles } from "../styles";

const HeadingContent = ({ title, description }) => {
  return (
    <section className="text-center max-w-[56.8888888889rem] mb-[60px]">
      <h3 className={`${styles.titleLG} mb-5`}>{title}</h3>
      <p className={`${styles.textMD}`}>{description}</p>
    </section>
  );
};

export default HeadingContent;
