/** @format */

import React, { FC } from "react";
import "./Donate.css";
import headShot from "../../assets/home/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg";
import { donationMethods } from "../donate/config.js";
import { DonateCard } from "./DonateCard";
import pie from "./pies/pie.png";
import pie1 from "./pies/pie1.png";
import pie2 from "./pies/pie2.png";
import pie3 from "./pies/pie3.png";

const Donate = () => {
  return (
    <>
      <div className="hero-container">
        <h1 className="header">SUPPORT US</h1>
        <div className="text-container">
          <p>
            Queer Global is a worldwide masterlist for marginalized peoples in
            the Queer community. QG will provide links and information to
            surgeons, doctors, therapists, and more with specialized expertise
            in servicing and supporting overlooked races and bodies, as well as
            a comprehensive listing of worldwide events, support groups, product
            lines and queer-owned companies that cater to marginalized peoples.
          </p>
          <div className="text-photo-container">
            <div className="text-image-container">
              <p className="text-next-to-image">
                Looking for a binder in a hard to match skintone? QG can help.
                Need a surgeon that specializes in plus sized bodies? QG can
                help. Traveling to a new city and want to find an event where
                you can comfortably and safely mingle with other Queer POC? QG
                can help.
                <br />
                <br /> Building a site like this takes time, and of course,
                money. That is where you come in. Your donations will help us
                pay for our web domain, the necessary hardware to create our
                operations HQ, as well as the work of graphic and web designers
                to help us achieve our goal of creating this groundbreaking
                platform for Queer interaction and support. Every little bit
                helps.
                <br />
                <br /> Queerness has finally gained a spotlight the global
                stage. It is time to build our own world.
              </p>
              <img className="image" src={headShot} />
            </div>

            <section>
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
            </section>
          </div>

          <section>
            <h2 className="donate-transparency">
              WE BELIEVE IN <span className="donate-script">transparency</span>.
            </h2>
            <p className="donate-sub-header">
              Here is where your money went in 2019 and 2020.
            </p>

            <div className="donation-info-card-container">
              <div className="donation-info-card">
                <img className="donation-info-pie" src={pie} />

                <h6 className="donation-info-header">Purchase Web Domain</h6>
                <p>at www.queerglobal.org</p>
              </div>
              <div className="donation-info-card">
                <img className="donation-info-pie" src={pie} />

                <h6 className="donation-info-header">Volunteer Engagemnet</h6>
                <p>
                  Meals, rewards, and training for team members, supplies for
                  volunteer parties, and gift cards, swag, and donations given
                  to volunteers.
                </p>
              </div>

              <div className="donation-info-card">
                <img className="donation-info-pie" src={pie} />

                <h6 className="donation-info-header">Software & Licenses</h6>
                <p>
                  GSuite ($300 a month), Asana, Github, AWS, IFTTT, Mailchimp,
                  Canva.com, Facebook, LinkedIn, Jira for project management,
                  NGLCC, Adobe creative suite.
                </p>
              </div>
            </div>
          </section>
<section>
  <h6 className="fundraising-header">Looking ahead</h6>
  <p>Our current fundraising mission is to continue building the Queer Global website. This includes maintaining software licenses, volunteer rewards and meals, training, legal services, and administration work. A little goes a long way….</p>
</section>


        </div>
      </div>
    </>
  );
};

export default Donate;
