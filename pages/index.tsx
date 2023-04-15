import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AddWallet } from '@/components/AddWallet'
import { CurrencyPicker } from '@/components/CurrencyPicker'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start gap-4 p-24">
      <div className="flex flex-row items-start justify-around gap-12">
      <AddWallet />
      <CurrencyPicker />
      </div>
      <div className="flex justify-center">
      <button
        className="border-2 p-4"
      >Calculate</button>
      </div>
    </main>
  )
}
