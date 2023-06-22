
import PersonalInfo from "./cardContent/PersonalInfo";
import SelectYourPlan from "./cardContent/SelectYourPlan";
import "./../styles/card.css";

const Card = ({ formData, activeStep, setName, setEmail, setPhone, fieldError }) => {
  const { name, email, phone } = formData;
  return (
    //will set up classname logic when I move to desktop styles
    <div className="card-container">
      {activeStep === 0 && (
        <PersonalInfo
          name={name}
          email={email}
          phone={phone}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          fieldError={fieldError}
        />
      )}
      {activeStep === 1 && <SelectYourPlan />}
    </div>
  );
};


export default Card;
