import React from 'react'; 

/**
 * @returns {Node} Select
 */
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

export default Select;