// // import React, { useState, useEffect } from 'react';
// // import { Col, Row, Card, Form } from 'react-bootstrap';
// // import { Link } from 'react-router-dom';
// // import { Carousel, Image } from 'react-bootstrap';

// // function PriceRange() {
// //   const [products, setProducts] = useState([]);
// //   const [minPrice, setMinPrice] = useState('');
// //   const [maxPrice, setMaxPrice] = useState('');

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         let url = `/api/product/pricerange`;
// //         if (minPrice && maxPrice) {
// //           url += `?min_price=${minPrice}&max_price=${maxPrice}`;
// //         }
// //         const response = await fetch(url);
// //         const data = await response.json();
// //         setProducts(data);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     };

// //     fetchProducts();
// //   }, [minPrice, maxPrice]);

// //   const handlePriceFilter = (e) => {
// //     e.preventDefault();
// //     // Perform validation or other checks if needed
// //     // Update the state with the entered price range
// //     setMinPrice(e.target.minPrice.value);
// //     setMaxPrice(e.target.maxPrice.value);
// //   };

// //   return (
// //     <div>
// //       <Link to="/" className="btn btn-dark my-3">
// //                 Go to Home
// //               </Link>
// //       <Col>
      
// //           <Col>
// //             <Col>
// //             <Card style={{backgroundColor:"wheat"}}>
// //               <Row>
// //                 <strong style={{ color: 'black' }}>
// //                   <h2>Products Based on Your Choice</h2>
// //                 </strong>
// //               </Row>
// //               <Row>
// //                 <strong style={{ color: 'black' }}>
// //                   <h2>Rating:</h2>
// //                 </strong>
// //               </Row>
// //               <Row>
// //                 <strong style={{ color: 'black' }}>
// //                   <h2>greater than 3</h2>
// //                 </strong>
// //               </Row>
             
// //               </Card>
// //             </Col>

// //             <Col>
// //               <Form onSubmit={handlePriceFilter}>
// //                 <Row>
// //                   <Col md={4}>
// //                     <Form.Control
// //                       type="number"
// //                       step="0.01"
// //                       placeholder="Min Price"
// //                       name="minPrice"
// //                     />
// //                   </Col>
// //                   <Col md={4}>
// //                     <Form.Control
// //                       type="number"
// //                       step="0.01"
// //                       placeholder="Max Price"
// //                       name="maxPrice"
// //                     />
// //                   </Col>
// //                   <Col md={4}>
// //                     <button type="submit" className="btn btn-primary">
// //                       Filter
// //                     </button>
// //                   </Col>
// //                 </Row>
// //               </Form>
// //             </Col>
// //           </Col>
        
// //       </Col>

// //       <Col>
            
// //         <Col>
// //           <Carousel pause="hover" className="caras">
// //             {products.map((product) => (
// //               <Carousel.Item key={product.id}>
// //                 <Link to={`/product/${product.id}`}>
// //                   <Image
// //                     className="img-fluid"
// //                     style={{ height: '300px' }}
// //                     src={product.image}
// //                     alt={product.name}
// //                     fluid
// //                   />

// //                   <Carousel.Caption className="carousel-caption">
// //                     <h4 className="text">
// //                       {product.name} (₹{product.price})
// //                     </h4>
// //                   </Carousel.Caption>
// //                 </Link>
// //               </Carousel.Item>
// //             ))}
// //           </Carousel>
// //         </Col>
        
// //       </Col>
// //     </div>
// //   );
// // }

// // export default PriceRange;


// import React, { useState, useEffect } from 'react';
// import { Col, Row, Card, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Carousel, Image } from 'react-bootstrap';

// function PriceRange() {
//   const [products, setProducts] = useState([]);
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         let url = `/api/product/pricerange`;
//         if (minPrice && maxPrice) {
//           url += `?min_price=${minPrice}&max_price=${maxPrice}`;
//         }
//         const response = await fetch(url);
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [minPrice, maxPrice]);

//   const handlePriceFilter = (e) => {
//     e.preventDefault();
//     setMinPrice(e.target.minPrice.value);
//     setMaxPrice(e.target.maxPrice.value);
//   };

//   return (
//     <div>
//       <Link to="/" className="btn btn-dark my-3">
//         Go to Home
//       </Link>
//       <Row>
//         <Col md={4} className="sidebar">
//           <Card style={{ backgroundColor: 'wheat' }}>
//             <strong style={{ color: 'black' }}>
//               <h2>Products Based on Your Choice</h2>
//             </strong>
//             <strong style={{ color: 'black' }}>
//               <h2>Rating:</h2>
//             </strong>
//             <strong style={{ color: 'black' }}>
//               <h2>greater than 3</h2>
//             </strong>
//             <Form onSubmit={handlePriceFilter}>
//               <Row>
//                 <Col md={4}>
//                   <Form.Control
//                     type="number"
//                     step="0.01"
//                     placeholder="Min Price"
//                     name="minPrice"
//                   />
//                 </Col>
//                 <Col md={4}>
//                   <Form.Control
//                     type="number"
//                     step="0.01"
//                     placeholder="Max Price"
//                     name="maxPrice"
//                   />
//                 </Col>
//                 <Col md={4}>
//                   <button type="submit" className="btn btn-primary">
//                     Filter
//                   </button>
//                 </Col>
//               </Row>
//             </Form>
//           </Card>
//         </Col>
//         <Col md={8}>
//           <Carousel pause="hover" className="carousel">
//             {products.map((product) => (
//               <Carousel.Item key={product._id}>
//                 <Link to={`/product/${product._id}`}>
//                   <div className="product-card">
//                     <div className="product-image">
//                       <Image
//                         className="img-fluid"
//                         src={product.image}
//                         alt={product.name}
//                         fluid
//                       />
//                     </div>
//                     <div className="carousel-caption">
//                       <h4 className="text">
//                         {product.name} (₹{product.price})
//                       </h4>
//                     </div>
//                   </div>
//                 </Link>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default PriceRange;



import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import HomeScreen from '../screens/HomeScreen';


function PriceRange() {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `/api/product/pricerange`;
        if (minPrice && maxPrice) {
          url += `?min_price=${minPrice}&max_price=${maxPrice}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [minPrice, maxPrice]);

  const handlePriceFilter = (e) => {
    e.preventDefault();
    setMinPrice(e.target.minPrice.value);
    setMaxPrice(e.target.maxPrice.value);
  };

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go to Home
      </Link>
      <Row>
        <Col md={4} className="sidebar">
          <Card style={{ backgroundColor: 'blue' }}>
            <strong style={{ color: 'black' }}>
              <h2>Products Based on Your Choice</h2>
            </strong>
            <strong style={{ color: 'black' }}>
              <h2>Rating:</h2>
            </strong>
            <strong style={{ color: 'black' }}>
              <h2>greater than 3</h2>
            </strong>
            <Form onSubmit={handlePriceFilter}>
              <Row>
                <Col md={4}>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="Min Price"
                    name="minPrice"
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="Max Price"
                    name="maxPrice"
                  />
                </Col>
                <Col md={4}>
                  <button type="submit" className="btn btn-primary">
                    Filter
                  </button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col md={8}>
          <Carousel pause="hover" className="carousel">
            {products.map((product) => (
              <Carousel.Item key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <div className="product-card">
                    <div className="product-image">
                      <Image
                        className="img-fluid"
                        src={product.image}
                        alt={product.name}
                        fluid
                      />
                    </div>
                    <div className="carousel-caption">
                      <h4 className="text">
                        {product.name} (₹{product.price})
                      </h4>
                    </div>
                  </div>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <HomeScreen/>
    </div>
  );
}

export default PriceRange;
