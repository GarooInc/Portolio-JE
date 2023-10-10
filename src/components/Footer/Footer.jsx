import React from "react"
import { Link } from "react-scroll"
import "/i18n"
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()  

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.podcast'), href: '/podcast' },
    { name: t('navigation.resources'), href: '/recursos' },
    { name: t('navigation.analysis'), href: '/analisis' },
    { name: t('navigation.contact'), href: '/contacto' },
  ]

    return (
        <div className="bg-je-black w-full pt-12 md:pt-8 md:px-4 flex-col md:flex-row flex items-start md:justify-start">
            <div className="md:w-full max-w-screen-xl mx-4 flex flex-col md:gap-8 p-2 md:p-4">
                <div className="flex flex-col md:flex-row justify-start w-full gap-16">
                    <div className="flex flex-col justify-center w-full md:w-1/2">
                    <a href="#" className="-m-1.5 p-0 text-white font-bold text-[40px] leading-[48px] " style={{ fontFamily: 'Space Grotesk' }}>
                        JE
                    </a>
                    <span className="text-sm font-semibold leading-6 text-white cursor-pointer" style={{ fontFamily: 'Syne' }}> {t('contact.motto')}</span>
                    </div>
                    <div className="flex flex-col justify-end">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} className="text-sm font-semibold leading-6 text-white cursor-pointer" style={{ fontFamily: 'Syne' }}>
                            {item.name}
                        </Link>
                    ))}
                    </div>
                    <div className="flex flex-col justify-start">
                        <span className="text-sm font-semibold leading-6 text-white cursor-pointer" style={{ fontFamily: 'Syne' }}> {t('contact.address')}</span>
                        <span className="text-sm leading-6 text-white cursor-pointer" style={{ fontFamily: 'Syne' }}>Ruta 2 4-71 zona 4 Ciudad Guatemala</span>
                    </div>
                </div>
                    <div className="flex flex-col justify-center w-full md:w-1/2">
                        <span className="text-sm font-semibold leading-6 text-white cursor-pointer mt-4 md:m-0" style={{ fontFamily: 'Syne' }}> © 2023 Garoo Inc</span>
                    </div>
            </div>
        </div>
    )

}

export default Footer