import FormTitle from "./FormTitle";
import React, { useState } from "react";
import "./../../styles/footer.css";


const PersonalInfo = ({ userInfo, setUserInfo }) => {
  const title = "Personal Info";
  const subtitle = "Please enter your name, email address, and phone number.";

  const [error, setError] = useState(true);


  // will add state to update form object with user input

  return (
    <form>
      <FormTitle title={title} subtitle={subtitle} />

      <div className="user-input">
        {/* still need to add form validation */}
        <label for="name">Name</label>
        {usernameError && <span className="error">error message here</span>}

        <br />
        <input type="text" id="name" placeholder="e.g. Stephen King" required />
        <br />

        <label for="email">Email Address</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          pattern=".+@globex\.com"
          size="30"
          required
        />
        <br />

        <label for="tel">Phone Number</label>
        <br />
        <input
          type="tel"
          id="tel"
          placeholder="e.g. +1 234 567 8901"
          required
        />
        <br />
      </div>
    </form>
  );
};

export default PersonalInfo;
