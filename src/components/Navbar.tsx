import React, {useState, useEffect} from 'react'
import Logo from "../assets/images/Logo.svg"
import { VenomConnect } from 'venom-connect';
import { disconnect } from 'process';


type Props = {
    venomConnect: VenomConnect | undefined;
  };

export default function Navbar({ venomConnect }: Props) {


    const ConnectWallet = async () => {
        if (!venomConnect) return;
        await venomConnect.connect();
      };


      const [venomProvider, setVenomProvider] = useState<any>();
  const [address, setAddress] = useState<any>();
  // This method allows us to gen a wallet address from inpage provider
  const getAddress = async (provider: any) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.address.toString();
  };
  // Any interaction with venom-wallet (address fetching is included) needs to be authentificated
  const checkAuth = async (_venomConnect: any) => {
    const auth = await _venomConnect?.checkAuth();
    if (auth) await getAddress(_venomConnect);
  };
  // This handler will be called after venomConnect.login() action
  // connect method returns provider to interact with wallet, so we just store it in state
  const onConnect = async (provider: any) => {
    setVenomProvider(provider);
    await onProviderReady(provider);
  };
  // This handler will be called after venomConnect.disconnect() action
  // By click logout. We need to reset address and balance.
  const onDisconnect = async () => {
    venomProvider?.disconnect();
    setAddress(undefined);
  };
  // When our provider is ready, we need to get address and balance from.
  const onProviderReady = async (provider: any) => {
    const venomWalletAddress = provider ? await getAddress(provider) : undefined;
    setAddress(venomWalletAddress);
  };
  useEffect(() => {
    // connect event handler
    const off = venomConnect?.on('connect', onConnect);
    if (venomConnect) {
      checkAuth(venomConnect);
    }
    // just an empty callback, cuz we don't need it
    return () => {
      off?.();
    };
  }, [venomConnect]);

  return (
    <div className='px-3 xl:px-20 py-5 xl:py-12 relative'>
    <nav className='bg-[#6610F2] rounded-full   p-1.5 flex justify-end'>    
        <div className='absolute left-10 xl:left-44 top-1 xl:top-3 w-1/4 xl:w-[10%]'>
            <img src={Logo} alt="Proof of venom attendance protocol" className='' />
        </div>
        <div className='flex justify-between xl:pr-12 pr-3 xl:basis-1/2 '>
            <div className='text-white font-semibold hidden xl:flex gap-12 items-center'>
                <a href="#services" className='hover:underline underline-offset-4 hover:shadow-xl duration-200 shadow-purple-400'>Services</a>
                <a href="#about" className='hover:underline underline-offset-4 hover:shadow-xl duration-200 shadow-purple-400'>About</a>
            </div>
            <div>
                <button className='bg-[#11A97D] text-white xl:px-5 p-1 px-2 text-sm xl:text-base rounded-xl xl:btn xl:bg-[#11A97D] xl:text-white' onClick={address ? onDisconnect : ConnectWallet}>{address? address.slice(0,5)+"..."+address.slice(address.length-3): "Connect Wallet"}</button>
            </div>    
        </div>
    </nav>
    </div>
  )
}
