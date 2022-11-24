import Nav from "./nav";
import '../main-ss/messages-tab.css';
import gear from '../sub-components/explore/images/gear.png';
import envelope from '../sub-components/messages-tab/images/envelope.png';


const MessagesTab = () => {
    return (
        <div className="panel">
            <Nav tab='messages'/>
            <div className='content-container'>
                <div className="alt-main-content">
                    <div className='messages-header'>
                        <span>Messages</span>
                        <div className="messages-h-ic">
                            <div>
                                <img alt="settings icon" src={gear} />
                            </div>
                            <div>
                                <img alt="new message icon" src={envelope} />
                            </div>
                        </div>
                    </div>
                    <div className="messages-content">
                        <span className="m-span-t">Welcome to your inbox!</span>
                        <span className="m-span-b">Drop a line, share Tweets and more with private conversations between you and others on Twitter.</span>
                        <button className="m-btn">Write a message</button>
                    </div>
                </div>
                <div className="alt-side-content">
                    <span className="m-span-t">Select a message</span>
                    <span className="m-span-b">Choose from your existing conversations, start a new one, or just keep swimming.</span>
                    <button className="m-btn">New message</button>
                </div>
            </div>
        </div>
    );
}

export default MessagesTab;