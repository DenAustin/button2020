import React from 'react'

function Button1() {

 let  {
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
  } = this.Button

  this.state = {
    STYLES : [
      "btn--primary--solid",
      "btn--warning--solid",
      "btn--danger--solid",
      "btn--success--solid",
      "btn--primary--outline",
      "btn--warning--outline",
      "btn--danger--outline",
      "btn--success--outline"
    ]
  };

  function changeBtn(e) {
    e.target.style.backgroundColor.contains('var(--primary)') ? e.target.style.backgroundColor = var(--success) : e.target.style.backgroundColor;
      
    
  }

  return (
    <button 
      id={`btn1`} onClick={changeBtn}>
      Load More
    </button>
  )
}

export default Button1
