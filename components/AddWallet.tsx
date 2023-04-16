import { useState } from "react"

export const AddWallet = (props) => {
    const [ address, setAddress ] = useState<string>('');
    const [ walletList, setWalletList ] = useState<Array<string>>([]);


    // const addWallet = (e) => {
    //     e.preventDefault();
    //     const newList = walletList.concat([address]);
    //     setWalletList(newList);
    //     props.setWallets(newList);
    //     setAddress('');
    // }

    return (
        <div className="flex flex-col gap-4">
            <h1>Add one or more wallets</h1>
            <div className="flex flex-row gap-4" /*onSubmit={addWallet}*/>
            <input 
                className="p-2 px-4 text-black"
                placeholder="0x123..., address.eth..."
                onChange={(e) => {setAddress(e.target.value); props.setWallets(e.target.value)}}
                value={address}
            />
            </div>
            {/* <div className="text-white">
                {walletList.map(address => (
                    <p>{address}</p>
                ))}
            </div> */}
        </div>
    )
}