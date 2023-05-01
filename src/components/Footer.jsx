import classNames from 'classnames';
import "./../styles/footer.css";

const Footer = ({ activeStep, handleNext, handleBack }) => {

    const nextButton = classNames({
        'next-button': true,
        'confirm-background': activeStep === 3
    });

  return (
    <div className="footer-container">
      {activeStep !== 0 && (
        <button onClick={handleBack} className="back-button">
          Go Back
        </button>
      )}
      <button onClick={handleNext} className={nextButton}>
        {activeStep === 3 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default Footer;
