import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import FooterColumns from "./footerContent/FooterColumns";
import SocialPart from "./footerContent/SocialPart";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  const { t, locale } = useLanguage();
  return (
    <footer className="mt-12">
      <div className="border-t-[1px] bg-white border-slate-500/30">
        <div className="flex flex-wrap mt-4  py-8 px-4 w-full xl:max-w-[2100px] mx-auto">
          <FooterColumns />
          <SocialPart />
        </div>
      </div>
      <div className="flex items-center bg-white justify-center flex-wrap border-t-[1px] border-slate-500/30 py-4 text-black text-center text-sm md:text-base">
        {t.copyRight}
        <BsFillSuitHeartFill
          style={{
            color: "blue",
            margin: "0 0.3rem 0 0.3rem",
            fontSize: "1.3rem",
          }}
        />
        {locale === "en" ? "by Keshav Sharma" : " Keshav Sharma"}
      </div>
    </footer>
  );
};

export default Footer;
