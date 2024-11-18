import React from "react";
import client from "../assets/client-1.png";
import quote from "../assets/quote.png";
import PropTypes from "prop-types";
import Typography from "./Typography";

const TestimonialCard = ({
  clientImg = client,
  testimony = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.",
  clientRole = "CEO",
  clientName = "Samual Karl",
}) => {
  return (
    <div className="bg-off-white rounded-md p-[30px] mx-auto max-w-[750px] mb-12">
      <div className="flex justify-between items-center">
        <img src={clientImg} alt="" />
        <img src={quote} alt="" className="w-[60px] h-[60px]" />
      </div>
      <Typography variant="bodycopy" color="text-black-shade" className="mt-10">
        {testimony}
      </Typography>
      <div className="mt-[30px]">
        <Typography
          variant="bodycopy"
          color="text-peach-red-100"
          className="font-bold"
        >
          {clientName}
        </Typography>
        <Typography variant="bodycopy" color="text-dark-blue-100">
          {clientRole}
        </Typography>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  clientImg: PropTypes.string,
  testimony: PropTypes.string,
  clientName: PropTypes.string,
  clientRole: PropTypes.string,
};

export default TestimonialCard;
