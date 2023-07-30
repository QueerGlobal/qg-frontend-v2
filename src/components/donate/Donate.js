import React, { FC } from "react";
import "./Donate.css";
import { DonationMethods } from "./DonationMethods";
import { DonationCosts } from "./DonationCosts";
import { DonationAmounts } from "./DonationAmounts";
import { DonationAboutUs } from "./DonationAboutUs";

const Donate = () => {
  return (
      <div className="main-container">
        <h1 className="header">SUPPORT US</h1>
        <div className="inner-container">
          <DonationAboutUs/>
          <DonationMethods />
          <DonationCosts />
          <DonationAmounts />
        </div>
      </div>
  );
};

export default Donate;
