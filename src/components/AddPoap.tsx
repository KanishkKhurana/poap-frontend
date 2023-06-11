import React, {useState, useContext} from 'react'
import axios from 'axios'
import { VenomContext } from '../context/VenomContext';

export default function AddPoap() {
    const {currentAccount, setCurrentAccount} = useContext(VenomContext);

    const [fileImg, setFileImg] = useState<any>(null)

    const sendFileToIPFS = async (e: any) => {
        e.preventDefault();
        if(!currentAccount) return alert("Please connect your wallet first");
        if (fileImg) {
            try {

                const formData = new FormData();
                formData.append("file", fileImg);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': `${process.env.REACT_APP_PINATA_API}`,
                        'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_SECRET}`,
                        "Content-Type": "multipart/form-data"
                    },
                });

                const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
             console.log(ImgHash); 
//Take a look at your Pinata Pinned section, you will see a new file added to you list.   



            } catch (error) {
                alert("Error Sending File to IPFS. Please Try again ")
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
    }

  return (
    <form className=''>
<input type="file" onChange={(e:any) =>setFileImg(e.target.files[0])} required />
<button type='submit' className='btn' onClick={sendFileToIPFS} >Mint NFT</button>            
</form>
  )
}


// wallet 
// event name
// date
// qty