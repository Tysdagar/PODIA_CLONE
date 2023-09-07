import React, { useState } from "react";
import { styles } from "../../styles";
import { CaretIconDown, CloseDropdown } from "../../assets/Icons";

import NavMapLinks from "./NavMapLinks";

const DropdownMenu = () => {
  const [dropdownMenu, showDropdownMenu] = useState(false);

  function handleDropdownMenu() {
    showDropdownMenu((prevState) => !prevState);
  }

  return (
    <div className={` md:hidden flex ${styles.textNav} ml-8 items-center`}>
      <button className="flex items-center" onClick={handleDropdownMenu}>
        Menu <CaretIconDown />{" "}
      </button>
      {dropdownMenu && (
        <div className="border-2 border-solid border-[#dfd8d3]   bg-[#fff] absolute top-2 left-1/2 transform -translate-x-1/2 z-10 w-[98%] h-[400px] text-center py-6 px-1 rounded-lg ">
          <div className="relative w-full h-full flex flex-col rounded-lg justify-between overflow-y-scroll overflow-x-hidden">
            <div className="flex justify-between items-center px-6 mb-3 fixed bg-[#fff] h-[80px] w-full top-0 left-0 z-10">
              <h4 className="text-terciary font-medium tracking-widest text-[12px]">
                MENU
              </h4>
              <button onClick={handleDropdownMenu} className="text-primary">
                <CloseDropdown />
              </button>
            </div>

            <NavMapLinks render={false} />
            <a
              href=""
              className={`${styles.textButton} ${styles.hoverButton} bg-primary px-6 py-[11.5px] rounded-[25px] w-[95%] mx-auto `}
            >
              Sign up free
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
