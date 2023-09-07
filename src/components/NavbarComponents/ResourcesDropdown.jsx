import React from "react";
import { styles } from "../../styles";
import { ResourcesLinks } from "../constants";

const ResourcesDropdown = ({ render }) => {
  return (
    <div
      className={`${
        render &&
        "absolute border-[1px] rounded-lg border-terciary px-5 w-[450px]"
      }  bg-[#fff] -bottom-[200px] left-0 py-4 text-left`}
    >
      <h5 className={`${styles.titleXs} mb-3`}>FREE RESOURCES</h5>
      <div className={`${render && "flex"}`}>
        <ol className="w-full">
          {ResourcesLinks.slice(0, 4).map((link) => (
            <li key={link.id} className={`${!render && "mb-3"}`}>
              <a href={link.to} className="text-[15px] text-gray-500">
                {link.title}
              </a>
            </li>
          ))}
        </ol>
        <ol className="w-full pb-4">
          {ResourcesLinks.slice(4).map((link) => (
            <li key={link.id} className={!render && "mb-3"}>
              <a href={link.to} className="text-[15px] text-gray-500">
                {link.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ResourcesDropdown;
