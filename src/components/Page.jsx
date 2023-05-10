import React, { useState, useCallback } from "react";
import StepTracker from "./StepTracker";
import Card from "./Card";
import Footer from "./Footer";
import "./../index.css";

const Page = () => {
 
  const [activeStep, setActiveStep] = useState(0);

  const [usernameError, setUsernameError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });


  const steps = [
    {
      label: "Step 1",
      description: "Your Info",
    },
    {
      label: "Step 2",
      description: "Select Plan",
    },
    {
      label: "Step 3",
      description: "Add-ons",
    },
    {
      label: "Step 4",
      description: "Summary",
    },
  ];

  const validateFormData = ({activeStep}) => {

    // maybe put a switch statement here to do a different validation for each card?
    // won't be able to find by Id from another card
    // should maybe also move the validations to its own component
    let username = document.getElementById("name").value;
    username !== '' ? (
      setFormData({...formData, name: username}),
      handleNext()
     ) : setUsernameError(true);
  }

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  return (
    <main className="page-container">
      <header className="header">
        <StepTracker steps={steps} activeStep={activeStep} />
      </header>
      <Card activeStep={activeStep} usernameError={usernameError}/>


      {/* will need logic here to only display footer component in mobile */}
      <Footer
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}

        validateFormData={validateFormData}

        
      />
    </main>
  );
};

export default Page;
