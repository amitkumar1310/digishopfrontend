
// import React from 'react'
// import './backgroundvideo.css'
// import bgimage from '../videos/anime_eart.mp4';
// function SearchBar() {
//   return (
//     <div className='SearchBar'>
//       <div className='video-container'>
//       <video autoPlay loop muted>
//         <source src={bgimage} type='video/mp4'/>
        
//       </video>
//       <div style={{marginTop:'90px'}} className='overl'>
//       <div className='overlay' style={{margintop:'100px'}}>
//           <div className='overlay-content' >
//             <h4>This is the most secure shopping app</h4>
//             <p>For any query, contact us </p>
//             {/* <p>Dummy Email: example@example.com</p>
//             <p>Contact No: 123-456-7890</p>
//             <p>Contact Address: 123 Street, City, Country</p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SearchBar
      

import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/social/contact-us/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setSuccessMessage('Thank you for contacting us');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      const data = await response.json();
      console.error(data);
    }
  };

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
