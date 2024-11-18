import React from "react";
import PropTypes from "prop-types";
import Typography from "../components/Typography";

export default function BannerSection({ title, breadCrumb }) {
  return (
    <div className="bg-dark-blue-100 h-[150px] lg:h-[200px] flex flex-col justify-center items-center">
      <Typography
        variant="h1"
        color="text-peach-red-100"
        className="flex text-3xl py-3 leading-none"
      >
        {title}
      </Typography>
      <Typography
        variant="pretext"
        color="text-off-white"
        className="text-sm"
      >
        {breadCrumb}
      </Typography>
    </div>
  );
}

BannerSection.propTypes = {
  title: PropTypes.string.isRequired,
  breadCrumb: PropTypes.string.isRequired,
};