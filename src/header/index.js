import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";





// import React, { useState } from "react";
// import "./style.css";
// import { VscGrabber, VscClose } from "react-icons/vsc";
// import { Link } from "react-router-dom";
// import Themetoggle from "../components/themetoggle";
// import { logotext, socialprofils } from "../content_option";

// const Headermain = () => {
//   const [isActive, setActive] = useState(false);

//   const handleToggle = () => {
//     setActive(!isActive);
//     document.body.classList.toggle("ovhidden");
//   };

//   return (
//     <>
//       <header className={`site__header ${isActive ? "menu__open" : ""}`}>
//         <div className="d-flex align-items-center justify-content-between">
//           <Link className="navbar-brand nav_ac" to="/">
//             {logotext}
//           </Link>
//           <div className="d-flex align-items-center">
//             <Themetoggle />
//             <button className="menu__button nav_ac" onClick={handleToggle}>
//               {!isActive ? <VscGrabber /> : <VscClose />}
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className={`site__navigation ${isActive ? "menu__open" : ""}`}>
//         <div className="bg__menu h-100">
//           <div className="menu__wrapper">
//             <div className="menu__container p-3">
//               <ul className="the_menu">
//                 <li className="menu_item">
//                   <Link onClick={handleToggle} to="/" className="my-3">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="menu_item">
//                   <Link onClick={handleToggle} to="/portfolio" className="my-3">
//                     Portfolio
//                   </Link>
//                 </li>
//                 <li className="menu_item">
//                   <Link onClick={handleToggle} to="/about" className="my-3">
//                     About
//                   </Link>
//                 </li>
//                 <li className="menu_item">
//                   <Link onClick={handleToggle} to="/contact" className="my-3">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
//           <div className="d-flex">
//             <a href={socialprofils.facebook}>Facebook</a>
//             <a href={socialprofils.github}>Github</a>
//             <a href={socialprofils.twitter}>Twitter</a>
//           </div>
//           <p className="copyright m-0">
//             copyright__Ankit Prajapati{logotext}
//           </p>
//         </div>
//       </div>

//       <div className="br-top"></div>
//       <div className="br-bottom"></div>
//       <div className="br-left"></div>
//       <div className="br-right"></div>
//     </>
//   );
// };

// export default Headermain;


















const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.github}>Github</a>
            <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright__Ankit Prajapati{logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

// const Headermain = () => {
//   const [isActive, setActive] = useState(false);

//   const handleToggle = () => {
//     setActive(!isActive);
//     document.body.classList.toggle("ovhidden");
//   };

//   return (
//     <>
//       <header className={`site__header ${isActive ? "menu__open" : ""}`}>
//         <div className="d-flex align-items-center justify-content-between">
//           <Link className="navbar-brand nav_ac" to="/">
//             {logotext}
//           </Link>
//           <div className="d-flex align-items-center">
//             <Themetoggle />
//             <button className="menu__button nav_ac" onClick={handleToggle}>
//               {!isActive ? <VscGrabber /> : <VscClose />}
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className={`site__navigation ${isActive ? "menu__open" : ""}`}>
//         {/* Your menu content here */}
//       </div>

//       {/* Other content */}
//     </>
//   );
// };




export default Headermain;
