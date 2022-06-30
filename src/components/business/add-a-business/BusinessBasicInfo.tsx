// https://xd.adobe.com/view/6f6af599-8eb6-46b5-8731-e4c09ddd587e-3a39/screen/2cffa014-0880-4777-b43e-a1118dad69f8/
import React, { FC } from 'react';
// import Select from '../../common/forms/Select';
import Input from '../../common/forms/Input';

/**
 * TODO - 
    // html-entities example, from node_modules\html-entities\README.md 

 * Look into html-escaper at node_modules\html-escaper\README.md
 * or he at node_modules\he\README.md
 * and body-parser node_modules\body-parser\README.md
 * 
 * @returns {Node} BusinessBasicInfo
 */
const BusinessBasicInfo: FC = () => {   
    const CATEGORIES = [
        "advocacy", 
        "art_entertainment", 
        "business_finance", 
        "community", 
        "education", 
        "family", 
        "food", 
        "legal", 
        "health_medical", 
        "military", 
        "religion", 
        "sports", 
        "travel", 
        "other"
    ];

    const Select = (options: any, title: any, onChange: any, isMultipleSelect: any, searchable: any) => {
        return(
            <select title={title} onChange={onChange} multiple={isMultipleSelect}>
                {options.map((item: any) => {
                    const {itemValue, itemName} = item;
    
                    return <option value={itemValue}>{itemName}</option>;
                })}
            </select>
        );
    };

    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    const validateEmail= (e: any) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(e);
    };

    const saveAndContinue = (e: any): void => {
        e.preventDefault();

        const { email, statesValue, password, passwordConfirm } = e.target;
    
        var canProceed = validateEmail(email) 
            && statesValue
            && password.isValid()
            && passwordConfirm.isValid();
      }

      let email = "email", companyName = "companyName", forbiddenWords = "forbiddenWords", passsword = "passsword", confirmPassword = "confirmPassword", catValue = "catValue";
      const handleEmailInput = () => {};
      const showEmailError = () => {};
      const isEmpty = () => {};
      const handlePasswordInput = () => {};
      const handleCompanyInput = () => {};
      const handleConfirmPasswordInput = () => {};
      const handleSelectChange = () => {};    
      const isConfirmedPassword = () => {};    
        

    return (
        <>
            <h1>Hello</h1>

            <form onSubmit={saveAndContinue}>
                <label htmlFor="cat">Category</label>

                <Input 
                text="Email Address" 
                ref="email"
                type="text"
                defaultValue={email} 
                validate={validateEmail}
                value={email}
                onChange={handleEmailInput} 
                errorMessage="Email is invalid"
                emptyMessage="Email can't be empty"
                errorVisible={showEmailError}
                />

                <Input 
                text="Company Name" 
                ref="companyName"
                validate={isEmpty}
                value={companyName}
                onChange={handleCompanyInput} 
                emptyMessage="Company name can't be empty"
                /> 

                <Input 
                text="Password" 
                type="password"
                ref="password"
                validator="true"
                minCharacters="8"
                requireCapitals="1"
                requireNumbers="1"
                forbiddenWords={forbiddenWords}
                value={passsword}
                emptyMessage="Password is invalid"
                onChange={handlePasswordInput} 
                /> 

                <Input 
                text="Confirm password" 
                ref="passwordConfirm"
                type="password"
                validate={isConfirmedPassword}
                value={confirmPassword}
                onChange={handleConfirmPasswordInput} 
                emptyMessage="Please confirm your password"
                errorMessage="Passwords don't match"
                /> 

                <Select 
                options={CATEGORIES} 
                ref="cat"
                value={catValue} 
                title="business-category"
                onChange={handleSelectChange}
                multipleSelect={true}
                searchable={true}
                />
            </form>
        </>
    );
};

export default BusinessBasicInfo;