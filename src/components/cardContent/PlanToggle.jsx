import React, { useState, useEffect } from "react";
import "../../styles/plan.css";

const PlanToggle = ({ plan, setPlan }) => {
  const [isToggled, setIsToggled] = useState(false);

  const togglePlan = () => {
    setIsToggled(!isToggled);
    updatePlan();
  };

  const updatePlan = useEffect(
    () => (isToggled ? setPlan("yearly") : setPlan("monthly")),
    [isToggled]
  );

  return (
    <div className="toggle-container">
      <div className="term-label">Monthly</div>
      <label className="toggle-switch">
        <input type="checkbox" onClick={togglePlan} />
        <span className="switch" />
      </label>
      <div className="term-label">Yearly</div>
    </div>
  );
};

export default PlanToggle;
