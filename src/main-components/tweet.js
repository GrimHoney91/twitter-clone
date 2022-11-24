import Nav from "./nav";
import HomeSideHeader from "../sub-components/home/home-side-header";
import Trending from "../sub-components/home/trending";
import { useState } from "react";
import '../main-ss/notifications.css';
import backArrow from '../sub-components/profile-tab/images/back-arrow.png';

const Notifications = () => {


    const topics = ['All', 'Mentions'];
    const [chosenTopic, setChosenTopic] = useState('All');


    return (
        <div className="panel">
            <Nav tab='home'/>
            <div className='content-container'>
                <div className="main-content">
                    <div className="lists-header">
                        <div className="back-arrow-ic">
                            <img alt="back arrow icon" src={backArrow}/>
                        </div>
                        <span>Tweet</span>
                    </div>
                </div>
                <div className="side-content">
                    <div className='n-sticky-c'>
                        <HomeSideHeader />
                        <Trending />
                    </div>
                </div>
            </div>
    </div>
    );
}

export default Notifications;