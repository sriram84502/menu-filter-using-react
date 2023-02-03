import React from 'react'

const Nav = (props) => {
  return (
    <>
        <div className="btn-container">
        <button type="button" onClick={props.all} className="filter-btn" data-id="all">all</button>
        <button type="button" onClick={props.break} className="filter-btn" data-id="breakfast">
          breakfast
        </button>
        <button type="button" onClick={props.lunch} className="filter-btn" data-id="lunch">lunch</button>
        <button type="button" onClick={props.shakes} className="filter-btn" data-id="shakes">
          shakes
        </button>
       </div>
    </>
  )
}

export default Nav