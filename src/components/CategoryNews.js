import React from 'react'
import { getCategoricalNews } from '../service/news';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap'
import NewsCard from './NewsCard';

function CategoryNews({ category, title }) {

    const [articles, setArticles] = useState([]);
    const getNews = async () => {
        getCategoricalNews("us", category).then((data) => {
            setArticles(data.data.articles);
        }).catch((error) => {
            console.log(error);
        }
        );
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <div>
            <Container>
                <h2 className="" style={{ marginTop: "20px", marginBottom: "20px" }}>{title} News</h2>
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

export default CategoryNews
