import React, { useState } from "react";
import { styles } from "../../styles";
import { CaretIconDown, CaretIconUp } from "../../assets/Icons";

const RenderLinksFooter = ({ LinksToRender, title, isOpen, toggleSection }) => {
  const isSectionOpen = isOpen === title;

  function handleListLinks() {
    toggleSection(isSectionOpen ? false : title);
  }

  return (
    <>
      <section className="md:flex hidden items-center md:justify-normal justify-between w-full mb-4">
        <h6 className={`text-[18px] font-semibold mr-3`}>{title}</h6>
        <ol className=" w-full items-center flex ">
          {LinksToRender.map((link) => {
            return (
              <li key={link.id} className={`${styles.textSM} mr-3 `}>
                <a href={link.to} className={`${styles.linkFooter}`}>
                  {link.title}{" "}
                </a>
              </li>
            );
          })}
        </ol>
      </section>
      <section className="block md:hidden w-full mb-4">
        <button
          className="w-full flex items-center justify-between mb-3"
          onClick={handleListLinks}
        >
          <h6 className={`text-[18px] font-semibold mr-3`}>{title}</h6>
          <i className="">
            {isSectionOpen ? <CaretIconUp /> : <CaretIconDown />}
          </i>
        </button>
        {isSectionOpen && (
          <ol className="w-full flex flex-col">
            {LinksToRender.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${styles.textSM} mb-4 text-[18px]`}
                >
                  <a href={link.to} className={`${styles.linkFooter}`}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ol>
        )}
      </section>
    </>
  );
};

export default RenderLinksFooter;
