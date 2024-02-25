import React from 'react'

const Button = (props) => {
    const {bgColor, children,  onclick, border, bgOnhover,textColor, textOnhover, additional}= props
    
  return (
    <button className={`${bgColor} mx-1 ${border} hover:${textOnhover} ${textColor} ${additional} px-4 py-2 rounded-full transition duration-200 ease-in-out hover:${bgOnhover} focus:outline-none`} onClick={()=>onclick}>
        {children}
    </button>
  )
}

export default Button