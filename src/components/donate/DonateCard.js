import React from "react";
import './Donate.css'


export const DonateCard = ( method ) => {



    return (
    <div className="pay-option-card">
      <img  src={method.logo} className="pay-option-logo" />
        <p>{method.name}</p>
      <button>DONATE</button>
    </div>
  );
};
