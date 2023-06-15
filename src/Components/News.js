import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";

const News= (props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(1)

 
  

  
  //THIS BELOW (componnentDidMount())- is run after the render mehtod it is best to fetch data in it -- it can be async
  const update =async ()=> {
    props.loadingBar(20)
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bee71ad3134c4923a9539648a5100b37&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    props.loadingBar(40)
    let parsedData = await data.json();
    
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.loadingBar(100)
  }
  useEffect(()=>{
    update()
    document.title = `NewsApp - ${props.category}`
    console.log(page)
    // eslint-disable-next-line 
  },[])


  const fetchMoreData = async()=>{
    setLoading(true)
    props.loadingBar(30)
    setPage(page+1)
    console.log(page)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bee71ad3134c4923a9539648a5100b37&page=${page+1}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    props.loadingBar(50)
    console.log("pre Setted")
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.loadingBar(100)
    console.log("Setted")

    console.log(articles.length)
  }
  
    return (
      <div className={`container bg-primary-${props.theme}`}>
        <h1>
          NewsApp - Top{" "}
          <small style={{ color: "#dfc16d" }}>({props.category})</small>{" "}
          Headlines
        </h1>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader= {loading && <Spinner/>}
            style={{display: "flex",flexDirection:"column", alignItems:"center"}}
          >
        <div className="news-container">
            {articles.map((elem) => {
                return (
                  <NewsCard
                    title={elem.title}
                    description={
                      elem.description ? elem.description.slice(0, 150) : ""
                    }
                    imageUrl={elem.urlToImage}
                    url={elem.url}
                    theme={props.theme}
                    author={elem.author}
                    date={elem.publishedAt}
                  />
                );
              })}
        </div>
          </InfiniteScroll>
     
      </div>
    );
  
}

export default News;


News.defaultProps = {
  pageSize: 8,
  country: "us",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};