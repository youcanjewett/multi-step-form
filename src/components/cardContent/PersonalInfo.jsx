import React, { useState } from "react";
import classNames from "classnames";
import FormTitle from "./FormTitle";
import ErrorMessage from "./ErrorMessage";
import "./../../styles/footer.css";
import "./../../styles/card.css";

const PersonalInfo = ({ name, email, phone, setName, setEmail, setPhone, fieldError }) => {
  const { nameIsValid, emailIsValid, phoneIsValid } = fieldError;
  const title = "Personal Info";
  const subtitle = "Please enter your name, email address, and phone number.";

  const nameError = classNames({
    "error-border": !nameIsValid,
  });

  const emailError = classNames({
    "error-border": !emailIsValid,
  });

  const phoneError = classNames({
    "error-border": !phoneIsValid,
  });

  return (
    <form>
      <FormTitle title={title} subtitle={subtitle} />

      <div className="personal-info-container">
        <br />
        <div className="label-container">
          <label for="name">Name</label>
          {!nameIsValid && <ErrorMessage />}
        </div>
        <input
          value = {name}
          type="text"
          className={nameError}
          id="name"
          placeholder="e.g. Stephen King"
          onChange={setName}
          required
        />
        <br />
        <div className="label-container">
          <label for="email">Email Address</label>
          {!emailIsValid && <ErrorMessage />}
        </div>
        <input
          value = {email}
          type="email"
          id="email"
          className={emailError}
          placeholder="e.g. stephenking@lorem.com"
          onChange={setEmail}
          pattern=".+@globex\.com"
          size="30"
          required
        />
        <br />
        <div className="label-container">
          <label for="tel">Phone Number</label>
          {!phoneIsValid && <ErrorMessage />}
        </div>
        <input
          value = {phone}
          type="tel"
          id="tel"
          className={phoneError}
          placeholder="e.g. +1 234 567 8901"
          onChange={setPhone}
          required
        />
        <br />
      </div>
    </form>
  );
};

export default PersonalInfo;
