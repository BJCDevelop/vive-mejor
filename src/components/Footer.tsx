import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <footer className="bg-[#DD0B18] w-full">
      <nav className="mx-10 flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="hidden flex-col max-w-lg md:flex-1 text-white gap-4 xl:flex">
            <h2 className="font-['BreePeru-Light']">Links de interes</h2>
            <div className="grid grid-cols-4">
                <div className="flex flex-col gap-2">
                    <Link href="https://www.cajasullana.pe/" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] -m-1.5 p-1.5">Caja Sullana</Link>
                    <Link href="https://www.sunat.gob.pe/" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] -m-1.5 p-1.5">Sunat</Link>
                    <Link href="https://www.indecopi.gob.pe/indecopi" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] -m-1.5 p-1.5">Indecopi</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="https://www.fpcmac.org.pe/" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] -m-1.5 p-1.5">FPCMAC</Link>
                    <Link href="https://www.afpintegra.pe/" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] -m-1.5 p-1.5">AFP</Link>
                    <Link href="https://www.sbs.gob.pe/" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] -m-1.5 p-1.5">SBS</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="https://www.cofide.com.pe/COFIDE/" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] -m-1.5 p-1.5">COFIDE</Link>
                    <Link href="https://www.sbs.gob.pe/usuarios/" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] -m-1.5 p-1.5">SBS - Usuarios</Link>
                    <Link href="https://www.bcrp.gob.pe/" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] -m-1.5 p-1.5">BCRP</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="https://www.reniec.gob.pe/portal/Principal.htm" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] -m-1.5 p-1.5">Reniec</Link>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className='flex flex-row lg:flex-row-reverse items-center gap-4 pl-2'>
                    <Link href="https://www.facebook.com/CajaSullana" target="_blank" rel="noopener noreferrer" className="-m-1.5 p-1.5">
                        <Image className="h-8 w-auto" src="/FB.svg" alt="Logo" width={50} height={50} />
                    </Link>
                    <Link href="https://www.instagram.com/cajasullana/" target="_blank" rel="noopener noreferrer" className="-m-1.5 p-1.5">
                        <Image className="h-8 w-auto" src="/IG.svg" alt="Logo" width={50} height={50} />
                    </Link>
                </div>
                <Link href="/" target="_blank" rel="noopener noreferrer" className="-m-1.5 p-1.5">
                    <Image className="w-auto" src="/LIBRO.png" alt="Logo" width={200} height={100} />
                </Link>
            </div>
            <Link href="/" target="_blank" rel="noopener noreferrer" className="-m-1.5 p-1.5">
                <Image className="w-auto" src="/fono-caja.svg" alt="Logo" width={400} height={200} />
            </Link>
        </div>
      </nav>
    </footer>
  )
}