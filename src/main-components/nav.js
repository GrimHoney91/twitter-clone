import logo from '../sub-components/nav/images/twitter-logo.webp';
import birdHouse from '../sub-components/nav/images/home.png';
import hashtag from '../sub-components/nav/images/explore.png';
import bell from '../sub-components/nav/images/notifications.png';
import envelope from '../sub-components/nav/images/messages.png';
import bookmark from '../sub-components/nav/images/bookmarks.png';
import list from '../sub-components/nav/images/lists.png';
import profile from '../sub-components/nav/images/profile.png';
import more from '../sub-components/nav/images/more.png';
import killua from '../sub-components/nav/images/killua.webp';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

const Nav = ({tab}) => {

    useEffect(() => {
        const chosenTab = document.getElementById(tab);
        chosenTab.style.fontWeight = '900';

        return () => chosenTab.style.fontWeight = 'normal'; 
    }, []);

    return (
        <div className="nav-panel">
            <div className="top">
                <Link className='nav-links twitter-link' to='/'>
                    <div>
                        <img alt="twitter-logo" className="twitter-logo" src={logo}/>
                    </div>
                </Link>
                <nav className="nav">
                    <ul>
                        <Link className='nav-links' to='/'>
                            <li className='nav-items'>
                                <img alt='birdhouse icon' src={birdHouse}/>
                                <span id='home'>Home</span>
                            </li>
                        </Link>
                        <Link className='nav-links' to='/explore'>
                            <li className='nav-items'>
                                <img alt='hashtag icon' src={hashtag}/>
                                <span id='explore'>Explore</span>
                            </li>
                        </Link>
                        <Link className='nav-links' to='/notifications'>
                            <li className='nav-items'>
                                <img alt='bell icon' src={bell}/>
                                <span id='notifications'>Notifications</span>
                            </li>
                        </Link>
                        <Link className='nav-links' to='/messages'>
                            <li className='nav-items'>
                                <img alt='envelope icon' src={envelope}/>
                                <span id='messages'>Messages</span>
                            </li>
                        </Link>
                        <Link className='nav-links' to='/bookmarks'>
                            <li className='nav-items'>
                                <img alt='bookmark icon' src={bookmark}/>
                                <span id='bookmarks'>Bookmarks</span>
                            </li>
                        </Link>
                        <Link className='nav-links' to='/lists'>
                            <li className='nav-items'>
                                <img alt='list icon' src={list}/>
                                <span id='lists'>Lists</span>
                            </li>
                        </Link>
                        <Link className='nav-links' to='/profile'>
                            <li className='nav-items'>
                                <img alt='profile icon' src={profile}/>
                                <span id='profile'>Profile</span>
                            </li>
                        </Link>
                        <Link className='nav-links' to='/'>
                            <li className='nav-items'>
                                <img alt='more icon' src={more}/>
                                <span id='more'>More</span>
                            </li>
                        </Link>
                    </ul>
                </nav>
                <button className="tweet-btn">Tweet</button>
            </div>
            <div className="bottom">
                <img alt='killua from the anime Hunter X Hunter' src={killua}/>
                <div className="user-info">
                    <span>Grim</span>
                    <span>@Grim</span>
                </div>
                <span className='dots'>...</span>
            </div>
        </div>
    );
}

export default Nav;