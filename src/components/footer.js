import React from 'react'

const Footer = () => {
    return (
        <div className="flex justify-between color bg-black text-sm ">
            <div className="flex-column">
                <img className="w-16 " src="../white.png" ></img>
                <h6 className="text-white text-left font-thin font-inter" >All trademarks, logos, and brand <br/> names are
<br/>property of their respective owners.</h6>

            </div>
            <div className="flex-column text-sm ">
                <h6 className="font-inter text-white font-thin">© 2024 NSUTAI 
All Rights Reserved.</h6>
            </div>
            <div className="flex-column text-sm">
                <h6 className="font-inter font-thin text-white">Find us</h6>
                <div>
                    <img src="https://icons8.com/icon/447/linkedin"></img>
                    <img src="https://icons8.com/icon/118468/facebook"></img>
                    <img src="https://icons8.com/icon/106562/github"></img>
                    <img src="https://icons8.com/icon/118468/facebook"></img>
                </div>
                <h6 className="font-inter font-thin text-white">nsutai@gmail.com</h6>
            </div>
        </div>
    )


}

export default Footer