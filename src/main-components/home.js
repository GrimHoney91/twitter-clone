import '../main-ss/home.css';
import HomeHeader from '../sub-components/home/home-header';
import HomeTweetBox from '../sub-components/home/home-tweet-box';
import HomeFeed from '../sub-components/home/home-feed';
import HomeSideHeader from '../sub-components/home/home-side-header';
import Trending from '../sub-components/home/trending';
import SuggestedUsers from '../sub-components/home/suggested-users';
import Nav from './nav';

const Home = () => {


    return (
        <div className="panel">
            <Nav tab='home'/>
            <div className='content-container'>
                <div className="main-content">
                    <HomeHeader />
                    <div className='home-content'>
                        <HomeTweetBox />
                        <div className='show-tweets'>
                            <span>Show 22 Tweets</span>
                        </div>
                        <HomeFeed />
                    </div>
                </div>
                <div className="side-content">
                    <div className='home-side-container'>
                        <HomeSideHeader />
                        <Trending />
                        <SuggestedUsers />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;