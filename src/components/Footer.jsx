import { Link } from "react-router-dom";
import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";
import React from "react";
import { useTheme } from "@/components/theme-provider";

const Footer = () => {
  const { theme } = useTheme();

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="py-5 text-gray-800">
      <hr className="border-gray-300" />
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center mt-5 gap-4 sm:gap-0 px-2">
        <Link to={"/"}>
          <img
            src={isDarkMode ? logoWhite : logoBlack}
            alt="logo"
            width={150}
            className="ml-2 sm-12 "
          />
        </Link>
        <p className="text-sm text-center sm:text-left dark:text-gray-300">
          All rights reserved. © 2024 Aditya.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-center sm:text-left mr-10 dark:text-gray-300">
          <p>Mobile: +91-123456789</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
