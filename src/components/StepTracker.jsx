import Step from "./Step";
import './../styles/stepTracker.css';

const StepTracker = ({ steps, activeStep }) => {
  return (
    <section className="step-tracker-container">
      {steps.map((step, index) => {
        return (
          <Step
            key={step.label}
            step={step}
            active={index===activeStep}
            currentIndex={index}
          />
        );
      })}
    </section>
  );
};

export default StepTracker;
