import { useState } from "react"

export const AddWallet = () => {
    const [ address, setAddress ] = useState<string>('');
    const [ walletList, setWalletList ] = useState<Array<string>>([]);

    const addWallet = (e) => {
        e.preventDefault();
        const newList = walletList.concat([address]);
        setWalletList(newList);
        setAddress('');
    }

    return (
        <div className="flex flex-col gap-4">
            <h1>Add a Wallet</h1>
            <form className="flex flex-row gap-4" onSubmit={addWallet}>
            <input 
                className="p-2 px-4 text-black"
                placeholder="0x123..., address.eth..."
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />
            </form>
            <div className="text-white">
                {walletList.map(address => (
                    <p>{address}</p>
                ))}
            </div>
        </div>
    )
}