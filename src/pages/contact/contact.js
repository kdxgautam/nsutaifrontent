import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='flex items-center justify-center py-10'>
        <iframe title='NSUT.AI' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6584482202607!2d77.03538977315189!3d28.610021575677052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1708434058845!5m2!1sen!2sin" height="450" style={{border:'0', width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
    <div className='px-4 bg-transparent'>
 

<div class="flex min-h-screen items-center justify-start bg-transparent ">
  <div class="mx-auto w-full max-w-lg">
    <h1 class="text-4xl font-medium">Contact us</h1>
    <p class="mt-3">Email us at help@domain.com or message us here:</p>

    <form action="https://formspree.io/f/xrgnqvzw" method='POST' class="mt-10">
    

      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="relative z-0">
          <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-100 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
        </div>
        <div class="relative z-0">
          <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-100 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
        </div>
        <div class="relative z-0 col-span-2">
          <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-100 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
        </div>
      </div>
      <button type="submit" class="mt-5 rounded-md px-10 py-2 bg-white text-black">Send Message</button>
    </form>
  </div>
</div>
    </div>
    </>

  )
}

export default Contact