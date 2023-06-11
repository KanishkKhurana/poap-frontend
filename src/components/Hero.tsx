import React from 'react'
import HomeHero from "../assets/images/homeHero.svg"

interface window {
    my_modal_3: any; // 👈️ turn off type checking
  }


export default function Hero() {
  return (
    <div className='mt-6 xl:mt-20 text-white flex flex-col xl:flex-row border-b gap-10 xl:gap-0'>
        <div className='flex flex-col xl:basis-1/2 justfify-center xl:ml-32 xl:mt-24'>
            <div className='text-center xl:text-left'>
                <h1 className='xl:text-7xl text-3xl font-bold'><span className='tracking-widest'>POVAP</span> is for</h1>
                <h1 className='xl:text-8xl text-5xl font-bold text-[#11A97D]'>Communities</h1>
                <div className='xl:w-3/4 py-4'>
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae inventore eos sunt alias tenetur quod, deleniti, libero soluta non aliquid officiis accusantium dolorum esse temporibus doloribus aspernatur, iste labore eveniet!</p>
                    </div>
            </div>
            <div className='flex justify-center xl:justify-start gap-5'>
                <button className='btn bg-gradient-to-r from-[#11A97D] to-[#6610F2] text-white' onClick={()=>(window as any).my_modal_2.showModal()}>Add Poap</button>  
                <dialog id="my_modal_2" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Hello Add Poap!</h3>
                        <p className="py-4">Press ESC key or click outside to close</p>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

              
                <button className='btn bg-gradient-to-r from-[#6610F2] to-[#11A97D] text-white' onClick={()=>(window as any).my_modal_3.showModal()}>Claim Poap</button>
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Hello Claim Poap!</h3>
                        <p className="py-4">Press ESC key or click outside to close</p>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                
            </div>
        </div>
        <div className='basis-1/2'>
            <img className='' src={HomeHero} alt="POVAP is a proof of attendance protocol on venom blockchain" />
        </div>
    </div>
  )
}
