import React from "react";
import './Donate.css'


export const DonateCard = ( method ) => {

console.log(method)


    return (
    <div className="pay-option-card">
      <img  src={method.method.logo} className="pay-option-logo" />
        <p className="pay-option-name">{method.method.name}</p>
      <button>DONATE</button>
    </div>
  );
};
