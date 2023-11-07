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
    <footer className="bg-[#DD0B18] absolute w-full">
      <nav className="mx-10 flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-col max-w-lg lg:flex-1 text-white gap-4">
            <h2>Links de interes</h2>
            <div className="grid grid-cols-4">
                <div className="flex flex-col gap-2">
                    <Link href="/" className="-m-1.5 p-1.5">Caja Sullana</Link>
                    <Link href="/" className="-m-1.5 p-1.5">Sunat</Link>
                    <Link href="/" className="-m-1.5 p-1.5">Indecopi</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="/" className="-m-1.5 p-1.5">FPCMAC</Link>
                    <Link href="/" className="-m-1.5 p-1.5">AFP</Link>
                    <Link href="/" className="-m-1.5 p-1.5">SBS</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="/" className="-m-1.5 p-1.5">COFIDE</Link>
                    <Link href="/" className="-m-1.5 p-1.5">SBS - Usuarios</Link>
                    <Link href="/" className="-m-1.5 p-1.5">BCRP</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href="/" className="-m-1.5 p-1.5">Reniec</Link>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-6">
            <Link href="/" className="-m-1.5 p-1.5">
                <Image className="h-8 w-auto" src="/FB.png" alt="Logo" width={50} height={50} />
            </Link>
            <Link href="/" className="-m-1.5 p-1.5">
                <Image className="h-8 w-auto" src="/IG.png" alt="Logo" width={50} height={50} />
            </Link>
        </div>

        <div className="flex flex-row items-center justify-center gap-6">
            <Link href="/" className="-m-1.5 p-1.5">
                <Image className="w-auto" src="/LIBRO.png" alt="Logo" width={200} height={100} />
            </Link>
        </div>

        <div className="flex flex-row items-center justify-center gap-6">
            <Link href="/" className="-m-1.5 p-1.5">
                <Image className="w-auto" src="/fondo-caja.png" alt="Logo" width={400} height={200} />
            </Link>
        </div>
      </nav>
    </footer>
  )
}