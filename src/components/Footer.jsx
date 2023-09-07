import React, { useState } from "react";
import RenderLinksFooter from "./FooterComponents/RenderLinksFooter";
import {
  platformFooterLinks,
  supportFooterLinks,
  featuresFooterLinks,
  compareFooterLinks,
  resourcesFooterLinks,
  podiaFooterLinks,
  socialFooterLinks,
} from "./constants";
import { styles } from "../styles";

const Footer = () => {
  const [openSection, setOpenSection] = useState(false);

  return (
    <footer className="bg-[#f5efeb]">
      <div className="flex flex-col max-w-[85rem] w-full m-auto px-7 md:px-20 py-[6rem]">
        <RenderLinksFooter
          LinksToRender={platformFooterLinks}
          title={"Platform"}
          isOpen={openSection}
          toggleSection={setOpenSection}
        />
        <RenderLinksFooter
          LinksToRender={supportFooterLinks}
          title={"Support"}
          isOpen={openSection}
          toggleSection={setOpenSection}
        />
        <RenderLinksFooter
          LinksToRender={featuresFooterLinks}
          title={"Features"}
          isOpen={openSection}
          toggleSection={setOpenSection}
        />
        <RenderLinksFooter
          LinksToRender={compareFooterLinks}
          title={"Compare"}
          isOpen={openSection}
          toggleSection={setOpenSection}
        />
        <RenderLinksFooter
          LinksToRender={resourcesFooterLinks}
          title={"Resources"}
          isOpen={openSection}
          toggleSection={setOpenSection}
        />
        <RenderLinksFooter
          LinksToRender={podiaFooterLinks}
          title={"Podia"}
          isOpen={openSection}
          toggleSection={setOpenSection}
        />
        <RenderLinksFooter
          LinksToRender={socialFooterLinks}
          title={"Social"}
          isOpen={openSection}
          toggleSection={setOpenSection}
        />
        <div className="flex mt-9 text-gray-500">
          <p className="mr-3">Podia Labs, Inc. © 2023</p>
          <div>
            <a href="#" className={`${styles.linkFooter} mr-3`}>
              Terms
            </a>
            <a href="#" className={`${styles.linkFooter}`}>
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
