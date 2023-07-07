import "../../styles/plan.css";

const PlanToggle = () => {
    return (
        <div className="toggle-container">
            <div className="term-label">Monthly</div>
            <label className="toggle-switch">
                <input type="checkbox" />
                <span className="switch" />
            </label>
            <div className="term-label">Yearly</div>
        </div>
  );
    
}

export default PlanToggle;