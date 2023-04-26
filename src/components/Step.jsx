const Step = ({step, activeStep, currentIndex}) => {

    return (
        <>
            <div>{currentIndex === activeStep ? "I'm active!" : currentIndex + 1}</div>
            <div>{step.label}</div>
            <div>{step.description}</div>
        </>
    )
}

export default Step;