import React from 'react'

const Button = (props) => {
    const {bgColor, label, onClick, border, bgOnhover,textColor, textOnhover}= props
  return (
    <button className={`${bgColor} mx-1 ${border} hover:${textOnhover} ${textColor} px-4 py-2 rounded-full transition duration-200 ease-in-out hover:${bgOnhover}  focus:outline-none`} onClick={()=>{onClick()}}>
        {label}
    </button>
  )
}

export default Button