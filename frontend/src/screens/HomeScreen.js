// import React, {useState , useEffect}  from 'react'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
// import axios from 'axios'

import products from '../products'




function HomeScreen() {
  // const[products, setProducts] = useState([])

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
  //     setProducts(data)
  //   }
  //   fetchProducts()
  // }, []) 

  return (
    <div>
        <h1>Latest Products</h1>

        <Row>
            {products.map(product => ( 
                <Col key={product._id} sm={12} m={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen
