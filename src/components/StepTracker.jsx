import React, {useState} from 'react';

const StepTracker = () => {

    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            label: "Step 1",
            description: "Your Info"
        },
        {
            label: "Step 2",
            description: "Select Plan"
        },
        {
            label: "Step 3",
            description: "Add-ons"
        },
        {
            label: "Step 4",
            description: "Summary"
        }
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };


    return (
        <>

        {steps.map((step) => {
           
            return (
                <>
                <div>{steps.indexOf(step) === activeStep ? "I'm active!" : steps.indexOf(step) + 1}</div>
                <div>{step.label}</div>
                <div>{step.description}</div>
                </>
            )
        })}
        <button onClick={handleNext}>next</button>
        <button onClick={handleBack}>back</button>
          </>
           
    )
}

export default StepTracker;