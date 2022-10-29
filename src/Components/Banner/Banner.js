import React from 'react'
import Arrow from '../assets/Arrow'
import './Banner.css'
function Banner() {
  const categoriesItems = ['Cars', 'Motorcycles', 'Mobile Phones', 'For Sale: Houses & Apartments', 'Scooters', 'Commercial & Other Vehicles', 'For Rent: Houses & Apartments'];


  return (
    <div className='banner'>
      <div className="category-list">

        <div className='categories'>
          <h4>ALL CATEGORIES</h4>
          <Arrow />
        </div>
        <div className="items">
          {categoriesItems.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
      <div className="image">

      </div>
    </div>
  )
}

export default Banner