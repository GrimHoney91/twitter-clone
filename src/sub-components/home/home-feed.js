import FeedTweet from "./feed-tweet";


const HomeFeed = () => {
    const arr = ['h', 'a', 's', 'e', 'w'];

    return (
        <div className='feed-container'>
            { arr.map(el => <FeedTweet key={el}/>)}
        </div>
    );
}

export default HomeFeed;