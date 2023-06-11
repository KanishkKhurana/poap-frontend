import React from 'react'
import HomeWork1 from "../assets/images/homeWork1.svg"
import HomeWork2 from "../assets/images/homeWork2.svg"

export default function Work() {
  return (
    <div className='gradient-bg-work'>
    <div id="about" className='relative text-white xl:py-20 py-8'>
        <div className='bg-gradient-to-b from-[#11A97D] to-[#6610F2] p-0.5 rounded-xl xl:mx-40 mx-3'>
            <h1 className='text-2xl text-center xl:text-7xl bg-[#0F1116] rounded-xl font-bold py-1'>How does POVAP work ?</h1>
        </div>
        <div className='absolute right-0 '>
            <img src={HomeWork1} alt="POVAP" className='w-2/3 mt-12 hidden xl:block' />
        </div>
        <div className='absolute bottom-10 left-12'>
            <img src={HomeWork2} alt="Venom is the best" className='w-2/3 mt-12 hidden xl:block' />
        </div>
        <div className='flex mt-10 flex-col items-center justify-center xl:mx-20 gap-12 mx-3'>
            <div >
                <div className='p-3 xl:p-5 xl:text-5xl fot-bold bg-[#11A97D] rounded-3xl w-fit'><h1>1</h1></div>
                <div className='xl:w-1/2 text-sm xl:text-lg'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, similique! Earum ex omnis magnam, illum aperiam eveniet dolore nam doloribus rem modi delectus officia vitae qui explicabo corrupti distinctio a.</p></div>
            </div>
            <div className='flex flex-col  xl:items-center'>
                <div className='p-3 xl:p-5 xl:text-5xl fot-bold bg-[#6610F2] flex  jus rounded-3xl w-fit'><h1>2</h1></div>
                <div className='xl:w-1/2 text-sm xl:text-lg'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, similique! Earum ex omnis magnam, illum aperiam eveniet dolore nam doloribus rem modi delectus officia vitae qui explicabo corrupti distinctio a.</p></div>
            </div>
            <div className='flex flex-col  xl:items-end'>
                <div className='p-3 xl:p-5 xl:text-5xl fot-bold bg-[#11A97D] rounded-3xl w-fit'><h1>3</h1></div>
                <div className='xl:w-1/2 text-sm xl:text-lg'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, similique! Earum ex omnis magnam, illum aperiam eveniet dolore nam doloribus rem modi delectus officia vitae qui explicabo corrupti distinctio a.</p></div>
            </div>
        </div>
    </div>
</div>
  )
}
