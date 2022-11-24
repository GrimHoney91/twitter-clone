import { useEffect } from "react";

const TopicNav = ({topics, chosenTopic, setChosenTopic}) => {
   
    useEffect(() => {
        const topic = document.getElementById(chosenTopic).firstChild;
        topic.style.color = 'black';

        const topicUnderline = document.getElementById(chosenTopic).lastChild;
        topicUnderline.style.display = 'inline';

        return () =>  {
            topic.style.color = '#536471';
            topicUnderline.style.display = 'none';
        }
    },[chosenTopic]);

    return (
        <div className='explore-h-b'>
            {topics.map((topic, index) => {
                    return <div className='topic-c' id={topic} key={index} onClick={() => setChosenTopic(topic)}>
                        <span className='topic'>{topic}</span>
                        <span className='topic-chosen'></span>
                    </div>
                })
            }   
        </div>
    );
}

export default TopicNav;