import HomeSideHeader from '../sub-components/home/home-side-header';
import Trending from '../sub-components/home/trending';
import SuggestedUsers from '../sub-components/home/suggested-users';
import Nav from './nav';
import '../main-ss/lists.css';
import backArrow from '../sub-components/lists-tab/images/back-arrow.png';
import more from '../sub-components/lists-tab/images/more.png';
import newList from '../sub-components/lists-tab/images/new-list.png';
import grim from '../sub-components/home/images/killua.webp';
import list from '../sub-components/lists-tab/images/list.png';

const Lists = () => {


    return (
        <div className="panel">
            <Nav tab='lists'/>
            <div className='content-container'>
                <div className="main-content">
                    <div className='lists-header'>
                        <div className='lh-arrow-c'>
                            <img alt='back arrow' src={backArrow}/>
                        </div>
                        <div className='lh-span-c'>
                            <span>Lists</span>
                            <span>@GrimHoney</span>
                        </div>
                        <div className='lh-ip'>
                            <div className='lh-ic'>
                                <img alt='new list icon' src={newList}/>
                            </div>
                            <div className='lh-ic'>
                                <img alt='more icon' src={more}/>
                            </div>
                        </div>
                    </div>
                    <div className='lists-content'>
                        <div className='pinned-container'>
                            <span className='list-heading'>Pinned Lists</span>
                            <span className='grey-span'>Nothing to see here yet - pin your favorite Lists to access them quickly.</span>
                        </div>
                        <div className='discover-container'>
                            <span className='list-heading'>Discover new Lists</span>
                            {[...Array(3)].map((e, i) => 
                                <div className='d-li' key={i}>
                                    <div className='d-li-ic'>
                                        <img alt='list icon' src={list}/>
                                    </div>
                                    <div className='d-li-uc'>
                                        <span className='d-li-uc-t'>News Outlets</span>
                                        <div className='d-li-uc-b'>
                                            <img alt='profile picture' src={grim}/>
                                            <span>Public Transit</span>
                                            <span>@PublicTransit</span>
                                        </div>
                                    </div>
                                    <button className='d-f-btn'>Follow</button>
                                </div>
                            )
                            }
                            <span className='d-sm'>Show more</span>
                        </div>
                        <div className='yl-container'>
                            <span className='list-heading'>Your Lists</span>
                            <span className='grey-span'>You haven't created or followed any Lists. When you do, they'll show up here.</span>
                        </div>
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

export default Lists;