const ProjectCard = ()=>{
    return(
        <div className="bg-black h-fit  min-h-[400px]: text-white rounded-xl mx-[30px] my-[40px]">
            <div className="rounded-t-xl ">
                <img className= "w-[100%] h-50 inline-block rounded-xl"src="/images/img.jpg" alt="Project Image" />
            </div>
            <div className="flex flex-col justify-center items-left gap-6 p-7">
                <h2 className="mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                <h5 className="font-sans text-white antialiased font-light leading-relaxed text-inherit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium non minima alias nobis dolorem dolore facere! Totam illum ipsam voluptatem, qui eos suscipit saepe tempora. Dignissimos dolore vitae molestiae!</h5>
                <button className="align-middle w-[125px] flex  select-none font-sans font-bold text-center uppercase transition-all border-2 border-transparent disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#415ED0] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-black-900/20 hover:bg-transparent hover:border-2 hover:border-[#415ED0] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
                Read More
                </button>
            </div>
        </div>
    )
}

export default ProjectCard