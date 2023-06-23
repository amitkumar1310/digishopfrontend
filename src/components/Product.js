// import React from 'react'
// import { Card } from 'react-bootstrap'
// import Rating from './Rating'
// import { Link } from 'react-router-dom';
 

// function Product({product}) {
//   return (
//     <Card className='my-3 p-3 rounded' style={{maxWidth:'240px',border:'solid black 6px',backgroundColor:"gray",margin:'auto'}} >
//         <Link to={`/product/${product._id}`}><Card.Img src={product.image} style={{ maxHeight: '300px', objectFit: 'cover' ,minHeight:'50px'}} /></Link>
//         <Card.Body>
//         <Link to={`/product/${product._id}`}><Card.Title as="div"><strong >{product.name}</strong></Card.Title></Link>
//     <Card.Text as="div">
//         <div className='my-3'>{product.rating} star from {product.numReviews} reviews </div>
//     </Card.Text>
//     <Card.Text as="h3">${product.price}</Card.Text>

//     <Rating value={product.rating} text={product.numReviews} color={"#f8e825 "}/> 
//         </Card.Body>
//     </Card>
//   )
// }

// export default Product

// import React from 'react';
// import { Card } from 'react-bootstrap';
// import Rating from './Rating';
// import { Link } from 'react-router-dom';
// import "./screens/product.css";
// function Product({ product }) {
//   return (
//     <Card className="my-3 p-3 rounded product-card">
//       <Link to={`/product/${product._id}`}>
//         <div className="image-container">
//           <Card.Img src={product.image} alt={product.name} />
//         </div>
//       </Link>
//       <Card.Body>
//         <Link to={`/product/${product._id}`}>
//           <Card.Title as="div" className="product-name">
//             <strong>{product.name}</strong>
//           </Card.Title>
//         </Link>
//         <Card.Text as="div">
//           <div className="rating">
//             <Rating value={product.rating} text={`${product.numReviews} reviews`} color="#f8e825" />
//           </div>
//         </Card.Text>
//         <Card.Text as="h3">${product.price}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Product;



import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './producthelp.css';
function Product({ product }) {
  return (
    <div className='product-card'>
      <Link to={`/product/${product._id}`}>
        <div className='product-image'>
          <img src={product.image} alt={product.name} />
        </div>
      </Link>
      <div className='product-details'>
        <Link to={`/product/${product._id}`}>
          <div className='product-name'>{product.name}</div>
        </Link>
        <div className='product-rating'>
          {product.rating} star from {product.numReviews} reviews
        </div>
        <div className='product-price'>${product.price}</div>
        <div className="rating">
            <Rating value={product.rating} text={`${product.numReviews} reviews`} color="#f8e825" />
          </div>
      </div>
    </div>
  );
}

export default Product;
