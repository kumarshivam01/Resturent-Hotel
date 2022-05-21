import React from 'react'
import { useState } from 'react'
import  './Detail.css'
import Rating from './Rating'
function Detail(props) {
  // console.log(props.data)
  
  return (
    <>
      <div className="Detail">

        {
          props.data.map((value) => {
            {/* console.log(value) */}
            return (
              <div key={value._id} style={{ width:'70%', margin:'auto'}}>
                <div className='Detail-image'>
                  <img src={value.image} alt="" />
                </div>
                <div className='Detail-data'>
                  <div style={{fontSize:'20px', fontWeight:'bold'}}>{value.name}</div>
                  <div style={{fontSize:'17px', fontWeight:'500'}}>{value.cuisine}</div>
                  <div style={{fontSize:'15px', fontWeight:'500'}}>Cost ₹ {value.cost} for one</div>
                </div>
                <div className='Detail-review'>
                  <Rating value={value.rating} />
                  <div style={{display:'flex', justifyContent:'space-around',fontSize:'18px'}}>
                  <div>{value.votes} votes</div>
                  <div>{value.reviews} reviews</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Detail