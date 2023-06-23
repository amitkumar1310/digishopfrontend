// import React, { useState } from "react";

// /* REACT BOOTSTRAP */
// import { Button, Form } from "react-bootstrap";

// /* REACT ROUTER DOM */
// import { useNavigate} from "react-router-dom";

// function SearchBox() {
//   /* STATE */
//   const [keyword, setKeyword] = useState("");

//   let navigate =
//     useNavigate(); /* CAN'T DIRECTLY USE HISTORY AS IT'S NOT AN ACTUAL PAGE SO CAN'T DESTRUCTURE PROPS */

//   /* HANDLER */
//   const submitHandler = (e) => {
//     e.preventDefault();

//     // WHEN USER HITS SUBMIT, REDIRECT TO HOME PAGE TO SEE PRODUCTS AND APPEND ?keyword=...IN URL
//     if (keyword) {
//       navigate(`/?keyword=${keyword}&page=1`);
//     } else {
//       // IF WE HIT SUBMIT WITHOUT KEYWORD, WE DON'T WANT THE USER TO GET REDIRECTED IN THAT CASE RATHER STAY ON WHATEVER PAGE HE WAS
//       navigate(navigate.location.pathname);
//     }
//   };

//   return (
//     <Form onSubmit={submitHandler} className="d-flex">
//       <Form.Control
//         type="text"
//         name="q"
//         onChange={(e) => setKeyword(e.target.value)}
//         className="mr-sm-2 ml-sm-5"
//       ></Form.Control>

//       <Button type="submit" variant="outline-success" className="p-2 mx-sm-2">
//         Search
//       </Button>
//     </Form>
//   );
// }

// export default SearchBox;




import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  // const { keyword: currentKeyword } = useParams();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
   if(keyword==="Electronics"||keyword==="electronics"||keyword==="electronic"||keyword==="e"){
navigate(`/electronics`);
   }
   else if(keyword==="pricerange"||keyword==="PriceRange"||keyword==="price"||keyword==="range"){
    navigate(`/range`);
       }

       else if(keyword==="womenswear"||keyword==="Womenswear"||keyword==="Women"||keyword==="woman"){
        navigate(`/womenswear`);
           }

           else if(keyword==="menswear"||keyword==="Menswear"||keyword==="men"||keyword==="Man"){
            navigate(`/menswear`);
               }
               else if(keyword==="Sports"||keyword==="sports"||keyword==="s"||keyword==="sport"){
                navigate(`/sports`);
                   }
    // if (keyword) {
    //   navigate(`/?keyword=${keyword}&page=1`);
    // } 
    else {
      navigate(`/`);
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <Form.Control
        type="text"
        name="q"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      />

      <Button type="submit" variant="outline-success" className="p-2 mx-sm-2" style={{backgroundColor:"greenyellow"}}>
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;



// import React, { useState } from "react";
// import { Navbar, Nav, Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { listProducts } from "../actions/productAction";
// const SearchBar = () => {
//     const [keyword, setKeyword] = useState("");
//     const [category, setCategory] = useState("");
//     const [minPrice, setMinPrice] = useState("");
//     const [maxPrice, setMaxPrice] = useState("");
  
//     const dispatch = useDispatch();
  
//     const submitHandler = (e) => {
//       e.preventDefault();
  
//       const filters = {};
  
//       if (keyword.trim()) {
//         filters.keyword = keyword.trim();
//       }
  
//       if (category) {
//         filters.category = category;
//       }
  
//       if (minPrice) {
//         filters.minPrice = minPrice;
//       }
  
//       if (maxPrice) {
//         filters.maxPrice = maxPrice;
//       }
  
//       dispatch(listProducts(filters));
//     };
  
//     return (
//       <Form onSubmit={submitHandler} inline>
//         <Form.Control
//           type="text"
//           name="keyword"
//           placeholder="Keyword..."
//           value={keyword}
//           onChange={(e) => setKeyword(e.target.value)}
//         />
//         <Form.Control
//           as="select"
//           name="category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="">All Categories</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Clothing">Clothing</option>
//           <option value="Books">Books</option>
//           {/* Add more options for categories */}
//         </Form.Control>
//         <Form.Control
//           type="number"
//           name="minPrice"
//           placeholder="Min Price"
//           value={minPrice}
//           onChange={(e) => setMinPrice(e.target.value)}
//         />
//         <Form.Control
//           type="number"
//           name="maxPrice"
//           placeholder="Max Price"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//         />
//         <Button type="submit" variant="outline-light">
//           Search
//         </Button>
//       </Form>
//     );
//   };
//   export default SearchBar;