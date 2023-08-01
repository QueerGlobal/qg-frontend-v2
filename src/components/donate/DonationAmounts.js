import React from "react";

export const DonationAmounts = () => {
  return (
    <section className="donation-amount-section">
      <h6 className="donation-amount-header">Looking ahead</h6>
      <p>
        Our current fundraising mission is to continue building the Queer Global
        website. This includes maintaining software licenses, volunteer rewards
        and meals, training, legal services, and administration work. A little
        goes a long way….
      </p>

      <div className="donation-amount-card-container">
        <div className="donation-amount-card">
          <h2 className="donation-amount">$10</h2>
          <p className="">
            We can afford to pay for volunteer gifts such as stickers,
            postcards, coffee mugs, etc.
          </p>
          <button className="donation-amount-button">DONATE $10</button>
        </div>

        <div className="donation-amount-card">
          <h2 className="donation-amount">$25</h2>
          <p className="">We can afford to pay for an hour of Admin work</p>
          <button className="donation-amount-button">DONATE $25</button>
        </div>

        <div className="donation-amount-card">
          <h2 className="donation-amount">$80</h2>
          <p className="">We can afford an Adobe license for a UX volunteer</p>
          <button className="donation-amount-button">DONATE $80</button>
        </div>
      </div>
      <p>
        Queerness has finally gained it’s spotlight the global stage. It’s time
        to build our own world.
      </p>
      <p>
        <strong>Will you help us built it?</strong>
      </p>
      <button className="volunteer-button">SEE VOLUNTEER OPPURTUNITIES</button>
       <h6 className="volunteer-transparency">
              <span className="volunteer-script">Thank you </span>for helping our community.
            </h6>
    </section>
  );
};
