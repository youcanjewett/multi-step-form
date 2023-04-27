import Step from "./Step";
import './../styles/stepTracker.css';

const StepTracker = ({ steps, activeStep }) => {
  return (
    <section>
      {steps.map((step, index) => {
        return (
          <Step
            key={index}
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
