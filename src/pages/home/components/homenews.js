import { IoNewspaperOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
const host = process.env.REACT_APP_BACKEND

const HomeNews = () => {
    const [news, setnews] = useState([])
    const fetchnews = async () => {
    
        const res = await fetch(`${host}/news/all`, {
            method: "GET",
            headers: {
                token: localStorage.getItem("AdminToken")
            }
        })
        const resdata = await res.json()
        console.log(resdata)
        setnews(resdata)
    }
    useEffect(()=>{
        fetchnews()
    },[])
    return (
        <section id='news' className='flex overflow-y-auto flex-col w-2/3 m-auto rounded-3xl p-14 h-[60vh] bg-[#0B122F]' >
            <div className=' text-3xl mb-5'>
                <IoNewspaperOutline />
            </div>
            <ul className='flex list-disc h-full flex-col w-[98%]'>
                {/* this contains news  */}

                <hr />
                {news.length>0 && news.map((e) =>
                    <>
                        <li className='w-full cursor-pointer mt-1 mb-10'>
                            <div className='flex'>


                                <div><p className=' font-bold mr-2'>{e.title}:</p>{e.description}
                                </div>
                            </div>
                        </li>

                        <hr />
                    </>
                )}
              
            </ul>
        </section>
    )
}

export default HomeNews