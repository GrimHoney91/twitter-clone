import '../main-ss/explore.css';
import Nav from './nav';
import SuggestedUsers from '../sub-components/home/suggested-users';
import HomeSideHeader from '../sub-components/home/home-side-header';
import TopicNav from '../sub-components/explore/topic-nav';
import ExploreFeed from '../sub-components/explore/explore-feed';

import gear from '../sub-components/explore/images/gear.png';
import { useState, useEffect } from 'react';

const Explore = () => {

    const topics = ['General', 'Business', 'Science', 'Sports', 'Technology', 'Entertainment'];
    const [chosenTopic, setChosenTopic] = useState('General');

    return (
        <div className="panel">
            <Nav tab='explore'/>
            <div className='content-container'>
                <div className="main-content">
                    <div className='explore-header'>
                        <div className='explore-h-t'>
                            <HomeSideHeader />
                            <div className='gear-c'>
                                <img className='gear' alt='gear icon for settings' src={gear}/>
                            </div>
                        </div>
                        <TopicNav topics={topics} chosenTopic={chosenTopic} setChosenTopic={setChosenTopic}/>
                    </div>
                    <ExploreFeed chosenTopic={chosenTopic}/>
                </div>
                <div className="side-content">
                    <div className='es-sticky-c'>
                        <SuggestedUsers />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;