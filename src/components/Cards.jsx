import React from "react";
import { CardsInfo } from "./constants";
import { ShoppingCart, OpenDoor, Cloud } from "../assets/Icons";
import { styles } from "../styles";

const Cards = () => {
  const iconsForCards = {
    shoppingCart: <ShoppingCart />,
    openDoor: <OpenDoor />,
    cloud: <Cloud />,
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full place-items-center md:mb-0 mb-[8rem]">
      {CardsInfo(iconsForCards).map((card) => {
        return (
          <article
            key={card.id}
            className="flex flex-col items-center text-center w-full min-h-[258px] md:min-h-[320px]"
          >
            <i className="mb-4 fill-terciary p-2 rounded-full">{card.icon}</i>
            <h5 className={`${styles.titleSM} break-words`}>{card.title}</h5>
            <p className={`${styles.textXS} mt-2 break-words`}>
              {card.description}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Cards;
