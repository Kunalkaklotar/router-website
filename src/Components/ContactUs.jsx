import React from 'react'
import Nav from './Nav'
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <Nav />
      <section className="home-section">
        <div className="overlay">
          <div className="container">
            <h1>ContectUs Page</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore a
              eveniet deleniti obcaecati perspiciatis voluptatem nesciunt
              dolores. Voluptate non unde quas ipsam error illum fuga ea
              corrupti? Necessitatibus natus aliquid odio fuga nobis hic, facere
              porro quidem consectetur maxime exercitationem nulla voluptatibus
              atque?
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
