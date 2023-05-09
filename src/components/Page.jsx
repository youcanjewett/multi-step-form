import React, { useState, useCallback } from "react";
import StepTracker from "./StepTracker";
import Card from "./Card";
import Footer from "./Footer";
import "./../index.css";

const Page = () => {
 
  const [activeStep, setActiveStep] = useState(0);

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
      <Card activeStep={activeStep}/>

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
