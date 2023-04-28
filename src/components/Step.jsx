import classNames from 'classnames';
import './../styles/step.css';

const Step = ({step, active, currentIndex}) => {

    const stepClass = classNames({
        'step-number': true,
        'active-background': active
    })

    return (
        <>
            <div className={stepClass}>{currentIndex + 1}</div>
        {/* will uncomment these when I start working on desktop styles */}

            {/* <div>{step.label}</div>
            <div>{step.description}</div> */}
        </>
    )
}

export default Step;