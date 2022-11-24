import Nav from "./nav";
import HomeSideHeader from "../sub-components/home/home-side-header";
import Trending from "../sub-components/home/trending";
import SuggestedUsers from "../sub-components/home/suggested-users";
import gear from '../sub-components/explore/images/gear.png';
import TopicNav from "../sub-components/explore/topic-nav";
import { useState } from "react";
import '../main-ss/notifications.css';

const Notifications = () => {


    const topics = ['All', 'Mentions'];
    const [chosenTopic, setChosenTopic] = useState('All');


    return (
        <div className="panel">
            <Nav tab='notifications'/>
            <div className='content-container'>
                <div className="main-content">
                    <div className="notifications-header">
                        <div className="notifications-h-t">
                            <span>Notifications</span>
                            <div className="gear-c">
                                <img alt="settings icon" src={gear}/>
                            </div>
                        </div>
                        <TopicNav topics={topics} chosenTopic={chosenTopic} setChosenTopic={setChosenTopic} />
                    </div>
                    <div className="notifications-container">
                        <span>Nothing to see here - yet</span>
                        <span>{chosenTopic === 'All' ? `This is where you'll find any future notifications.` : `When someone mentions you, you'll find it here.`}</span>
                    </div>
                </div>
                <div className="side-content">
                    <div className='n-sticky-c'>
                        <HomeSideHeader />
                        <Trending />
                        <SuggestedUsers />
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Notifications;