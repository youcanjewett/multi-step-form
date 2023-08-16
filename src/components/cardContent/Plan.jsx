
import "../../styles/plan.css";

const Plan = ({ icon, name, cost, setPlan, }) => {
  // add classnames here to show discount when yearly option is selected

 
  return (
    
    <
      
    >
      <img src={icon} className="plan-icon" alt="arcade icon" />
      <div className="plan-info">
        <div className="plan-title">{name}</div>
        <div className="plan-cost">{cost}</div>
        <div className="discount">2 months free</div>
      </div>
    </>
  );
};

export default Plan;
