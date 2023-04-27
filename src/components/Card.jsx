const Card = ({activeStep, handleNext, handleBack}) => {
    return (
        <>
            <div>card content will go here</div>
            <button onClick={handleNext}>next</button>
            <button onClick={handleBack}>back</button>
        </>
    )
}

export default Card;