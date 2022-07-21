import React from "react";
import Button from "../common/button/Button";

const SignUp = () => {
    return <>
        <h1>Hi!</h1>

        <header>CREATE ACCOUNT</header>
        <p>Get full access today!</p>

        <Button label="primary" buttonText="PERSONAL" />
        <p>Any donation $1+ gets you unlimited access to our resources and community support.</p>

        <Button label="primary" buttonText="BUSINESS" />
        <p>Create a business account to advertise your business and share events and available services.</p>

        <p>Already have an account?</p>
        <a href="/login" title="login">LOG IN</a>
    </>;
};

export default SignUp;
