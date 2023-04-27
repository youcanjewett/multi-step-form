import './../styles/step.css';

const Step = ({step, active, currentIndex}) => {

    return (
        <>
            <div className={"step-number"}>{active ? "I'm active!" : currentIndex + 1}</div>
            {/* <div>{step.label}</div>
            <div>{step.description}</div> */}
        </>
    )
}

export default Step;