import './../styles/step.css';

const Step = ({step, active, currentIndex}) => {

    return (
        <>
            <div className={active ? "step-number active-background" : "step-number"}>{currentIndex + 1}</div>
        {/* will uncomment these when I start working on desktop styles */}
            {/* <div>{step.label}</div>
            <div>{step.description}</div> */}
        </>
    )
}

export default Step;