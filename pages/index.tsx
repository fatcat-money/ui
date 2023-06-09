import { AddWallet } from '@/components/AddWallet'
import { CurrencyPicker } from '@/components/CurrencyPicker'
import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const [ wallets, setWallets ] = useState('');
  const [ currency, setCurrency ] = useState('USD');
  const [ url, setUrl ] = useState('');

  const [ loading, setLoading ] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-start justify-start gap-4 p-24">
      <div className="flex flex-row items-start justify-around gap-12">
      <AddWallet setWallets={setWallets}/>
      <CurrencyPicker setCurrency={setCurrency} />
      </div>
      <div className="flex justify-center">
      <button
        className="border-2 p-4"
        onClick={ async () => {

          setLoading(true);

          const response = await fetch("http://65.109.81.69:3001/tax", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: uuidv4(),
              wallets: wallets.split(",").map(w => w.trim()),
              currency
            }),
          });
          const resJson = await response.json();
          const favaUrl = resJson.url;
          setUrl(favaUrl);
          setLoading(false);
        }}
      >Calculate</button>
      </div>
      <div>
        {url.includes('http') &&
          <a href={url}> <span style={{color: 'yellow'}}>Click here</span> to see your report.</a>
        }
        {url === '' ? '' :
         !url.includes('http') && 'An error has occurred'
        }
      </div>
      
      {loading &&
      <div>
        <video autoPlay loop muted src={"/loading.mp4"}  />
      </div>
      }
    </main>
  )
}
