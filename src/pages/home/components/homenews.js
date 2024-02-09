import React from 'react'

import { IoNewspaperOutline } from "react-icons/io5";

const HomeNews = () => {
  return (
    <section id='news' className='flex overflow-y-auto flex-col w-2/3 m-auto rounded-3xl p-14 h-[60vh] bg-[#0B122F]' >
                    <div className=' text-3xl mb-5'>
                        <IoNewspaperOutline />
                    </div>
                    <ul className='flex list-disc h-full flex-col w-[98%]'>
                        {/* this contains news  */}
                        <hr />
                        <li className='w-full mt-1 mb-10'>
                            <div className='flex'>

                                
                                <p><p className=' font-bold mr-2'>Title:</p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab ratione adipisci illum quidem unde velit fuga accusantium corporis cumque consequatur voluptatum eaque, amet fugiat exercitationem atque ut nisi error!</p>
                            </div>
                        </li>
                        <hr />
                        <li className='w-full mt-1 mb-10'>
                            <div className='flex'>

                                
                                <p><p className=' font-bold mr-2'>Title:</p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab ratione adipisci illum quidem unde velit fuga accusantium corporis cumque consequatur voluptatum eaque, amet fugiat exercitationem atque ut nisi error!</p>
                            </div>
                        </li>
                        <hr />
                        <li className='w-full mt-1 mb-10'>
                            <div className='flex'>

                                
                                <p><p className=' font-bold mr-2'>Title:</p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab ratione adipisci illum quidem unde velit fuga accusantium corporis cumque consequatur voluptatum eaque, amet fugiat exercitationem atque ut nisi error!</p>
                            </div>
                        </li>
                        <hr />
                        <li className='w-full mt-1 mb-10'>
                            <div className='flex'>

                                
                                <p><p className=' font-bold mr-2'>Title:</p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab ratione adipisci illum quidem unde velit fuga accusantium corporis cumque consequatur voluptatum eaque, amet fugiat exercitationem atque ut nisi error!</p>
                            </div>
                        </li>

                    </ul>
                </section>
  )
}

export default HomeNews