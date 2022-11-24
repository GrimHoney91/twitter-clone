import stars from './images/stars.png';


const HomeHeader = () => {
    return (
        <div className='home-header'>
            <h2>Home</h2>
            <div>
                <img alt='star icon' src={stars}/>
            </div>
        </div>
    );
}

export default HomeHeader;