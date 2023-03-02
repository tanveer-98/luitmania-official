// import "./forminput.css";

import React from 'react'
const FormInput = ({ label, inputOptions } : any) => {
  return (
    <div className='groupInp'>
       <input className="form-input" {...inputOptions} />
      {label && (
        <label
          className={`${
           inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
        
      )}
      {/* <input className="form-input" {...otherProps} /> */}
    </div>
  );
};
export default React.memo(FormInput);
