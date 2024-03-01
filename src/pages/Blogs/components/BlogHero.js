import React from "react";

const BlogHero = () => {
  return (
    <section className="mt-9 pb-9 mb-9">
      <div class="px-2 lg:flex lg:flex-row lg:items-center py-9 ">
        <div class="w-full lg:w-1/2">
          <div class="my-10 lg:my-0 lg:px-10">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-center">
              Dive into a World of Insight
            </h2>
            <p class="mt-4 max-w-xl text-base leading-relaxed text-gray-300 text-center mx-auto">
              Embark on a Captivating Journey: NSUT.AI Blog Unveiling the
              Marvels of AI, One Post at a Time
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <img
            src="/images/blog-hero.png"
            alt="robot"
            class=" w-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
