import React, {useState, useEffect} from "react"

const News = () => {
    // state
    const [news, setNews] = useState([]);

    //method to fetch news from hackernews api
    const fetchNews = () => {
        fetch('http://hn.algolia.com/api/v1/search?query=react')
        .then(result => result.json())
        .then(data => setNews(data.hits))
        .catch(err => {
            console.log(err);
        })
    };

    useEffect(() => { //will run when component mounts and any time there is a change in the state.
        fetchNews();
    })

    return(
        <div>
            <h2>News</h2>
            {news.map((n, i) =>(<p key={i}>{n.title}</p>))}
        </div>
    )
}

export default News;