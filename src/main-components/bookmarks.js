import HomeSideHeader from '../sub-components/home/home-side-header';
import Trending from '../sub-components/home/trending';
import SuggestedUsers from '../sub-components/home/suggested-users';
import Nav from './nav';
import '../main-ss/bookmark-tab.css';
import cage from '../sub-components/bookmarks-tab/images/cage.png';

const Bookmarks = () => {


    return (
        <div className="panel">
            <Nav tab='bookmarks'/>
            <div className='content-container'>
                <div className="main-content">
                    <div className='bookmark-header'>
                        <span>Bookmarks</span>
                        <span>@GrimHoney</span>
                    </div>
                    <div className='bookmark-content'>
                        <img alt='open bird cage with an open book inside' src={cage} />
                        <span className='b-span-t'>Save Tweets for later</span>
                        <span className='b-span-b'>Don't let the good ones fly away! Bookmark Tweets to easily find them again in the future.</span>
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

export default Bookmarks;