import { Link } from "react-router-dom";
import verified from './images/blue-check.png';
import nbc from './images/nbc.jpg';
import greenwood from './images/greenwood.webp';

const Trending = () => {


    return (
        <div className='ht-panel'>
            <h2>What's happening</h2>
            {[...Array(4)].map((el, index) => (
                <div className="ht-nc" key={index}>
                    <div className="ht-ni">
                        <div className="ht-ni-t">
                            <img alt="NBC news logo" src={nbc}/>
                            <span>IndyStar</span>
                            <img alt="twitter verified blue checkmark" src={verified}/>
                            <span className="grey" id="ht-dot">&#8901;</span>
                            <span className="grey">1 hour ago</span>
                        </div>
                        <div className="ht-ni-b">
                            <span>4 dead, 2 injured in Greenwood Park Mall shooting</span>
                        </div>
                    </div>
                    <img alt="news image of GreenWood Mall in Indiana" src={greenwood}/>
                </div>
            )
            )
            }
            <div className="ht-lc">
                <Link to='/'>Show more</Link>
            </div>
        </div>
    );
}

export default Trending;