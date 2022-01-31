import React from "react";

const SubmitForm = () => {
   return (
      <div>
         <h1>Form</h1>
         <label>
            Enter your name:
            <input type="text" />
         </label>
         <label>
            Hairstyle Title:
            <input type="text" />
         </label>
         <label>
            Image:
            <input type="text" />
         </label>
         <label>
            Difficulty:
            <input type="text" />
         </label>
         <label>
            Tutorial url:
            <input type="text" />
         </label>
      </div>
   );
};

export default SubmitForm;
