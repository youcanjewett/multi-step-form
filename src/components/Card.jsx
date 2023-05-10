
import PersonalInfo from "./cardContent/PersonalInfo";
import SelectYourPlan from "./cardContent/SelectYourPlan";
import "./../styles/card.css";

const Card = ({ activeStep, usernameError }) => {
  return (
    //will set up classname logic when I move to desktop styles
    <div className="card-container">
      {activeStep === 0 && <PersonalInfo  usernameError={usernameError}/>}
      {activeStep === 1 && <SelectYourPlan />}
    </div>
  );
};


export default Card;
