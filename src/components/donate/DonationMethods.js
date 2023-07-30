import React from 'react'
import { donationMethods } from "../donate/config.js";
import { DonateCard } from "./DonateCard";

export const DonationMethods = () => {
  return (
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
  )
}
