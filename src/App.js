import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Entry from './main-components/entry';
import Home from './main-components/home';
import Explore from './main-components/explore';
import Notifications from './main-components/notifications';
import MessagesTab from './main-components/messages-tab';
import Bookmarks from './main-components/bookmarks';
import Lists from './main-components/lists';
import Profile from './main-components/profile';

function App() {

  const [tweets, setTweets] = useState([]);

  const addTweet = () => {

  }

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/notifications' element={<Notifications />}/>
          <Route path='/messages' element={<MessagesTab />}/>
          <Route path='/bookmarks' element={<Bookmarks />}/>
          <Route path='/lists' element={<Lists />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
