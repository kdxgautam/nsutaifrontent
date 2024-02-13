const Hero = () => {
    return (
        <div className="mt-9 pb-9 mb-9">
        <div class="px-2 lg:flex lg:flex-row lg:items-center py-9 ">
        <div class="w-full lg:w-1/2">
            <img
              src="/images/robo.png"
              alt="robot"
              class=" w-full  object-cover"/>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="my-10 lg:my-0 lg:px-10">
              <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-center">
                Lorem ipsum, dolor sit amet conse.
              </h2>
              <p class="mt-4 max-w-xl text-base leading-relaxed text-gray-300 text-center mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                nesciunt eos facilis debitis voluptas iure consectetur odit fugit
                voluptate recusandae?
              </p>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Hero