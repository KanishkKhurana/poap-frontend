import React from 'react'
import HomeSearch from "../assets/images/homeSearch.svg"
import HomeRegister from "../assets/images/homeRegister.svg"

export default function SearchorRegister() {
  return (
    <div id="services" className='xl:py-20 text-white flex flex-col xl:flex-row xl:mx-20 mx-3 mt-5 gap-10 xl:gap-44 justify-center'>
        <div className='xl:basis-1/2'>
            <h1 className='bg-[#11A97D] rounded-full px-3 py-3 font-bold text-center'>Search POAP for your event</h1>
            <div className='bg-[#6610F2] p-3 rounded-xl flex justify-center gap-3 my-5'>
                <input type="text" className='bg-white text-[#1e1e1e] rounded-xl px-3' placeholder='Please enter event name' />
                <button className='btn'>Search</button>
            </div>
            <div className='text-center'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt, minus sunt suscipit, reiciendis nam a consequatur possimus ipsum libero aut ex. Animi optio vitae, iste deleniti soluta ipsa veniam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt, minus sunt suscipit, reiciendis nam a consequatur possimus ipsum libero aut ex. Animi optio vitae, iste deleniti soluta ipsa veniam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt, minus sunt suscipit, reiciendis nam a consequatur possimus ipsum libero aut ex. Animi optio vitae, iste deleniti soluta ipsa veniam!

                </p>
            </div>
            <div className='flex items-center justify-center mt-5'><img src={HomeSearch} alt="POVAP" /></div>
        </div>        
        <div className='xl:basis-1/2'>
            <h1 className='bg-[#6610F2] rounded-full px-3 py-3 font-bold text-center'>Add POAP for your event</h1>
            
            <div className='text-center my-5'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt, minus sunt suscipit, reiciendis nam a consequatur possimus ipsum libero aut ex. Animi optio vitae, iste deleniti soluta ipsa veniam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt, minus sunt suscipit, reiciendis nam a consequatur possimus ipsum libero aut ex. Animi optio vitae, iste deleniti soluta ipsa veniam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nesciunt, minus sunt suscipit, reiciendis nam a consequatur possimus ipsum libero aut ex. Animi optio vitae, iste deleniti soluta ipsa veniam!

                </p>
            </div>
              <div className='flex justify-center'>  <button className='btn bg-[#11A97D] hover:bg-[#6610F2] text-white'>Add POAP</button></div>
            <div className='flex items-center justify-center mt-5'><img src={HomeRegister} alt="POVAP" /></div>
        </div>        
    </div>
  )
}
