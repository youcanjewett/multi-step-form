import './../../index.css';
import './../../styles/card.css';

const FormTitle = ({title, subtitle}) => {
    return (
        <div>
            <h1 className='card-title'>{title}</h1>
            <h2 className='card-subtitle'>{subtitle}</h2>
        </div>
    )
}

export default FormTitle;