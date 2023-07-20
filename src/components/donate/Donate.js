/** @format */

import React, { FC } from "react";
import "./Donate.css";
import headShot from "../../assets/home/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg";
import { donationMethods } from "../donate/config.js";
import { DonateCard } from "./DonateCard";

const Donate = () => {
  return (
	<div>
    <div className="hero-container">
      <h1 className="header">SUPPORT US</h1>
      <div className="text-container">
        <p>
          Queer Global is a worldwide masterlist for marginalized peoples in the
          Queer community. QG will provide links and information to surgeons,
          doctors, therapists, and more with specialized expertise in servicing
          and supporting overlooked races and bodies, as well as a comprehensive
          listing of worldwide events, support groups, product lines and
          queer-owned companies that cater to marginalized peoples.
        </p>
        <div className="text-photo-container">
          <div className="text-image-container">
            <p className="text-next-to-image">
              Looking for a binder in a hard to match skintone? QG can help.
              Need a surgeon that specializes in plus sized bodies? QG can help.
              Traveling to a new city and want to find an event where you can
              comfortably and safely mingle with other Queer POC? QG can help.
              <br />
              <br /> Building a site like this takes time, and of course, money.
              That is where you come in. Your donations will help us pay for our
              web domain, the necessary hardware to create our operations HQ, as
              well as the work of graphic and web designers to help us achieve
              our goal of creating this groundbreaking platform for Queer
              interaction and support. Every little bit helps.
              <br />
              <br /> Queerness has finally gained a spotlight the global stage.
              It is time to build our own world.
            </p>
            <img className="image" src={headShot} />
          </div>
          <div className="pay-option-container">
            <h6 className="pay-option-header">
              We are not picky. Everything helps
            </h6>

            <div className="pay-options-row">
              {donationMethods.map((method) => (
                <DonateCard method={method} key={method.name} />
              ))}
            </div>
            <button className="pay-option-monthly">
              SET UP MONTHLY DONATIONS
            </button>
          </div>
        </div>
		<h2 className="donate-transparency">WE BELIEVE IN <span className="donate-script">transparency</span>.</h2>
		<p className="donate-sub-header">Here is where your money went in 2019 and 2020.</p>
      </div>
    </div>
	</div>
  );
};

export default Donate;
