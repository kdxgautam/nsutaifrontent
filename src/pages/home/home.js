import React from 'react'
import HomeCardsContainer from './components/homecardscontainer'
import HomeNews from './components/homenews';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='' >
            <section id='Hero' className='bg-gradient-to-b from-[#000000] to-[#030612]'>
                <video src="/assets/videos/rips.mp4" autoPlay={true} muted className='w-full md:h-[90vh] lg:h-[90vh] sm:h-[40vh] flex px-2' />
                
            </section>
            <div className=' bg-gradient-to-r from-[#030612]  via-[#030612]  to-[#030612] h-[50vh] flex justify-center items-center'>
                <h1 className=' lg:text-[3rem] md:text-[2rem] w-1/3'>What is Happening at Nsut.AI ?</h1>
                <img src="/images/HomeRobot.png" alt="" className='h-2/3' />
            </div>


            {/* background container  */}
            <div className='bg-gradient-to-b from-[#030612] via-[#151E3A] to-[#030612] pb-20'>

                <HomeNews />
                <section id='events' className='flex mb-60 mt-20 justify-center items-center flex-col'>
                    <h1 className=' text-2xl my-2 font-light underline underline-offset-4'>
                        <Link to="/events" >
                    Events
                        </Link>
                    </h1>
                    <HomeCardsContainer type="events" link="/event" />
                </section >
                <section id='blogs' className='flex my-60 justify-center items-center flex-col'>
                    <h1 className=' text-2xl my-2 font-light underline underline-offset-4'><Link to="/blogs">
                    Blogs
                        </Link></h1>
                    <HomeCardsContainer type="blogs" link="/blog" />
                </section >
                <section id='projects' className='flex my-60 justify-center items-center flex-col'>

                    <h1 className=' text-2xl my-2 font-light underline underline-offset-4'>
                    <Link to="/projects">
                    Projects
                        </Link>
                    </h1>
                        
                    <HomeCardsContainer type="projects" link="/project" />
                </section >
                <section id='achievements' className='flex mt-60 justify-center items-center flex-col'>
                    <h1 className=' text-2xl my-2 font-light underline underline-offset-4'>Achievements</h1>
                    <HomeCardsContainer type="achievements" link="/achievement" />
                </section>
            </div>
        </div>
    )
}

export default Home