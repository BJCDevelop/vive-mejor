import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Footer from '../components/Footer'
import WhatsAppButton from '@/components/WhatsappButton'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isActiveOne, setIsActiveOne] = useState('')
  const [isActiveTwo, setIsActiveTwo] = useState('active')

  const [resolve, setResolve] = useState(false)

  const [dni, setDni] = useState('')
  const [phone, setPhone] = useState('')
  const [fullname, setFullname] = useState('')
  const [amount, setAmount] = useState(0)
  const [cuotas, setCuotas] = useState('')

  const handleSubmit = async () => {
    const data = {
      dni,
      phone,
      fullname,
      amount,
      cuotas
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setResolve(true)
        setDni('')
        setPhone('')
        setFullname('')
        setAmount(0)
        setCuotas('')
      }
    })
    setResolve(true)
  }

  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full bg-cover bg-black/20 bg-center pl-4 md:pl-20">
          <div className="flex flex-col h-screen text-white items-left justify-center pl-10">
            <span className="flex flex-col lg:flex-row items-left justify-left gap-4">
              <Image src="/VIVE-MEJOR.svg" alt="Vive Mejor" width={200} height={100} />
              <p className="font-['BreePeru-Light'] font-normal hidden text-lg lg:text-3xl lg:flex">te da la</p>
            </span>
            <span className="flex flex-row items-center justify-left gap-4">
              <p className="font-['BreePeru-Light'] font-normal hidden text-xl lg:flex lg:text-3xl">oportunidad de mejorar</p>
              <p className="font-['BreePeru-Light'] font-normal text-xl pr-40 md:pr-80 lg:text-3xl lg:hidden">te da la oportunidad de mejorar tu vida con un solo click</p>
            </span>
            <span className="flex flex-row items-center justify-left gap-4">
              <p className="font-['BreePeru-Light'] font-normal hidden text-xl lg:text-3xl lg:flex">tu vida con un solo clic</p>
            </span>
            <span className="flex flex-row items-center justify-left gap-4 pt-10 pb-10">
              <p className="font-['BreePeru-Light'] font-normal text-lg lg:text-2xl">¡Solicita tu crédito hoy!</p>
            </span>
            <span className="flex flex-row items-center justify-left gap-4">
              <a href="https://cutt.ly/holaprestamo" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#DD0B18] py-2 px-8 rounded-xl font-['BreePeru-Light']">¡LO QUIERO!</button>
              </a>
            </span>
          </div>
        </div>

        <div id="nosotros" className="relative bg-gradient-to-b from-black/20 to-white w-full">
          <div className="carousel w-full py-20 lg:py-40 bg-[url('/curvorojo.png')] bg-cover bg-no-repeat bg-center">

            <div id="slide1" className="carousel-item flex flex-col gap-40 lg:gap-10 lg:grid lg:grid-cols-2 relative w-full justify-left lg:justify-center px-2 lg:px-2">
              <div className="pt-20 lg:pt-0 flex flex-col text-white items-start pl-10 lg:pl-40 lg:justify-center">
                <span className="flex flex-row items-center justify-center gap-4">
                  <p className="font-normal font-['BreePeru-Regular'] text-3xl lg:text-5xl">¿Qué es</p>
                </span>
                <span className="flex flex-row lg:flex-row items-center justify-start">
                  <img src="/VIVE-MEJOR.svg" alt="Vive Mejor" className="flex w-[120px] h-[60px] lg:hidden" />
                  <img src="/VIVE-MEJOR.svg" alt="Vive Mejor" className="hidden w-[300px] h-[150px] lg:flex" />
                  <p className="font-normal font-['BreePeru-Regular'] text-3xl lg:text-5xl">?</p>
                </span>
                <span className="flex flex-col items-start justify-start lg:pt-20">
                  <p className="font-['BreePeru-Light'] font-normal text-md lg:text-xl text-left hidden lg:flex">Es un crédito que financia el mejoramiento,</p>
                  <p className="font-['BreePeru-Light'] font-normal text-md lg:text-xl text-left hidden lg:flex">construcción o ampliación de los puntos</p>
                  <p className="font-['BreePeru-Light'] font-normal text-md lg:text-xl text-left hidden lg:flex">por donde recorre el agua.</p>
                  <p className="font-['BreePeru-Light'] font-normal text-xl lg:text-xl text-left lg:hidden">Es un crédito que financia el mejoramiento, construcción o ampliación de los puntos por donde recorre el agua.</p>
                </span>
              </div>
              <div className="flex flex-col lg:h-screen text-white items-center justify-center w-full">
                <img src="/mujer.png" alt="Vive Mejor" className="rounded-full border-white border-4 flex lg:hidden w-60 h-60" />
                <img src="/mujer.png" alt="Vive Mejor" className="rounded-full border-white border-4 hidden lg:flex w-100 h-100" />
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide2" className="carousel-item grid grid-cols-1 relative w-full">
              <div className="flex flex-col text-white items-center justify-left lg:justify-center pl-0 lg:pl-10 gap-20">
                <div className="flex flex-row items-center justify-left pl-6 lg:pl-20 gap-4 w-full">
                  <p className="font-normal text-3xl pt-20 lg:text-6xl font-['BreePeru-Regular']">¿Qué financia?</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-5 text-white items-center justify-center gap-10 lg:gap-0'>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/G1.png" alt="Gota" className='w-20 lg:w-40'/>
                    <p className="font-['BreePeru-Light'] pt-6 text-center w-[180px]">Construcción y mejoramiento de baño</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/G2.png" alt="Gota" className='w-20 lg:w-40'/>
                    <p className="font-['BreePeru-Light'] pt-6 text-center w-[180px]">Lavatorio de cocina multiusos</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/G3.png" alt="Gota" className='w-20 lg:w-40'/>
                    <p className="font-['BreePeru-Light'] pt-6 text-center w-[180px]">Tanque elevado</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/G4.png" alt="Gota" className='w-20 lg:w-40'/>
                    <p className="font-['BreePeru-Light'] pt-6 text-center w-[180px]">Instalación de terma</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/G5.png" alt="Gota" className='w-20 lg:w-40'/>
                    <p className="font-['BreePeru-Light'] pt-6 text-center w-[180px]">Conexión de alcantarillado</p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide3" className="carousel-item flex flex-col text-white relative w-full justify-left lg:justify-center items-center gap-6">
              <div className="flex flex-col-reverse lg:flex-row justify-center items-center justify-items-center px-20 lg:gap-60 w-full">
                <div className="flex flex-col text-white items-center justify-center gap-10">
                  <div className="flex flex-col items-left lg:items-center justify-around gap-2">
                    <p className="font-normal font-['BreePeru-Regular'] text-3xl lg:text-5xl pb-10">Nuestros Beneficios</p>
                    <div className="flex flex-col text-white items-center justify-center pb-10">
                      <img src="/slide3.png" alt="Vive Mejor" className="flex lg:hidden xl:hidden w-60 h-60 rounded-full border-white border-4" />
                    </div>
                    <div className="font-['BreePeru-Light'] grid grid-cols-1 justify-start badge badge-outline border-0 rounded-full px-4 md:px-10 w-full h-20  text-xs lg:text-lg">
                      <p>Destinado a cubrir las necesidades básicas de los servicios de agua potable, alcantarillado e higiene.</p>
                      {/* <p>servicios de agua potable, alcantarillado e higiene.</p> */}
                    </div>
                    <div className="font-['BreePeru-Light'] justify-start badge badge-outline border-0 rounded-full px-4 md:px-10 w-full h-20  text-xs lg:text-lg">Atención rápida y personalizada.</div>
                    <div className="font-['BreePeru-Light'] justify-start badge badge-outline border-0 rounded-full px-4 md:px-10 w-full h-20  text-xs lg:text-lg">Tasas acorde a la competencia del mercado.</div>
                    <div className="font-['BreePeru-Light'] grid grid-cols-1 justify-start badge badge-outline border-0 rounded-full px-4 md:px-10 w-full h-20  text-xs lg:text-lg">
                      <p>Puedes pagar tu crédito sin ir a tiendas a través de <b>YAPE</b>, <b>app</b> de <b>Caja Sullana</b> y <b>Homebanking</b>.</p>
                      {/* <p><b>YAPE</b>, <b>app</b> de <b>Caja Sullana</b> y <b>Homebanking</b>.</p> */}
                    </div>
                    <div className="font-['BreePeru-Light'] justify-start badge badge-outline border-0 rounded-full px-4 md:px-10 w-full h-20  text-xs lg:text-lg">Mejora tu calidad de vida</div>
                  </div>
                </div>
                <div className="flex flex-col text-white items-center justify-center pb-10">
                  <img src="/slide3.png" alt="Vive Mejor" className="hidden lg:flex w-100 h-100 rounded-full border-white border-4" />
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide4" className="carousel-item flex flex-col gap-10 lg:grid lg:grid-cols-2 items-center justify-left lg:justify-center pt-20 lg:pt-0 relative w-full">
              <p className="text-white w-full lg:hidden pl-10 md:pl-20 lg:pl-0 font-normal text-left font-['BreePeru-Regular'] text-3xl lg:text-5xl">¿Cómo puedo obtenerlo?</p>
              <div className="flex flex-col text-white items-left lg:px-40 justify-start gap-6 lg:gap-20">
                <p className="text-white hidden lg:flex pl-10 md:pl-20 lg:pl-0 font-normal text-left font-['BreePeru-Regular'] text-3xl lg:text-5xl">¿Cómo puedo obtenerlo?</p>
                <div className="flex flex-col items-center justify-center gap-6 pt-10">
                  <img src="/alegre.png" alt="Vive Mejor" className="flex lg:hidden rounded-full w-60 h-60 border-white border-4" />
                  <img src="/alegre.png" alt="Vive Mejor" className="hidden lg:flex rounded-full w-100 h-100 border-white border-4" />
                  <a href="https://cutt.ly/holaprestamo" target="_blank" rel="noopener noreferrer">
                    <button type="submit" className="text-[#DD0B18] font-['BreePeru-Regular']  bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-md md:text-2xl w-auto sm:w-auto px-5 py-2.5 text-center">¡INICIA AQUÍ!</button>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 text-white items-center justify-center px-6 gap-6 lg:gap-20"> 
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <Image src="/1.svg" alt="Vive Mejor" className="pb-4" width={100} height={50}/>
                  <p className="font-['BreePeru-Light'] ">Regístrate</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <Image src="/2.svg" alt="Vive Mejor" width={100} height={50}/>
                  <p className="font-['BreePeru-Light'] ">Completa la información</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <Image src="/3.svg" alt="Vive Mejor" width={100} height={50}/>
                  <p className="font-['BreePeru-Light'] ">Tómale foto a los documento requeridos</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <Image src="/4.svg" alt="Vive Mejor" width={100} height={50}/>
                  <p className="font-['BreePeru-Light'] ">Desembolsa el dinero</p>
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
            <div className='flex flex-col px-10 pt-20 lg:pt-0 text-white items-left justify-center'>
              <h1 className="text-[#DD0B18] font-['BreePeru-Light'] text-5xl hidden lg:flex">Cuéntanos</h1>
              <h1 className="text-[#DD0B18] font-['BreePeru-Light'] text-5xl hidden lg:flex">más de ti</h1>
              <h1 className="text-[#DD0B18] font-['BreePeru-Light'] text-3xl flex lg:hidden">Cuéntanos más de ti</h1>
              <p className="text-black font-['BreePeru-Light'] text-xl hidden lg:flex">¡Adquiere tu crédito y empieza</p>
              <p className="text-black font-['BreePeru-Light'] text-xl hidden lg:flex">a vivir mejor!</p>
              <p className="text-black font-['BreePeru-Light'] text-md font-bold flex lg:hidden">¡Adquiere tu crédito y empieza a vivir mejor!</p>
            </div>
            {!resolve && (
              <div className="flex flex-col text-white items-center justify-center shadow-2xl bg-[#DD0B18] my-20 py-10 rounded-xl">
                <div className='flex flex-col px-10 justify-center'>
                  <h1 className="text-center text-xl font-normal font-['BreePeru-Light']">Consulta tu crédito al instante</h1>
                  <div className="relative w-full z-0 my-6 group text-center">
                      <input type="dni" name="floating_dni" autoComplete='false' id="floating_dni" className="font-['BreePeru-Light'] block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                      <label htmlFor="floating_dni" className="ml-[-12px] font-['BreePeru-Light'] peer-focus:font-medium peer-focus:ml-0 absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI</label>
                  </div>
                  <div className="relative w-full z-0 mb-6 group text-center">
                      <input type="phone" name="floating_phone" autoComplete='false' id="floating_phone" className="font-['BreePeru-Light'] block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                      <label htmlFor="floating_phone" className="ml-[-20px] font-['BreePeru-Light'] peer-focus:font-medium peer-focus:ml-0 absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular</label>
                  </div>
                  <div className="relative w-full z-0 mb-6 group text-center">
                      <input type="fullname" name="floating_fullname" autoComplete='false' id="font-['BreePeru-Light'] floating_fullname" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                      <label htmlFor="floating_fullname" className="ml-[-50px] font-['BreePeru-Light'] peer-focus:font-medium peer-focus:ml-0 absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre Completo</label>
                  </div>
                  <h1 className="font-['BreePeru-Light'] text-center">¿Cuánto necesitas?</h1>
                  <div className="relative w-full z-0 my-6 group">
                    <input type="text" id="first_name" autoComplete='false' className="font-['BreePeru-Light'] text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="HASTA S/. 5.000,00" required />
                  </div>
                  <h1 className="font-['BreePeru-Light'] text-center">¿En cuántas cuotas quieres pagar?</h1>
                  <div className="grid grid-cols-3 w-full items-center md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 lg:gap-6 gap-2 py-6">
                    <div className="flex items-center justify-center">
                    <button type='button' className="btn btn-square btn-outline text-black focus:text-black font-['BeerPeru-Light] bg-white border-0 hover:bg-[#FFFCE0] focus:bg-[#FFFCE0]">
                      12
                    </button>
                    </div>
                    <div className="flex items-center justify-center">
                    <button type='button' className="btn btn-square btn-outline text-black focus:text-black font-['BeerPeru-Light] bg-white border-0 hover:bg-[#FFFCE0] focus:bg-[#FFFCE0]">
                      15
                    </button>
                    </div>
                    <div className="flex items-center justify-center">
                    <button type='button' className="btn btn-square btn-outline text-black focus:text-black font-['BeerPeru-Light] bg-white border-0 hover:bg-[#FFFCE0] focus:bg-[#FFFCE0]">
                      18
                    </button>
                    </div>
                    <div className="flex items-center justify-center">
                    <button type='button' className="btn btn-square btn-outline text-black focus:text-black font-['BeerPeru-Light] bg-white border-0 hover:bg-[#FFFCE0] focus:bg-[#FFFCE0]">
                      21
                    </button>
                    </div>
                    <div className="flex items-center justify-center">
                    <button type='button' className="btn btn-square btn-outline text-black focus:text-black font-['BeerPeru-Light] bg-white border-0 hover:bg-[#FFFCE0] focus:bg-[#FFFCE0]">
                      24
                    </button>
                    </div>
                    <div className="flex items-center justify-center">
                    <button type='button' className="btn btn-square btn-outline text-black focus:text-black font-['BeerPeru-Light] bg-white border-0 hover:bg-[#FFFCE0] focus:bg-[#FFFCE0]">
                      36
                    </button>
                    </div>
                    
                  </div>
                  
                  <button type="submit" onClick={() => setResolve(true)} className="font-['BreePeru-Light'] text-[#DD0B18] bg-[#FAC300] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">CONSULTAR</button>
                </div>
              </div>
            )}
            
            {/* If resolve */}
            {resolve && (
              <div className="flex flex-col h-[600px] w-auto lg:w-[500px] items-center justify-center shadow-2xl bg-[#DD0B18] my-20 rounded-xl">
                <div className="bg-[url('/joven.png')] w-full h-full bg-right-bottom bg-no-repeat flex flex-col items-center justify-start pt-20">
                  <h1 className="font-['BreePeru-Regular'] text-4xl text-[#FAC300] text-center pb-4 lg:pb-20">¡MUCHAS GRACIAS!</h1>
                  <p className="text-white font-['BreePeru-Light'] text-lg">En breve nos</p>
                  <p className="text-white font-['BreePeru-Light'] text-lg">comunicaremos</p>
                  <p className="text-white font-['BreePeru-Light'] text-lg">contigo.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full bg-white px-10 py-20">
    
          <div className="mb-4">

            <ul className="flex flex-wrap justify-center -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <li className="mr-2" role="presentation">
                <button className="font-['BreePeru-Light'] inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-lg font-medium text-center border-transparent border-b-2 active" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Perfil</button>
              </li>
              <li className="mr-2" role="presentation">
                <button className="font-['BreePeru-Light'] inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-lg font-medium text-center border-transparent border-b-2 active:bg-red" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Requisitos</button>
              </li>
            </ul>

          </div>

          <div id="myTabContent">

            <div className="p-4 rounded-lg" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="grid grid-cols-2 w-full bg-[#DD0B18] rounded-xl">
              <div className="flex flex-row border-r-[1px] border-[#00000028]">
                <img src="/COLABORADOR-LANDING.png" alt="Colaborador" className="w-[400px] h-[540px] hidden lg:flex" />
                  <div className="flex flex-col items-center justify-evenly w-full px-10">
                    <h1 className="text-white py-10 text-sm md:text-lg lg:text-2xl xl:text-4xl font-['BreePeru-Light']">Colaborador</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 pb-4 items-center justify-center">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/perfil/image-1.svg" alt="Colab 1" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Boleto o recibo por honorarios</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/perfil/image-2.svg" alt="Colab 1" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Mínimo 6 meses en tu trabajo actual</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 items-center justify-center pb-10">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/perfil/sello-3.svg" alt="Colab 1" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Buen historial crediticio</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse border-r-[1px] border-[#00000028]">
                  <img src="/COLABORADORA-LANDING.png" alt="Colaborador" className="w-[400px] h-[540px] hidden lg:flex" />
                  <div className="flex flex-col items-center justify-evenly w-full px-10">
                    <h1 className="text-white text-center py-10 text-sm md:text-lg lg:text-2xl xl:text-4xl font-['BreePeru-Light']">Dueño de negocio</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 pb-4 items-center justify-center">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/perfil/tienda-2.svg" alt="Colab 4" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Negocio formal o informal</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/perfil/image-2.svg" alt="Colab 1" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Mínimo 6 meses en tu negocio</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 items-center justify-center pb-10">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/perfil/sello-3.svg" alt="Colab 1" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Buen historial en sistema financiero</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl hidden" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              <div className="grid grid-cols-2 w-full bg-[#DD0B18] rounded-xl">
                <div className="flex flex-row items-end border-r-[1px] border-[#00000028]">
                  <img src="/COLABORADOR-LANDING.png" alt="Colaborador" className="w-[400px] h-[540px] hidden lg:flex" />
                  <div className="flex flex-col items-center justify-between w-full px-10">
                    <h1 className="text-white text-center py-10 text-sm md:text-lg lg:text-2xl xl:text-4xl font-['BreePeru-Light']">Colaborador</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-4 items-center justify-center gap-4">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/id.svg" alt="Id" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Copia de DNI titular, cónyuge y/o esposa</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/bill.svg" alt="Bill" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Recibo de servicios (menor a 2 meses)</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/cheque.svg" alt="Cheque" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Mínimo 6 meses en tu trabajo actual</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/adult.svg" alt="Adult" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">De 18 a 69 años</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/budget.svg" alt="Budget" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Mínimo 6 meses en tu trabajo actual</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/family.svg" alt="family" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Mínimo 6 meses en tu trabajo actual</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 py-4 items-center justify-center pb-10">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/documents.svg" alt="Documents" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Otros documentos sujetos a evaluación</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-end border-r-[1px] border-[#00000028]">
                  <img src="/COLABORADORA-LANDING.png" alt="Colaborador" className="w-[400px] h-[540px] hidden lg:flex" />
                  <div className="flex flex-col items-center justify-between w-full px-10">
                    <h1 className="text-white text-center py-10 text-sm md:text-lg lg:text-2xl xl:text-4xl font-['BreePeru-Light']">Dueño de negocio</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-4 items-center justify-center gap-4">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/id.svg" alt="Id" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Negocio formal o informal</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/bill.svg" alt="Bill" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Mínimo 6 meses en tu negocio</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/cheque-1.svg" alt="Cheque Negocio" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Mínimo 6 meses en tu negocio</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/adult.svg" alt="Adult" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">De 18 a 69 años</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/budget.svg" alt="Budget" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Mínimo 6 meses en tu negocio</p>
                      </div>
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/family.svg" alt="Family" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Mínimo 6 meses en tu negocio</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 py-4 items-center justify-center gap-4 pb-10">
                      <div className="flex flex-col text-center items-center justify-center">
                        <Image src="/requisitos/documents.svg" alt="Documents" width={50} height={50} />
                        <p className="text-white pt-2 text-[10px] w-[100px] font-['BreePeru-Light']">Otros documentos sujetos a evaluación</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="bg-white pt-20 border-0 xl:hidden w-full flex flex-col items-center">
            <div className="w-[300px] lg:w-[500px] bg-transparent flex justify-center items-center">
              <details className="collapse w-full">
                <summary className="m-1 font-['BreePeru-Light'] text-[#DD0B18] text-center text-xl border-b-2">Links de interés</summary>
                <ul className="p-2 shadow menu collapse-content z-[1] rounded-box grid grid-cols-2 gap-6 justify-start items-left justify-items-left w-full">
                  <Link href="https://webcs-innovacion.cajasullana.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">Caja Sullana</Link>
                  <Link href="https://www.sunat.gob.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">Sunat</Link>
                  <Link href="https://www.indecopi.gob.pe/indecopi" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">Indecopi</Link>
                  <Link href="https://www.fpcmac.org.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">FPCMAC</Link>
                  <Link href="https://www.afpintegra.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">AFP</Link>
                  <Link href="https://www.sbs.gob.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">SBS</Link>
                  <Link href="https://www.cofide.com.pe/COFIDE/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">COFIDE</Link>
                  <Link href="https://www.sbs.gob.pe/usuarios/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">SBS - Usuarios</Link>
                  <Link href="https://www.bcrp.gob.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">BCRP</Link>
                  <Link href="https://www.reniec.gob.pe/portal/Principal.htm" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">Reniec</Link>
                </ul>
              </details>
            </div>
          </div>
        </div>

        {/* <div className="bg-white xl:hidden w-full flex flex-col items-center pb-10">
          <div className="w-[300px] lg:w-[500px] bg-transparent">
            <div tabIndex={0} className="collapse rounded-none border-0 border-b-2 text-center justify-center">
              <div className="collapse-title flex items-center justify-center px-10 text-xl text-[#DD0B18] font-['BreePeru-Light']">
                <p className="text-center w-full">Links de interés</p>
              </div>
              <div className="collapse-content relative grid grid-cols-2 gap-6 justify-start items-start justify-items-start w-full">
                  <Link href="https://www.cajasullana.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">Caja Sullana</Link>
                  <Link href="https://www.sunat.gob.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">Sunat</Link>
                  <Link href="https://www.indecopi.gob.pe/indecopi" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">Indecopi</Link>
                  <Link href="https://www.fpcmac.org.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">FPCMAC</Link>
                  <Link href="https://www.afpintegra.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">AFP</Link>
                  <Link href="https://www.sbs.gob.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">SBS</Link>
                  <Link href="https://www.cofide.com.pe/COFIDE/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">COFIDE</Link>
                  <Link href="https://www.sbs.gob.pe/usuarios/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">SBS - Usuarios</Link>
                  <Link href="https://www.bcrp.gob.pe/" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">BCRP</Link>
                  <Link href="https://www.reniec.gob.pe/portal/Principal.htm" target="_blank" rel="noopener noreferrer" className="text-[#DD0B18] font-['BreePeru-Light'] -m-1.5 p-1.5">Reniec</Link>
              </div>
            </div>
          </div>
        </div> */}

        <WhatsAppButton />
      </main>
      <Footer />
    </>
  )
}
