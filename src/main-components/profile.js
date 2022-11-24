import HomeSideHeader from '../sub-components/home/home-side-header';
import Trending from '../sub-components/home/trending';
import SuggestedUsers from '../sub-components/home/suggested-users';
import Nav from './nav';
import '../main-ss/profile.css';
import TopicNav from '../sub-components/explore/topic-nav';
import { useState } from 'react';
import backArrow from '../sub-components/profile-tab/images/back-arrow.png';
import gojo from '../sub-components/profile-tab/images/gojo.jpg';
import killua from '../sub-components/profile-tab/images/killua.webp';
import FeedTweet from '../sub-components/home/feed-tweet';




const Profile = () => {

    const topics = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];
    const [chosenTopic, setChosenTopic] = useState('Tweets');


    return (
        <div className="panel">
            <Nav tab='profile'/>
            <div className='content-container'>
                <div className="main-content">
                    <div className='lists-header'>
                        <div className='lh-arrow-c'>
                            <img className='lh-arrow' alt='back arrow' src={backArrow}/>
                        </div>
                        <div className='lh-span-c'>
                            <span>Grim</span>
                            <span>3 Tweets</span>
                        </div>
                    </div>
                    <div className='profile-content'>
                        <div className='p-header-ic'>
                            <img alt='profile header image' src={gojo}/>
                        </div>
                        <div className='pp-row'>
                            <div className='pp-ic'>
                                <div className='pp-ic-2'>
                                    <div></div>
                                    <img alt='profile picture' src={killua}/>
                                </div>
                            </div>
                            <button>Edit profile</button>
                        </div>
                        <div className='p-info-c'>
                            <div className='pic-row1'>
                                <span>Grim</span>
                                <span>@GrimHoney</span>
                            </div>
                            <div className='pic-row2'>
                                <img />
                                <span>Joined September 2021</span>
                            </div>
                            <div className='pic-row3'>
                                <div className='following-c'>
                                    <span>4</span>
                                    <span>Following</span>
                                </div>
                                <div className='followers-c'>
                                    <span>0</span>
                                    <span>Followers</span>
                                </div>
                            </div>
                        </div>
                        <TopicNav topics={topics} chosenTopic={chosenTopic} setChosenTopic={setChosenTopic}/>
                        <FeedTweet />
                    </div>
                </div>
                <div className="side-content">
                    <div className='home-side-container'>
                        <HomeSideHeader />
                        <SuggestedUsers />
                        <Trending />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;