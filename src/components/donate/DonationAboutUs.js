import React from 'react'
import headShot from "../../assets/home/nathana-reboucas-9ltd8_dh_JM-unsplash.jpg";


export const DonationAboutUs = () => {
  return (
             <main>
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
        </div>
</main>
  )
}
