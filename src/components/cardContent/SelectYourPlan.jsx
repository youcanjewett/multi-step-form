import FormTitle from "./FormTitle";
import Plan from "./Plan";
import iconArcade from "../../assets/icon-arcade.svg";
import iconAdvanced from "../../assets/icon-advanced.svg";
import iconPro from "../../assets/icon-pro.svg";
import PlanToggle from "./PlanToggle";

const SelectYourPlan = ({plan, setPlan}) => {
  const title = "Select your plan";
  const subtitle = "You have the option of monthly or yearly billing.";

  const planOptions = [
    {
      name: "Arcade",
      monthlyCost: "$9/mo",
      yearlyCost: "$90/yr",
      icon: iconArcade,
    },
    {
      name: "Advanced",
      monthlyCost: "$12/mo",
      yearlyCost: "$120/yr",
      icon: iconAdvanced,
    },
    {
      name: "Pro",
      monthlyCost: "$15/mo",
      yearlyCost: "$150/yr",
      icon: iconPro,
    },
  ];

  return (
    <form>
      <FormTitle title={title} subtitle={subtitle} />
      {planOptions.map((plan) => {
        return (
          <Plan
            key={plan.name}
            icon={plan.icon}
            name={plan.name}
            cost={plan.monthlyCost}
          />
        );
      })}
      <PlanToggle plan={plan} setPlan={setPlan}/>
    </form>
  );
};

export default SelectYourPlan;
