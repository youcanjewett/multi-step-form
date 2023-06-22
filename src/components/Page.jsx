import React, { useState, useCallback } from "react";
import StepTracker from "./StepTracker";
import Card from "./Card";
import Footer from "./Footer";
import "./../index.css";

const Page = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [fieldError, setFieldError] = useState({
    nameIsValid: true,
    emailIsValid: true,
    phoneIsValid: true
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

  const setName = (input) => {
    setFormData((formData) => ({ ...formData, name: input.target.value }));
  };

  const setEmail = (input) => {
    setFormData((formData) => ({ ...formData, email: input.target.value }));
  };

  const setPhone = (input) => {
    setFormData((formData) => ({ ...formData, phone: input.target.value }));
  };

  const validateFormData = useCallback(() => {
    let isValid;
    switch (activeStep) {
      case 0:
        isValid = formData.name !== "";
        setFieldError((fieldError) => ({
          ...fieldError,
          nameIsValid: isValid,
        }));
      case 1:
        isValid = formData.email !== "";
        setFieldError((fieldError) => ({
          ...fieldError,
          emailIsValid: isValid
        }));
      case 2:
        isValid = formData.phone !== "";
        setFieldError((fieldError) => ({
          ...fieldError,
          phoneIsValid: isValid
        }));
    }

    return isValid;
  }, [formData, fieldError]);

  const handleNext = useCallback(() => {
    let nextStep = validateFormData();
    if (nextStep) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }, [formData, activeStep, fieldError]);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, [activeStep]);

  return (
    <main className="page-container">
      <header className="header">
        <StepTracker steps={steps} activeStep={activeStep} />
      </header>
      <Card
        formData={formData}
        activeStep={activeStep}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        fieldError={fieldError}
      />


      {/* will need logic here to only display footer component in mobile */}
      <Footer
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </main>
  );
};

export default Page;
