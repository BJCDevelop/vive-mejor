import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white absolute w-full">
      <nav className="mx-10 flex w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex justify-left items-center pl-10 lg:flex-1">
          <Link href="/" className="">
            <span className="sr-only font-['BreePeru-Light']">Casa Sullana</span>
            <img className="h-[80px] w-[220px]" src="/LOGO.svg" alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only font-['BreePeru-Light']">Abrir menú</span>
            <Bars3Icon className="h-10 w-10" color="#DD0B18" aria-hidden="true" />
          </button>
        </div>
        {/* <div className="hidden lg:flex lg:gap-x-12">

          
        </div> */}
        <div className="hidden gap-6 items-center flex-1 lg:flex lg:justify-end">
          <Link href="#slide1" className="text-sm font-semibold leading-6 text-[#DD0B18] font-['BreePeru-Light']">
            Nosotros
          </Link>
          <Link href="#myTabContent" className="text-sm font-semibold leading-6 text-[#DD0B18] font-['BreePeru-Light']">
            Nuestros clientes
          </Link>
          <a href="#myTabContent" className="text-sm font-semibold leading-6 text-[#DD0B18] font-['BreePeru-Light']">
            Requisitos
          </a>
          <Link href="https://cutt.ly/holaprestamo" target="_blank" rel="noopener noreferrer" className="font-['BreePeru-Light'] text-sm px-6 py-2 font-semibold leading-6 text-white rounded-xl text-center bg-[#DD0B18]">
            Pide tu crédito
            {/* <span aria-hidden="true">&rarr;</span> */}
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-between items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Casa Sullana</span>
              <Image className="h-8 w-auto" src="/LOGO.svg" alt="Logo" width={160} height={80} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" color="#DD0B18" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="#slide1"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#DD0B18] hover:bg-gray-50 font-['BreePeru-Light']"
                >
                  Nosotros
                </Link>
                <Link
                  href="#myTabContent"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#DD0B18] hover:bg-gray-50 font-['BreePeru-Light']"
                >
                  Nuestros clientes
                </Link>
                <Link
                  href="#myTabContent"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#DD0B18] hover:bg-gray-50 font-['BreePeru-Light']"
                >
                  Requisitos
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="https://cutt.ly/holaprestamo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-[#DD0B18] text-center text-white font-['BreePeru-Light']"
                >
                  Pide tu crédito
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}