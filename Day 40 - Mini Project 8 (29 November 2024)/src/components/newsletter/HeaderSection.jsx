import React from "react";
import SubscribeForm from "./SubscribeForm";

function HeaderSection() {
  return (
    <>
      <div className="space-y-4">
        <p className="text-center text-base font-semibold text-purple-cstm-200">
          Newsletters
        </p>
        <h1 className="text-5xl font-bold text-center font-bold">
          Stories and interviews
        </h1>
        <p className="text-xl font-normal text-center">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <SubscribeForm />
      </div>
    </>
  );
}

export default HeaderSection;
