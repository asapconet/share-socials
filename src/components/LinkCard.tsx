import React from "react";
import SsButton from "./button";
import { FiArrowUpRight } from "react-icons/fi";
import classNames from "classnames";
import SsLink from "./Link";
import { FaLinkedin, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface BProps {
  className?: string;
  title: string;
  link: string;
  onClick: () => void;
}
export const LinkCard = ({ className, ...rest }: BProps) => {
  interface IconProp {
    [index: string]: React.ReactNode;
  }

  const linkIcon: IconProp = {
    twitter: <FaTwitter className="text-black" />,
    linkedIn: <FaLinkedin className="text-blue-600" />,
    whatsApp: <FaWhatsapp className="text-green-400" />,
    pinterest: <FaPinterest className="text-red-600" />,
  };

  return (
    <div
      onClick={rest.onClick}
      className={classNames(
        "flex flex-col justify-between gap-2 rounded-xl p-6 lg:min-h-[16vh] w-full",
        className,
        rest.title === "twitter"
          ? "bg-gray-100"
          : rest.title === "linkedIn"
          ? "bg-blue-100"
          : rest.title === "whatsApp"
          ? "bg-green-100"
          : rest.title === "pinterest"
          ? "bg-red-100"
          : ""
      )}
    >
      <div
        className={classNames(
          "flex items-center gap-2 text-sm",
          rest.title === "twitter"
            ? "text-black"
            : rest.title === "linkedIn"
            ? "text-blue-600"
            : rest.title === "whatsApp"
            ? "text-green-400"
            : rest.title === "pinterest"
            ? "text-red-500"
            : ""
        )}
      >
        <span>
          {rest.title === "twitter" ? (
            <>{linkIcon.twitter}</>
          ) : rest.title === "linkedIn" ? (
            <>{linkIcon.linkedIn}</>
          ) : rest.title === "whatsApp" ? (
            <>{linkIcon.whatsApp}</>
          ) : rest.title === "pinterest" ? (
            <>{linkIcon.pinterest}</>
          ) : (
            ""
          )}
        </span>
        <p className="font-bold capitalize !text-inherit"> {rest.title}</p>
      </div>
      <SsLink to={rest.link} className="text-[.8rem] pb-2">
        {rest.link}
      </SsLink>
      <SsButton
        rightIcon={<FiArrowUpRight className="text-white" />}
        asLink={rest.link}
        className={classNames(
          "-mb-4 mt-2",
          rest.title === "twitter"
            ? "bg-black"
            : rest.title === "linkedIn"
            ? "bg-blue-800"
            : rest.title === "whatsApp"
            ? "bg-green-600"
            : rest.title === "pinterest"
            ? "bg-red-700"
            : ""
        )}
      >
        Go to link
      </SsButton>
    </div>
  );
};
