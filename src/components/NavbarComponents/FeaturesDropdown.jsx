import React from "react";
import { FeaturesLinks, FeaturesPlatformLinks } from "../constants";
import { styles } from "../../styles";

const FeaturesDropdown = ({ render }) => {
  return (
    <div
      className={`${
        render &&
        "absolute border-[1px] rounded-lg border-terciary px-5 w-[450px]"
      }  bg-[#fff] -bottom-[315px] left-0 py-4`}
    >
      <div className={`justify-between ${render && "flex"}`}>
        <div className={`w-[50%] text-left ${!render && "py-4 w-full"}`}>
          <h5 className={`${styles.titleXs}`}>PLATFORM</h5>
          <ul>
            {FeaturesPlatformLinks.map((link) => {
              return (
                <li key={link.id} className={` ${!render && "my-2"} w-full `}>
                  <a
                    href={link.to}
                    className="text-[15px] w-full text-gray-500"
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`w-[100%] text-left h-full ${
            render && "border-l-[1px] pl-4 w-[50%]"
          } ${
            !render && "border-t-[1px] py-4"
          }   border-terciary  flex flex-col`}
        >
          <h5 className={`${styles.titleXs}`}>FEATURES</h5>
          <ul>
            {FeaturesLinks.map((link) => {
              return (
                <li key={link.id} className={` ${!render && "my-2"} w-full `}>
                  <a href={link.to} className="text-[15px] text-gray-500">
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={`border-t-[1px] border-terciary mt-3 ${
          render && "p-2"
        } py-2 text-left`}
      >
        <a href="" className="text-primary font-medium text-[16px]">
          Features overview →
        </a>
      </div>
    </div>
  );
};

export default FeaturesDropdown;
