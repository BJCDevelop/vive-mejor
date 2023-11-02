import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <div className="grid grid-cols-2 w-full bg-cover bg-center">
          <div className="flex flex-col h-screen text-white items-center justify-center pl-10">
            <span className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <Image src="/vivemejor.png" alt="Vive Mejor" width={200} height={100} />
              <p className="font-normal text-lg lg:text-3xl">te da la</p>
            </span>
            <span className="flex flex-row items-center justify-center gap-4">
              <p className="font-normal text-xl lg:text-3xl">oportunidad de mejorar</p>
            </span>
            <span className="flex flex-row items-center justify-center gap-4">
              <p className="font-normal text-xl lg:text-3xl">tu vida con un solo click</p>
            </span>
            <span className="flex flex-row items-center justify-left gap-4 pt-10 pb-10">
              <p className="font-normal text-lg">¡Solicita tu crédito hoy!</p>
            </span>
            <span className="flex flex-row items-center justify-center gap-4">
              <button className="bg-[#DD0B18] py-2 px-8 rounded-xl">¡LO QUIERO!</button>
            </span>
          </div>
        </div>
        <div className="relative grid grid-cols-2 w-full bg-[url('/curvorojo.png')] bg-cover">
          <div className="flex flex-col h-screen text-white items-center justify-center pl-10">
            <span className="flex flex-row items-center justify-center gap-4">
              <p className="font-normal text-xl lg:text-3xl">¿Qué es</p>
            </span>
            <span className="flex flex-col lg:flex-row items-center justify-center">
              <Image src="/vivemejor.png" alt="Vive Mejor" width={200} height={100} />
              <p className="font-normal text-lg lg:text-3xl">?</p>
            </span>
            <span className="flex flex-row items-center justify-center pt-20">
              <p className="font-normal text-sm lg:text-md w-80 text-center">Es un crédito que financia el mejoramiento, construcción o ampliación de los puntos por donde recorre el agua.</p>
            </span>
          </div>
          <div className="flex flex-col h-screen text-white items-center justify-center pl-10">
            <Image src="/mujer.png" alt="Vive Mejor" width={500} height={500} className="rounded-full border-white border-4" />
          </div>
        </div>
      </main>
    </>
  )
}
