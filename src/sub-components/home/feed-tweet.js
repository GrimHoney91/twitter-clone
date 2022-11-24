import killua from '../nav/images/killua.webp';
import gojo from './images/gojo.jpg';
import verified from './images/blue-check.png';

import reply from './images/reply.png';
import retweet from './images/retweet.png';
import like from './images/like.png';
import share from './images/share.png';


const FeedTweet = () => {
    let knownUserRaply = false;
    let image = true;
    
    return (
        <div className="feed-tweet" onClick={}>
            <div className="ft-l">
                <img alt="tweet author profile image" src={killua} />
                {knownUserRaply ? <div className='line'></div> : null}
            </div>
            <div className="ft-r">
                <div className='ft-r-t'>
                    <div className='ft-ai'>
                        <span>Grim Honey</span>
                        <span>
                            <img alt='blue checkmark' src={verified}/>
                        </span>
                        <span>@GrimHoney</span>
                        <span>&#8901;</span>
                        <span>12h</span>
                    </div>
                    <div className='ft-more'>
                        <span>&#8901;</span>
                        <span>&#8901;</span>
                        <span>&#8901;</span>
                    </div>
                </div>
                <div className='ft-r-b'>
                    <div className='ft-r-b-tc'>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                    </div>
                    {image ? 
                        <div className='ft-r-b-ic'>
                            <img alt='Gojo from Jujutsu Kaisen' src={gojo}/>
                        </div>
                        :
                        null
                    }               
                    <div className='ft-r-b-fp'>
                        <div className='ft-fc' >
                            <div className='ft-fc-ic ft-fc-rpc'>
                                <img alt='reply icon' src={reply}/>
                            </div>
                            <span>2,317</span>
                        </div>
                        <div className='ft-fc'>
                            <div className='ft-fc-ic ft-fc-rtc'>
                                <img alt='retweet icon' src={retweet}/>
                            </div>
                            <span>4,529</span>
                        </div>
                        <div className='ft-fc'>
                            <div className='ft-fc-ic ft-fc-lc'>
                                <img alt='like icon' src={like}/>
                            </div>
                            <span>54.2K</span>
                        </div>
                        <div className='ft-fc'>
                            <div className='ft-fc-ic ft-fc-sc'>
                                <img alt='share icon' src={share}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedTweet;