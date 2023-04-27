import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
   return (
      <header>
         <div className="container row justify-content-between align-items-center">
            <div className="logo">
               <img src="data:image/png;base64,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" alt="" />
            </div>
            <nav>
               <div className="navLinks">
                  <Link to='/'>Home</Link>
                  <Link to='/About'>About</Link>
                  <Link to='/ContactUs'>ContactUs</Link>
                  <Link to='/Service'>Service</Link>
                  <Link to='/Products'>Products</Link>
                  {/* <Link to='/AddToCart'>Cart</Link> */}
               </div>
            </nav>
         </div>
      </header >
   )
}

export default Nav
