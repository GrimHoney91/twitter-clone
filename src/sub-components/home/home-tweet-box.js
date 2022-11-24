import killua from './images/killua.webp';
import globe from './images/globe.png';
import mediaIcon from './images/media.png';
import gif from './images/gif.png';
import poll from './images/poll.png';
import smileyFace from './images/smiley-face.png';
import calender from './images/calender.png';
import pin from './images/pin.png';


const HomeTweetBox = () => {

    let media = false;

    const autoGrow = (e)  => {
        if (e.target.value == '') {
            e.target.style.height = 53 + 'px';
            disableTweetBtn();
        } else {
            e.target.style.height = 1 + 'px';
            e.target.style.height = e.target.scrollHeight + 'px'; 
            enableTweetBtn();
        }
    }

    const disableTweetBtn = () => {
        const tweetBtn = document.querySelector('.h-tb-tbtn');
        tweetBtn.disabled = true;
    }
    const enableTweetBtn = () => {
        const tweetBtn = document.querySelector('.h-tb-tbtn');
        tweetBtn.disabled = false;
    }

    const displayRow2 = () => {
        const row2 = document.querySelector('.h-tb-row2');
        row2.style.display = 'block';
    }
    
    return (
        <div className='home-tweet-box'>
            <div className="h-tb-l">
                <img className="h-tb-l-ui" alt="Killua from Hunter X Hunter, the anime" src={killua}/>
            </div>
            <div className='h-tb-r'>
                <div className='h-tb-row1'>
                    <textarea placeholder="What's happening?" onChange={(e) => autoGrow(e)} onClick={displayRow2}></textarea>
                </div>
                {media ? <div>
                    
                </div> : null}
                <div className='h-tb-row2'>
                    <div>
                        <img alt='globe icon' src={globe}/>
                        <span>Everyone can reply</span>
                    </div>
                </div>
                <div className='h-tb-row3'>
                    <div className='h-tb-ip'>
                        <div>
                            <img alt='media icon' src={mediaIcon}/>
                        </div>
                        <div>
                            <img alt='gif icon' src={gif}/>
                        </div>
                        <div>
                            <img alt='poll icon' src={poll}/>
                        </div>
                        <div>
                            <img alt='smiley face icon' src={smileyFace}/>
                        </div>
                        <div>
                            <img alt='calender icon' src={calender}/>
                        </div>
                        <div>
                            <img alt='pin icon' src={pin}/>
                        </div>
                    </div>
                    <button disabled={true} className='h-tb-tbtn'>Tweet</button>
                </div>
            </div>
        </div>
    );
}

export default HomeTweetBox;