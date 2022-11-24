import { useEffect, useState } from "react";



const ExploreFeed = ({chosenTopic}) => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${chosenTopic.toLowerCase()}&apiKey=0b4a8a2c01204add87a1ed1e82d6666b`)
        .then((response) => response.json())
        .then((data) => setArticles(data.articles))
        .then(() => console.log(articles));
    }, [chosenTopic]);


    return (
        <div className="feed-container">
            {articles.length === 0 ? null :
                <div className={articles[0].urlToImage === null ? 'featured-news-item-alt' : "featured-news-item"}>
                    <img className="featured-img" alt="" src={articles[0].urlToImage}/>
                    <div>
                        <span>{articles[0].title}</span>
                    </div>
                </div>
            }
            {articles.length === 0 ? null : 
               articles.map((item, index) => {
                    if (index > 0) {
                        return <div key={index} className='article-container'>
                            <div className="article-info-container">
                                <div className="article-publisher-container">
                                    <span>{item.source.name}</span>
                                    {/* <span>&#8901;</span>
                                    <span>{item.publishedAt}</span> */}
                                </div>
                                <span className="article-title">{item.title}</span>
                            </div>
                            {item.urlToImage === null ? null : 
                            <div className="article-image-container">
                                <img className="article-image" alt="article image" src={item.urlToImage}/>
                            </div>    
                            }
                        </div>
                    }
               })
            }
        </div>
    );
}

export default ExploreFeed;