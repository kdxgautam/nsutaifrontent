import React from 'react'
import HomeCardsContainer from './components/homecardscontainer'
import { IoNewspaperOutline } from "react-icons/io5";
const Home = () => {
    return (
        <div className='' >
            <section id='Hero' className='bg-gradient-to-b from-[#000000] to-[#030612]'>
                <img src="/images/HomeHero.png" alt="" className='w-full md:h-[70vh] lg:h-[70vh] sm:h-[40vh] flex px-2' />
            </section>
            <div className=' bg-gradient-to-r from-[#030612]  via-[#030612]  to-[#030612] h-[50vh] flex justify-center items-center'>
                <h1 className=' text-[3.5rem] w-1/3'>What is Happening at Nsut.AI ?</h1>
                <img src="/images/HomeRobot.png" alt="" className='h-2/3' />
            </div>
            <div className='bg-gradient-to-b from-[#030612] via-[#151E3A] to-[#030612]'>

                <section id='news' className='flex overflow-y-auto flex-col w-2/3 m-auto rounded-3xl p-14 h-[60vh] bg-[#0B122F]' >
                    <div className=' text-3xl mb-5'>
                        <IoNewspaperOutline />
                    </div>
                    <ul className='flex list-disc h-full flex-col w-[98%]'>
                        {/* this contains news  */}
                        <hr />
                        <li className='w-full mt-1 mb-10'>
                            <div className='flex'>

                                <p className=' font-bold mr-2'>Title:</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab ratione adipisci illum quidem unde velit fuga accusantium corporis cumque consequatur voluptatum eaque, amet fugiat exercitationem atque ut nisi error!</p>
                            </div>
                        </li>
                        <hr />
                        <li className='w-full mt-1 mb-10'>
                            <div className='flex'>

                                <p className=' font-bold mr-2'>Title:</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab ratione adipisci illum quidem unde velit fuga accusantium corporis cumque consequatur voluptatum eaque, amet fugiat exercitationem atque ut nisi error!</p>
                            </div>
                        </li>
                        <hr />
                        <li className='w-full mt-1 mb-10'>
                            <div className='flex'>

                                <p className=' font-bold mr-2'>Title:</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab ratione adipisci illum quidem unde velit fuga accusantium corporis cumque consequatur voluptatum eaque, amet fugiat exercitationem atque ut nisi error!</p>
                            </div>
                        </li>
                        <hr />
                        <li className='w-full mt-1 mb-10'>
                            <div className='flex'>

                                <p className=' font-bold mr-2'>Title:</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab ratione adipisci illum quidem unde velit fuga accusantium corporis cumque consequatur voluptatum eaque, amet fugiat exercitationem atque ut nisi error!</p>
                            </div>
                        </li>

                    </ul>
                </section>
                <section id='events' className='flex mb-60 mt-20 justify-center items-center flex-col'>
                    <h1 className=' text-2xl my-2 font-light underline underline-offset-4'>Events</h1>
                    <HomeCardsContainer />
                </section >
                <section id='blogs' className='flex my-60 justify-center items-center flex-col'>
                    <h1 className=' text-2xl my-2 font-light underline underline-offset-4'>Blogs</h1>
                    <HomeCardsContainer />
                </section >
                <section id='projects' className='flex my-60 justify-center items-center flex-col'>

                    <h1 className=' text-2xl my-2 font-light underline underline-offset-4'>Projects</h1>
                    <HomeCardsContainer />
                </section >
                <section id='achievements' className='flex my-60 justify-center items-center flex-col'>
                    <h1 className=' text-2xl my-2 font-light underline underline-offset-4'>Achievements</h1>
                    <HomeCardsContainer />
                </section>
            </div>
        </div>
    )
}

export default Home