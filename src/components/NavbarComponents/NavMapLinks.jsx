import React, { useState } from "react";
import { NavLinks } from "../constants";
import { CaretIconDown, CaretIconUp } from "../../assets/Icons";
import { styles } from "../../styles";
import FeaturesDropdown from "./FeaturesDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

const NavMapLinks = ({ render }) => {
  const [dropdownMenu, showDropdownMenu] = useState({
    Features: false,
    Resources: false,
  });

  function handleDropdownMenus(option) {
    showDropdownMenu((prevState) => ({
      Features: option === "Features" ? !prevState.Features : false,
      Resources: option === "Resources" ? !prevState.Resources : false,
    }));
  }

  return (
    <ul
      className={`${render && "hidden"} ${
        !render && "mt-12"
      } justify-between w-[100%] md:flex`}
    >
      {NavLinks.map((link) => {
        const isFeatures = link.title === "Features";
        const isResources = link.title === "Resources";
        const shouldShowBorder =
          (isFeatures && dropdownMenu.Features) ||
          (isResources && dropdownMenu.Resources);

        return (
          <li
            key={link.id}
            className={`${styles.textNav} px-4 py-2 rounded-[25px] relative  ${
              shouldShowBorder && render ? "border-2 border-primary" : ""
            }`}
          >
            {isFeatures || isResources ? (
              <button
                className={`flex items-center justify-between w-full h-full rounded-[25px] ${
                  isResources && !render && "mb-5"
                } `}
                onClick={() => handleDropdownMenus(link.title)}
              >
                {link.title}{" "}
                {isFeatures || isResources ? (
                  dropdownMenu[link.title] ? (
                    <CaretIconUp />
                  ) : (
                    <CaretIconDown />
                  )
                ) : null}
              </button>
            ) : (
              <a href={link.to} className="flex items-center w-full h-full">
                {link.title}
              </a>
            )}
            {isFeatures && dropdownMenu.Features && (
              <FeaturesDropdown render={render} />
            )}
            {isResources && dropdownMenu.Resources && (
              <ResourcesDropdown render={render} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavMapLinks;
