import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Footer from '../components/Footer'
import WhatsAppButton from '@/components/WhatsappButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isActiveOne, setIsActiveOne] = useState('')
  const [isActiveTwo, setIsActiveTwo] = useState('active')

  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <div className="grid grid-cols-2 w-full bg-cover bg-black/20 bg-center pl-20">
          <div className="flex flex-col h-screen text-white items-left justify-center pl-10">
            <span className="flex flex-col lg:flex-row items-left justify-left gap-4">
              <Image src="/VIVE-MEJOR.svg" alt="Vive Mejor" width={200} height={100} />
              <p className="font-normal hidden text-lg lg:text-3xl lg:flex">te da la</p>
            </span>
            <span className="flex flex-row items-center justify-left gap-4">
              <p className="font-normal hidden text-xl lg:flex lg:text-3xl">oportunidad de mejorar</p>
              <p className="font-normal text-xl lg:text-3xl lg:hidden">te da la oportunidad de mejorar tu vida con un solo click</p>
            </span>
            <span className="flex flex-row items-center justify-left gap-4">
              <p className="font-normal hidden text-xl lg:text-3xl lg:flex">tu vida con un solo clic</p>
            </span>
            <span className="flex flex-row items-center justify-left gap-4 pt-10 pb-10">
              <p className="font-normal text-lg lg:text-2xl">¡Solicita tu crédito hoy!</p>
            </span>
            <span className="flex flex-row items-center justify-left gap-4">
              <a href="https://cutt.ly/holaprestamo" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#DD0B18] py-2 px-8 rounded-xl">¡LO QUIERO!</button>
              </a>
            </span>
          </div>
        </div>

        {/* <div className='relative bg-gradient-to-b from-white/0 to-white w-full'>
          <div id="1" className="relative grid grid-cols-2 w-full bg-[url('/curvorojo.png')] bg-cover">
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
        </div> */}

        <div className='relative bg-gradient-to-b from-black/20 to-white w-full'>
          <div className="carousel w-full h-auto bg-[url('/curvorojo.png')] bg-cover bg-no-repeat bg-center">
            <div id="slide1" className="carousel-item grid grid-cols-2 relative w-full">
              <div className="flex flex-col h-screen text-white items-center justify-center pl-10">
                <span className="flex flex-row items-center justify-center gap-4">
                  <p className="font-normal text-xl lg:text-3xl">¿Qué es</p>
                </span>
                <span className="flex flex-row lg:flex-row items-center justify-center">
                  <Image src="/VIVE-MEJOR.svg" alt="Vive Mejor" width={200} height={100} />
                  <p className="font-normal text-lg lg:text-3xl">?</p>
                </span>
                <span className="flex flex-row items-center justify-center pt-20">
                  <p className="font-normal text-sm lg:text-md w-80 text-center">Es un crédito que financia el mejoramiento, construcción o ampliación de los puntos por donde recorre el agua.</p>
                </span>
              </div>
              <div className="flex flex-col h-screen text-white items-center justify-center pl-10">
                <Image src="/mujer.png" alt="Vive Mejor" width={500} height={500} className="rounded-full border-white border-4" />
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide2" className="carousel-item grid grid-cols-1 relative w-full">
              <div className="flex flex-col text-white items-center justify-center pl-10 gap-10">
                <div className="flex flex-row items-center justify-center gap-4 w-full">
                  <p className="font-normal text-xl lg:text-3xl">¿Qué financia?</p>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-5 text-white items-center justify-center'>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/G1.png" alt="Gota" className='w-20'/>
                    <p className="pt-6 text-center w-[180px]">Construcción y mejoramiento de baño</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/G2.png" alt="Gota" className='w-20'/>
                    <p className="pt-6 text-center w-[180px]">Lavatorio de cocina multiusos</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/G3.png" alt="Gota" className='w-20'/>
                    <p className="pt-6 text-center w-[180px]">Tanque elevado</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/G4.png" alt="Gota" className='w-20'/>
                    <p className="pt-6 text-center w-[180px]">Instalación de terma</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/G5.png" alt="Gota" className='w-20'/>
                    <p className="pt-6 text-center w-[180px]">Conexión de alcantarillado</p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide3" className="carousel-item flex flex-col text-white relative w-full justify-center items-center gap-6">
              <div className="flex flex-row items-center justify-center gap-4">
                <p className="font-normal text-xl lg:text-3xl">Nuestros Beneficios</p>
              </div>
              <div className="flex flex-row justify-center items-center justify-items-center">
                <div className="flex flex-col text-white items-center justify-center pl-10 gap-4">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="badge badge-outline border-1 px-2 w-full h-20 bg-white/10 text-xs lg:text-lg">Destinado a cubrir las necesidades básicas de los servicios de agua potable, alcantarillado e higiene.</div>
                    <div className="badge badge-outline border-1 px-2 w-full h-20 bg-white/10 text-xs lg:text-lg">Atención rápida y personalizada.</div>
                    <div className="badge badge-outline border-1 px-2 w-full h-20 bg-white/10 text-xs lg:text-lg">Tasas acorde a la competencia del mercado.</div>
                    <div className="badge badge-outline border-1 px-2 w-full h-20 bg-white/10 text-xs lg:text-lg">Mejora tu calidad de vida.</div>
                    <div className="badge badge-outline border-1 px-2 w-full h-20 bg-white/10 text-xs lg:text-lg">Puedes pagar tu crédito sin ir a tiendas a través de YAPE, app de Caja Sullana y Homebanking.</div>
                  </div>
                </div>
                <div className="flex flex-col text-white items-center justify-center pl-10">
                  <Image src="/slide3.png" alt="Vive Mejor" width={500} height={500} className="rounded-full border-white border-4" />
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide4" className="carousel-item flex flex-col gap-10 lg:grid lg:grid-cols-2 items-center justify-center relative w-full">
              <div className="flex flex-col text-white items-center justify-center pl-10 gap-6 lg:gap-20">
                <p className="font-normal text-xl lg:text-3xl">¿Cómo puedo obtenerlo?</p>
                <img src="/alegre.png" alt="Vive Mejor" className="rounded-full w-60 h-60 lg:w-100 lg:h-100 border-white border-4" />
                <a href="https://cutt.ly/holaprestamo" target="_blank" rel="noopener noreferrer">
                  <button type="submit" className="text-[#DD0B18] bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-2xl w-auto sm:w-auto px-5 py-2.5 text-center">¡INICIA AQUÍ!</button>
                </a>
              </div>
              <div className="grid grid-cols-2 text-white items-center justify-center px-6 gap-6 lg:gap-20"> 
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <Image src="/1.svg" alt="Vive Mejor" width={100} height={50}/>
                  <p>Regístrate</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <Image src="/2.svg" alt="Vive Mejor" width={100} height={50}/>
                  <p>Completa la información</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <Image src="/3.svg" alt="Vive Mejor" width={100} height={50}/>
                  <p>Tómale foto a los documento requeridos</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <Image src="/4.svg" alt="Vive Mejor" width={100} height={50}/>
                  <p>Desembolsa el dinero</p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full bg-[url('/BACKGROUND.svg')] bg-cover px-10 lg:px-40">
            <div className='flex flex-col px-10 pt-20 lg:pt-0 text-white items-center justify-center'>
              <h1 className='text-[#DD0B18] text-3xl'>Cuéntanos</h1>
              <h1 className='text-[#DD0B18] text-3xl'>más de ti</h1>
              <p className='text-black text-xl'>¡Adquiere tu crédito y empieza</p>
              <p className='text-black text-xl'>a vivir mejor!</p>
            </div>
            <div className="flex flex-col text-white items-center justify-center bg-[#DD0B18] my-20 py-10 rounded-xl">
              <form className='flex flex-col px-10 justify-center'>
                <h1 className="text-center">Consulta tu crédito al instante</h1>
                <div className="relative z-0 my-6 group">
                    <input type="dni" name="floating_dni" id="floating_dni" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                    <label htmlFor="floating_dni" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI</label>
                </div>
                <div className="relative z-0 mb-6 group">
                    <input type="phone" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular</label>
                </div>
                <div className="relative z-0 mb-6 group">
                    <input type="fullname" name="floating_fullname" id="floating_fullname" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                    <label htmlFor="floating_fullname" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre Completo</label>
                </div>
                <h1>¿Cuánto necesitas?</h1>
                <div className="relative z-0 my-6 group">
                  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="HASTA S/. 5.000,00" required />
                </div>
                <h1>¿En cuántas cuotas quieres pagar?</h1>
                <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-6 py-6">
                  <div className="flex items-center justify-center px-2 border border-gray-200 rounded">
                    <input id="12" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                    <label htmlFor="12" className="w-full py-4 ml-2 text-sm font-medium text-white">12</label>
                  </div>
                  <div className="flex items-center justify-center px-2 border border-gray-200 rounded">
                    <input checked id="15" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                    <label htmlFor="15" className="w-full py-4 ml-2 text-sm font-medium text-white">15</label>
                  </div>
                  <div className="flex items-center justify-center px-2 border border-gray-200 rounded">
                    <input id="18" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                    <label htmlFor="18" className="w-full py-4 ml-2 text-sm font-medium text-white">18</label>
                  </div>
                  <div className="flex items-center justify-center px-2 border border-gray-200 rounded">
                    <input checked id="21" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                    <label htmlFor="21" className="w-full py-4 ml-2 text-sm font-medium text-white">21</label>
                  </div>
                  <div className="flex items-center justify-center px-2 border border-gray-200 rounded">
                    <input id="24" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                    <label htmlFor="24" className="w-full py-4 ml-2 text-sm font-medium text-white">24</label>
                  </div>
                  <div className="flex items-center justify-center px-2 border border-gray-200 rounded">
                    <input checked id="36" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                    <label htmlFor="36" className="w-full py-4 ml-2 text-sm font-medium text-white">36</label>
                  </div>
                </div>
                <button type="submit" className="text-[#DD0B18] bg-[#FAC300] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">CONSULTAR</button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full bg-white px-10 py-20">
    
          <div className="mb-4">

            <ul className="flex flex-wrap justify-center -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 active" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Perfil</button>
              </li>
              <li className="mr-2" role="presentation">
                <button className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 active:bg-red" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Requisitos</button>
              </li>
            </ul>

          </div>

          <div id="myTabContent">

            <div className="bg-gray-50 p-4 rounded-lg hidden" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="grid grid-cols-2 w-full bg-[#DD0B18] rounded-xl">
              <div className="flex flex-row border-r-[1px] border-[#00000028]">
                <img src="/COLABORADOR-LANDING.png" alt="Colaborador" className="w-[320px] h-[540px] hidden lg:flex" />
                  <div className="flex flex-col items-center justify-center w-full px-10">
                    <h1 className="text-white py-10">Colaborador</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 pb-4 items-center justify-center">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/colab1.png" alt="Colab 1" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Boleto o recibo por honorarios</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/colab2.png" alt="Colab 1" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Mínimo 6 meses en tu trabajo actual</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 items-center justify-center pb-10">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/colab3.png" alt="Colab 1" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Buen historial crediticio</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse border-r-[1px] border-[#00000028]">
                  <img src="/COLABORADORA-LANDING.png" alt="Colaborador" className="w-[320px] h-[540px] hidden lg:flex" />
                  <div className="flex flex-col items-center justify-center w-full px-10">
                    <h1 className="text-white text-center py-10">Dueño de negocio</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 pb-4 items-center justify-center">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/colab4.png" alt="Colab 4" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Negocio formal o informal</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/colab2.png" alt="Colab 1" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Mínimo 6 meses en tu negocio</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 items-center justify-center pb-10">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/colab3.png" alt="Colab 1" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Buen historial en sistema financiero</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              <div className="grid grid-cols-2 w-full bg-[#DD0B18] rounded-xl">
                <div className="flex flex-row items-end border-r-[1px] border-[#00000028]">
                  <img src="/COLABORADOR-LANDING.png" alt="Colaborador" className="w-[320px] h-[540px] hidden lg:flex" />
                  <div className="flex flex-col items-center justify-between w-full px-10">
                    <h1 className="text-white py-10">Colaborador</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-4 items-center justify-center gap-4">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/id.png" alt="Id" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Copia de DNI titular, cónyuge y/o esposa</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/bill.png" alt="Bill" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Recibo de servicios (con un antiguedad no mayor a 2 meses)</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/cheque.png" alt="Cheque" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Mínimo 6 meses en tu trabajo actual</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/adult.png" alt="Adult" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">De 18 a 69 años</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/budget.png" alt="Budget" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Mínimo 6 meses en tu trabajo actual</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/family.png" alt="family" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Mínimo 6 meses en tu trabajo actual</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 py-4 items-center justify-center pb-10">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/documents.png" alt="Documents" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Otros documentos sujetos a evaluación</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-end border-r-[1px] border-[#00000028]">
                  <img src="/COLABORADORA-LANDING.png" alt="Colaborador" className="w-[320px] h-[540px] hidden lg:flex" />
                  <div className="flex flex-col items-center justify-between w-full px-10">
                    <h1 className="text-white py-10">Dueño de negocio</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-4 items-center justify-center gap-4">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/id.png" alt="Id" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Negocio formal o informal</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/bill.png" alt="Bill" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Mínimo 6 meses en tu negocio</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/cheque-negocio.png" alt="Cheque Negocio" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Mínimo 6 meses en tu negocio</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/adult.png" alt="Adult" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">De 18 a 69 años</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/budget.png" alt="Budget" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Mínimo 6 meses en tu negocio</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/family.png" alt="Family" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Mínimo 6 meses en tu negocio</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 py-4 items-center justify-center gap-4 pb-10">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/documents.png" alt="Documents" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px]">Otros documentos sujetos a evaluación</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  )
}
