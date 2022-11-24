import { Link } from "react-router-dom";
import verified from './images/blue-check.png';
import killua from './images/killua.webp';


const SuggestedUsers = () => {

    return (
        <div className='suggested-panel'>
            <h2>Who to follow</h2>
            {[...Array(3)].map((el, index) => (
                <div className="users-container" key={index}>
                    <div className="user-card">
                        <img className="uc-pi" alt="killua from Hunter X Hunter, the anime" src={killua}/>
                        <div className="uc-ui">
                            <div>
                                <span>Grim Honey</span>
                                <img alt="verified icon" src={verified}/>
                            </div>
                            <span className="uc-at">@GrimHoney</span>
                        </div>
                        <button className="uc-f-btn">Follow</button>
                    </div>
                </div>
            )
            )
            }               
            <div className="sl">
                <Link to='/'>Show more</Link>
            </div>
        </div>
    );
}

export default SuggestedUsers;