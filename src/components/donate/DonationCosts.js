import React from 'react'
import pie from "./pies/pie.png";


export const DonationCosts = () => {
  return (
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
  )
}
