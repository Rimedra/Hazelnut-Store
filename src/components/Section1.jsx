import React from 'react'
import { Link } from 'react-scroll';

export default function Section1() {
  return (
    <section id="section-1" className="relative py-10 overflow-visible" style={{backgroundImage: "url('https://i.ibb.co/PsLJ7JKc/background-big-line-our-history.png')"}}>
        <div  className=" grid md:grid-cols-2 gap-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between" >
            <div className="px-4 sm:px-6 md:px-8 lg:px-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-6 leading-tight">
                Sürdürülebilir Lezzet Yolculuğu,<br />Fındıkta Yeni Bir Çağ
            </h1>
            <p className="text-lg mb-8 max-w-prose">
                Karadeniz’de permakültür ilkeleriyle yetişen fındıklarımız, <em>tek
                bahçe—tek köken</em> anlayışıyla hasat edilir; tam aromaya ulaşması için
                gün içinde özenle kavrulur. Doğaya saygılı, zanaatkâr üretimle protein ve
                sağlıklı yağ bakımından zengin bu lezzeti keşfedin.
            </p>
            <Link
                to="products"
                smooth={true}
                duration={500}
                offset={-80}
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-xl
                        font-semibold py-3 px-8 rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105
                            "
            >
                Lezzeti Keşfet
            </Link>
            </div>

            <div className="px-4 sm:px-6 md:px-8 lg:px-10">
            <img
                src="https://i.ibb.co/p6DPrhwg/hearth-of-ferrero-intro-image-1.png"
                alt="Fındık"
                className="w-full"
            />
            </div>
        </div>

        <div className='grid grid-cols-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between'>
            <div className='col-span-12 lg:col-span-5 px-4 sm:px-6 md:px-8 lg:px-10'>
                <p className=' text-right text-2xl font-bold right-0 text-green'>
                    <span className='inline-flex w-1/2 h-8 justify-center items-center text-[#82bc4f] text-xl text-center'>
                        Birçok
                    </span>
                    <br/>
                    <span className="relative inline-flex w-1/2 h-16 pb-2 justify-center items-center text-white text-2xl text-center">
                        <img
                            src="https://i.ibb.co/60Pjr16g/green-brush-bkg.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-contain z-1"
                        />
                        <span className='z-2'>Çeşit</span>
                    </span>
                </p>
                 <p className=' text-left text-2xl font-bold right-0 text-green'>
                    <span className='inline-flex w-1/2 h-8 justify-center items-center text-[#82bc4f] text-xl text-center'>
                        Mikro Besinler ve
                    </span>
                    <br/>
                    <span className="relative inline-flex w-1/2 h-16 pb-2 justify-center items-center text-white text-2xl text-center">
                        <img
                            src="https://i.ibb.co/60Pjr16g/green-brush-bkg.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-contain z-1"
                        />
                        <span className='z-2'>Antioksidanlar</span>
                    </span>
                </p>
                 <p className=' text-right text-2xl font-bold right-0 text-green'>
                    <span className='inline-flex w-1/2 h-8 justify-center items-center text-[#82bc4f] text-xl text-center'>
                        Zengin & Premium
                    </span>
                    <br/>
                    <span className="relative inline-flex w-1/2 h-16 pb-2 justify-center items-center text-white text-2xl text-center">
                        <img
                            src="https://i.ibb.co/60Pjr16g/green-brush-bkg.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-contain z-1"
                        />
                        <span className='z-2'>Tat</span>
                    </span>
                </p>
            </div>

            <div className='col-span-12 lg:col-span-7 px-4 sm:px-6 md:px-8 lg:px-10'>
                <div className='flex flex-col lg:flex-row items-center text-left justify-center h-full'>
                    <div className='flex items-left text-left w-1/2 lg:w-1/4 px-2 mt-10 lg:mt-0'>
                                        <img src="https://i.ibb.co/1Y39q1D5/nut-image.png" alt="" className=''/>

                    </div>
                    <div className='flex flex-col items-left justify-center w-full lg:w-3/4 px-2'>
                        <h2 className='text-4xl font-semibold text-[#98bd2f]'>Fındık <span className='font-bold text-[#8cb92a]'>çok yönlü</span> bir kuruyemiştir
                        </h2>
                        <p className='text-xl text-gray-700 mt-4'>
                            Çiğ, kavrulmuş veya ezilmiş olarak birçok formda mevcuttur. Zengin, birinci sınıf ve ayırt edici bir tada sahip olmalarının yanı sıra antioksidanları ve mikro besinleri sayesinde olumlu bir besin rolü de vardır.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
