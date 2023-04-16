import { useState } from "react"

export const AddWallet = (props) => {
    const [ address, setAddress ] = useState<string>('');


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
        </div>
    )
}