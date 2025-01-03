import React from 'react'
import { getNewsBySearch } from '../service/news';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap'
import NewsCard from './NewsCard';

const SearchNews = ({ search }) => {

  const [articles, setArticles] = useState([]);
  const getSearchNews = async () => {
    getNewsBySearch(search).then((data) => {
      setArticles(data.data.articles);
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(() => {
    getSearchNews();
  }, [])

  return (
    <div>
      <Container>
        <h2 className="" style={{ marginTop: "20px", marginBottom: "20px" }}>{search} News</h2>
        <Row>
          {articles.map((article, index) => (
            <NewsCard
              urlToImage={article.urlToImage}
              title={article.title}
              description={article.description}
              url={article.url}
              key={index}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default SearchNews