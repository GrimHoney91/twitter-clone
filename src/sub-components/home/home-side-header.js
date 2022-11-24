import searchGrey from './images/search-grey.png';
import searchBlue from './images/search-blue.png';
import x from './images/x.png';
import { useState, useEffect } from 'react';


const HomeSideHeader = () => {

    const [focus, setFocus] = useState(false);
    const focusIn = () => {
        setFocus(true);
        const searchDiv = document.getElementById('search-div');
        searchDiv.style.borderColor = '#1E8FFF';
        searchDiv.style.backgroundColor = 'white';
    }

    const focusOut = () => {
        setFocus(false);
        const searchDiv = document.getElementById('search-div');
        searchDiv.style.borderColor = 'white';
        searchDiv.style.backgroundColor = 'rgba(220, 220, 220, 0.4)';
    }
    

    const [searchValue, setSearchValue] = useState('');
    const clearSearch = () => {
        setSearchValue('');
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }
    useEffect(() => {
        document.onclick = (e) => {
            if (e.target.id == 'search-input' || e.target.id == 'clear-search') {
                focusIn();
                document.getElementById('search-input').focus();
            } else {
                focusOut();
            }
        };
    },[]);

    return (
        <div className="home-side-header">
            <div id='search-div'>
                {focus ? <img alt='blue search icon' src={searchBlue}/> : <img alt='grey search icon' src={searchGrey}/>}
                <input id='search-input' placeholder="Search Twitter" value={searchValue} onChange={(e) => handleSearch(e)}/>
                {focus ? <img alt='clear icon' src={x} className='clear-search' id='clear-search' onClick={() => clearSearch()}/> : null}
            </div>
        </div>
    );
}

export default HomeSideHeader;