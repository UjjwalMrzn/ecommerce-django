import React from 'react'
import { Link , useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

 

function ProductScreen({ match }) {
    const { id } = useParams();
    const product = products.find((p) => p._id === id);
    return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        <Row>
            <Col>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            
            <Col md={3} >
            <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Price: रु{product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>

            </ListGroup>
   </Col> 
               


            <Col md={3} >
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                            <strong>{product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>{product.countInStock > 0 ? 'Instock' : 'Out of Stock'}</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Button className='w-100 btn btn-dark' disabled={product.countInStock == 0}  type='button'>Add to Cart</Button>
                    </ListGroup.Item>

                </ListGroup>
            </Card>      
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreen