import React from "react";
import { StarIcon } from "../assets/Icons";
import { styles } from "../styles";

const Testimonial = ({ description, author, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <i key={i} className="fill-orange-400 w-[26px] h-auto">
          <StarIcon />
        </i>
      );
    }
    return stars;
  };

  return (
    <blockquote className="mb-[8rem] max-w-[53.3333333333rem] h-full text-center flex flex-col items-center">
      <div className="flex mb-3 sm:w-[27%] w-[70%] justify-evenly ">
        {renderStars()} {/* Renderizar estrellas */}
      </div>
      <p className={`${styles.textMD} text-black mb-5 `}>{description}</p>
      <cite className="text-gray-500 text-[19px] not-italic">— {author}</cite>
    </blockquote>
  );
};

export default Testimonial;
