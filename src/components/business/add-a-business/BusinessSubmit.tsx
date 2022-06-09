// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/5fbdd85b-0b5a-4eba-9d0a-1c4f62e36005/
import { nanoid } from 'nanoid'
import React, { FC } from 'react';

/**
 * Add a unique id to the business with nanoid
 * @returns 
 */
const BusinessSubmit: FC = () => {
    let businessName = "Temp Name";
    let id = businessName.replace(/\s/g, "") + "-" + nanoid(6); // Example of result would be "TempName-I_Fa-V"

    return <h1>Hello</h1>;
};

export default BusinessSubmit;