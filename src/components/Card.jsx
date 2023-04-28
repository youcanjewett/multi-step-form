import './../styles/card.css';

const Card = ({activeStep, handleNext, handleBack}) => {
    return (
        //will set up classname logic when I move to desktop styles
        <div className="card-container">
            <div>card content will go here</div>
            <button onClick={handleNext}>next</button>
            <button onClick={handleBack}>back</button>
        </div>
    )
}

export default Card;