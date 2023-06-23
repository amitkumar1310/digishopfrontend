import react from "react";
import "./footer.css";
import Map from "./Map";
function Footer() {
  return (
    <div className="footer">
<Map>hii</Map>
      <div className="fmin">
        <div className="footercontainer">
          <div className="sec aboutus">
            <h2>About us</h2>
            <div style={{color:'white'}}>
              This is modern footer containing almost all features
            </div>

            <ul className="sci">
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </li>

              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                </span>
              <a href="tel:6203781673"><span>+ 91 6203781673</span></a>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                  </svg>
                </span>
               <a href="amitkumaramu4040@gmail.com"> <span>amitkumaramu4040@gmail.com</span></a>
              </li>
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </span>
               <a href="https://www.google.com/maps"><span>Aurangabad, India</span></a> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// import React from "react";
// import "./footer.css";
// import Map from "./Map";

// function Footer() {
//   return (
//     <div className="footer">
//       <Map>hii</Map>
//       <div className="fmin">
//         <div className="footercontainer">
//           <div className="sec aboutus">
//             <h2>About us</h2>
//             <div style={{ color: "white" }}>
//               This is a modern footer containing almost all features.
//             </div>

//             <ul className="sci">
//               <li>
//                 <a href="#">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-facebook"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//                   </svg>
//                 </a>
//               </li>

//               <li>
//                 <a href="#">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-twitter"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 0 13.39a9.29 9.29 0 0 0 5.026 1.826" />
//                   </svg>
//                 </a>
//               </li>

//               <li>
//                 <a href="#">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-linkedin"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M0 2.46C0 1.103 1.015 0 2.91 0 4.746 0 6 1.067 6 2.812c0 1.745-1.015 2.81-2.91 2.81H3.052V2.46h-.142zm.946 7.778H3v-4.36h.946v4.36h-.001zm1.419 0h.001V8.702h.039l2.92 4.535h1.196l-2.919-4.535v.001h-.039v4.535H3.364V10.238h.002l-.002-.002zm7.394-7.779c-1.896 0-2.91 1.103-2.91 2.81 0 1.746 1.015 2.812 2.91 2.812 1.896 0 2.91-1.066 2.91-2.812 0-1.707-1.014-2.81-2.91-2.81h-.053zm-.95 4.245H9.41V5.523h.001v-.001h-.001l-.001.001H9.41l-.001.001v.001h.001v1.153h-.001l-.001-.001zm.002 0h.001v-.001H9.46v-.001h.001v.001h.001v.001h-.001l-.001-.001h.001v.001h.001zm3.748-2.437c-.803 0-1.296.448-1.513.849v-.723H11.58c.019.407 0 4.36 0 4.36h1.202V9.54c0-.063.004-.123.018-.174.039-.123.129-.253.28-.253.198 0 .274.15.274.371v1.792h1.202V9.223c0-1.247-.269-2.004-1.5-2.004" />
//                   </svg>
//                 </a>
//               </li>

//               <li>
//                 <a href="#">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-instagram"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M12.127 0H3.873A3.88 3.88 0 0 0 0 3.873v8.254A3.88 3.88 0 0 0 3.873 16h8.254A3.88 3.88 0 0 0 16 12.127V3.873A3.88 3.88 0 0 0 12.127 0zM5.42 2.127h5.16a2.296 2.296 0 0 1 2.294 2.294v5.16a2.296 2.296 0 0 1-2.294 2.294h-5.16A2.296 2.296 0 0 1 3.126 9.58v-5.16A2.296 2.296 0 0 1 5.42 2.127zm0 1.083a1.213 1.213 0 0 0-1.21 1.21v5.16c0 .668.542 1.21 1.21 1.21h5.16a1.213 1.213 0 0 0 1.21-1.21v-5.16a1.213 1.213 0 0 0-1.21-1.21h-5.16zm4.5 3.176a1.436 1.436 0 1 1 0 2.873 1.436 1.436 0 0 1 0-2.873zm-3.525 1.37a.64.64 0 1 1 0 1.28.64.64 0 0 1 0-1.28z" />
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="sec quicklinks">
//             <h2>Quick Links</h2>
//             <ul>
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">FAQ</a>
//               </li>
//               <li>
//                 <a href="#">Privacy Policy</a>
//               </li>
//               <li>
//                 <a href="#">Help</a>
//               </li>
//               <li>
//                 <a href="#">Terms & Conditions</a>
//               </li>
//               <li>
//                 <a href="#">Contact</a>
//               </li>
//             </ul>
//           </div>

//           <div className="sec contact">
//             <h2>Contact Info</h2>
//             <ul className="info">
//               <li>
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-geo-alt"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M10.83 1a2 2 0 0 1 2 2v9.585l-1.485-1.486a2 2 0 0 0-2.828 0L5.586 14.12a2 2 0 0 1-2.829 0L1 14.586V3a2 2 0 0 1 2-2h7.83zm.333 2H3v10.793l1.293-1.293a1 1 0 0 0 0-1.414L3.707 9.207A1.993 1.993 0 0 1 3 8V3h8.163zM8 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
//                   </svg>
//                 </span>
//                 <span>Aurangabad,Bihar,India</span>
//               </li>

//               <li>
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-envelope"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M.5 3A2.5 2.5 0 0 1 3 .5h10A2.5 2.5 0 0 1 15.5 3v10a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 .5 13V3zm1 1v8l6-4-6-4zm1.992-2.456c.422.307.859.55 1.332.722v.734l-2.27 1.502-2.764-1.329L2.492 4.38V3.542c.465-.166.942-.413 1.433-.748l.067-.044zm11.017 1.5l-6 4 6 4v-8zM13.5 4.21l-2.764 1.328-2.27-1.502v-.734a4.739 4.739 0 0 1 1.332-.722l.067.044c.49.335.968.582 1.433.748v.838z" />
//                   </svg>
//                 </span>
//                 <span>amitkumaramu4040@.com</span>
//               </li>

//               <li>
//                 <span>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     fill="currentColor"
//                     className="bi bi-phone"
//                     viewBox="0 0 16 16"
//                   >
//                     <path d="M12.73 1.243a12.192 12.192 0 0 1-8.486 8.487l-.005-.005a.5.5 0 0 1 .144-.823l1.512-.504a1.993 1.993 0 0 0 .91-.91l.504-1.512a.5.5 0 0 1 .823-.144l.005.005a12.192 12.192 0 0 1-8.487-8.486A12.192 12.192 0 0 1 12.73 1.243zm1.414 1.415a11.19 11.19 0 0 0-7.89 7.889l-.004-.004a.5.5 0 0 1-.848.067l-1.513.504a.993.993 0 0 0-.452.451l-.504 1.513a.5.5 0 0 1-.067.848l.003.003a11.19 11.19 0 0 0 7.888-7.89A11.19 11.19 0 0 0 14.144 2.658z" />
//                     <path d="M11.257 3.768a1 1 0 0 1 1.976-.274A15.17 15.17 0 0 0 7.5 5.75a15.17 15.17 0 0 0-6.733-2.255 1 1 0 1 1 .437-1.943A17.177 17.177 0 0 1 8.5 4.75c.98 0 1.962-.106 2.933-.317a1 1 0 0 1-.176 1.335 1 1 0 0 1-1.274.033 13.14 13.14 0 0 1-2.51-.985zM5.5 6.75a13.284 13.284 0 0 1 4.98-1.71.5.5 0 0 1 .42.881A12.11 12.11 0 0 0 7.5 7.75a12.11 12.11 0 0 0-3.4-.58.5.5 0 0 1 .42-.881A13.284 13.284 0 0 1 5.5 6.75zm-2 2a11.91 11.91 0 0 1 8.96-1.71.5.5 0 0 1 .42.882A10.928 10.928 0 0 0 8.5 9.75c-.98 0-1.96-.106-2.94-.318a.5.5 0 1 1 .42-.882A11.91 11.91 0 0 1 3.5 8.75zm-2 2a9.658 9.658 0 0 1 7.315-1.71.5.5 0 0 1 .42.882A8.678 8.678 0 0 0 4.5 11.75a8.678 8.678 0 0 0-2.735-.538.5.5 0 0 1 .42-.882A9.658 9.658 0 0 1 1.5 10.75z" />
//                   </svg>
//                 </span>
//                 <span>+91 6203781673</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="mno">
//         <div className="footercontainer">
//           <div className="copy">&copy; 2023 All rights reserved.</div>
//           <div className="creators">
//             Created by: <a href="#">Amit Kumar</a> | Designed by:{" "}
//             <a href="#">Amit Kumar</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
