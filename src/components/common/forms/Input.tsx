import React from 'react';

/**
 * 
 * 
 * @returns {Node} Input
 */
const Input = (text: any, type: any, validate: any, onChange: any, errorVisible: any) => {
  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {}; 
  const mouseEnterError = () => {}; 
     
  const value = "value"; 

    return (
      <div className="inputGroupClasses">

        <label className="input_label" htmlFor={text}>
          <span className="label_text">{text}</span>
        </label>

        <input
          placeholder="placeholder"
          className="input" 
          id={text}
          defaultValue="defaultValue"
          value={value} 
          onChange={handleChange} 
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
        />

        <div className="validationIcons">
          <i className="input_error_icon circle_error" onMouseEnter={mouseEnterError}> </i>
          <i className="input_valid_icon circle_tick"> </i>
        </div>

      </div>
    );
};

export default Input;