import React from 'react'
import "./button.css"

const STYLES =[
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline"
]

const Button2 = ({
  children,
  type,
  buttonStyle,
  onClick,
  buttonSize
}) => {

  function changeBtn(e) {
    if(e.target.style.backgroundColor.contains('var(--primary)')) {
        e.target.parentElement.parentElement.remove();
      
    }
  }


  return (
    <button 
      className={`button2  `} 
      type={type}>
      
      Load More
    </button>
  )
}

export default Button2

