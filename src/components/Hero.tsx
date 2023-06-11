import React from 'react'
import HomeHero from "../assets/images/homeHero.svg"
import AddPoap from './AddPoap'
import TextTransition, { presets } from "react-text-transition";


const TEXTS = [
    "Communities",
    "Fun",
    "Networking",
    "Growth"
  ];

export default function Hero() {
    const [index, setIndex] = React.useState<number>(0);
    React.useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          1500 
        );
        return () => clearTimeout(intervalId);
      }, []);
  return (
    <div className='mt-6 xl:mt-20 text-white flex flex-col xl:flex-row border-b gap-10 xl:gap-0 gradient-bg-welcome'>
        <div className='flex flex-col xl:basis-1/2 justfify-center xl:ml-32 xl:mt-24'>
            <div className='text-center xl:text-left'>
                <h1 className='xl:text-7xl text-3xl font-bold'><span className='tracking-widest'>POVAP</span> is for</h1>
                <h1 className='xl:text-8xl text-5xl font-bold '><TextTransition className='text-[#11A97D] ' springConfig={presets.stiff}>{TEXTS[index % TEXTS.length]}</TextTransition></h1>
                <div className='xl:w-3/4 py-4 mx-3 xl:mx-0'>
                    <p className=''>POVAPs are a great way to show off your experiences and connect with other people who have been to the same events. They can also be used to build community and foster belonging. Whether you're a gamer, a crypto enthusiast, or just someone who loves to attend events, POVAP is a great way to commemorate your experiences and make them last a lifetime.</p>
                    </div>
            </div>
            <div className='flex justify-center xl:justify-start gap-5'>
                <button className='btn bg-gradient-to-r from-[#11A97D] to-[#6610F2] text-white' onClick={()=>(window as any).my_modal_2.showModal()}>Add Poap</button>  
                <dialog id="my_modal_2" className="modal ">
                    <form method="dialog" className="modal-box border-[#11A97D] border-2 ">
                        <AddPoap />
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
