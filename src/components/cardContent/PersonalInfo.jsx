import StepTitle from './StepTitle';
import StepSubtitle from './StepSubtitle';
import './../../index.css';

const PersonalInfo = () => {

    // will add state to update form object with user input
    
    return (
        <form>
            <StepTitle />
            <StepSubtitle />

            <div className="user-input">
                {/* still need to add form validation */}
                    <label for="name">Name</label><br/>
                    <input type="text" id="name" placeholder="e.g. Stephen King" required/><br/>
              
             
                    <label for="email">Email Address</label><br/>
                    <input type="email" id="email" placeholder="e.g. stephenking@lorem.com"
                        pattern=".+@globex\.com" size="30" required/><br/>
                
              
                    <label for="tel">Phone Number</label><br />
                    <input type="tel" id="tel" placeholder='e.g. +1 234 567 8901'
                            required/><br />
              
                
            </div>
        </form>
    )
}

export default PersonalInfo;