import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'


function NewsCard({ urlToImage, title, description, url }) {

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };


    return (
        <>
            <Col md={4} style={{ marginBottom: '20px' }}>
                <Card style={{ width: '24rem' }}>
                    <div style={{ height: '200px', overflow: 'hidden' }}>
                        <Card.Img variant="top" src={urlToImage ? urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_MdCIA2NZWud2ui0mqNOyoN7jV9OK77SiSkoCkxd2dbSOmVcYMkrB7voIA&s"} />
                    </div>
                    <Card.Body>
                        <Card.Title>
                            {
                                title ? title.length > 60 ? title.substring(0, 60) + '...' : title : "No Title"
                            }
                        </Card.Title>
                        <div style={{ height: '100px', overflow: 'hidden' }}>
                            <Card.Text >
                                {
                                    description ? description.length > 100 ? truncateDescription(description, 100) : description : "No Description"
                                }
                            </Card.Text>
                        </div>
                        <Button variant="primary" href={url} target="_blank">Read More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default NewsCard
