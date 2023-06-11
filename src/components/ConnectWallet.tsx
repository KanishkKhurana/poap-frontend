import React from 'react';
import { VenomConnect } from 'venom-connect';

type Props = {
  venomConnect: VenomConnect | undefined;
};

function ConnectWallet({ venomConnect }: Props) {
  const login = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };
  return (
    <div>
      <>
        <h1 className='text-red-500'>My Venom Crowdsale</h1>
        <p>Connect Wallet to continue</p>
        <button className="btn" onClick={login}>
          Connect wallet
        </button>
      </>
    </div>
  );
}
  
export default ConnectWallet;