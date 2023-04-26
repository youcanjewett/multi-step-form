import Step from "./Step";

const StepTracker = ({ steps, activeStep }) => {
  return (
    <>
      {steps.map((step) => {
        return (
          <Step
            step={step}
            activeStep={activeStep}
            currentIndex={steps.indexOf(step)}
          />
        );
      })}
    </>
  );
};

export default StepTracker;
