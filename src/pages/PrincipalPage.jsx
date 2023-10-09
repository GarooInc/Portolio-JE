import NavBar from "../components/NavBar/NavBar"
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next'
import Title from "../components/Title"
import {BsInstagram, BsTwitter, BsYoutube, BsTiktok, BsLinkedin,BsSpotify} from 'react-icons/bs'


const PrincipalPage = () => {
    const { t } = useTranslation()
    return (
        <div className='principalPage'>
            <NavBar/>
            <section id='/' className="bg-je-blue w-full h-screen pt-12 md:pt-20 rounded-b-6xl flex items-center justify-center">
                <div className="w-full max-w-screen-xl mx-4 md:mx-auto flex flex-col md:flex-row gap-4 md:gap-8 rounded-6xl p-4 md:p-8">
                    <img src="/images/profilepic.jpg" alt="Logo" className="w-full md:w-1/2 h-full md:h-auto object-cover rounded-6xl"/>
                    <div className="flex flex-col justify-center w-full md:w-1/2">
                        <Title text="JOSE ECHEVERRÍA" color="text-white" textAlign="text-right" />
                        <span className="text-l md:text-2xl text-white text-right" style={{ fontFamily: 'Syne' }}>{t('intro.description')}</span>
                    </div>
                </div>
            </section>
            <section id='/podcast' className="bg-je-blue w-full h-screen pt-12 md:pt-20 rounded-6xl flex flex-col justify-start items-center">
                <div className="bg-je-white max-w-screen-xl mx-4 md:mx-4 flex flex-col md:flex-row gap-6 md:gap-8 rounded-6xl p-2 md:p-8 overflow-hidden justify-center items-center">
                    <div className="flex flex-col justify-center w-full md:w-1/2 p-2">
                        <h1 className="text-4xl md:text-2xl text-je-black text-left" style={{ fontFamily: 'Syne' }}>{t('podcast.title')}</h1>
                        <span className="text-l md:text-2xl text-je-black mb-4 font-extrabold text-left" style={{ fontFamily: 'Space Grotesk' }}>{t('podcast.description')}</span>
                    </div>
                    <img src="/images/podcast.svg" alt="Logo" className="w-1/2 md:w-1/2 h-auto md:h-full p-4 object-cover rounded-6xl"/>
                </div>
            </section>
            <section id='/recursos' className="w-full h-screen">
                <Title text={t('resources.title')} color="text-je-black" textAlign="text-center" />
            </section>
            <section id='/analisis' className="bg-je-red w-full h-screen bg-je-blue w-full h-screen pt-20 rounded-t-6xl">
                <Title text={t('analysis.title')} color="text-white" textAlign="text-center" />
            </section>
            <section id='/contacto' className="bg-je-red w-full h-screen bg-je-blue w-full h-screen pt-20 ">
                <div className="h-3/4 bg-je-white mx-4 md:mx-4 flex flex-col md:flex-row gap-6 md:gap-8 rounded-6xl p-2 md:p-8 overflow-hidden justify-around items-center">
                    <div className="flex flex-col justify-center w-full md:w-1/2 p-2">
                        <span className="text-l md:text-2xl text-je-black text-left" style={{ fontFamily: 'Space Grotesk' }}>{t('contact.subtitle')}</span>
                        <Title text={t('contact.title')} color="text-je-black" textAlign="text-left" />
                        <span className="text-l md:text-2xl text-je-black text-left" style={{ fontFamily: 'Space Grotesk' }}>{t('contact.collaborate')}</span>
                    </div>
                    <img src="/images/podcast.svg" alt="Logo" className="w-1/2 md:w-1/2 h-auto md:h-full p-4 object-cover rounded-6xl"/>
                </div>
                <div className="mx-4 md:mx-4 flex flex-col md:flex-row gap-6 md:gap-8 rounded-6xl p-2 md:p-8 overflow-hidden justify-center">
                    <Title text={t('contact.media')} color="text-je-white" textAlign="text-center" />
                    <div className="justify-evenly items-evenly flex flex-row lg:flex lg:items-center lg:justify-end lg:flex-1 lg:gap-x-6">
                        <a href="https://www.instagram.com/jose_echeve/" target="_blank" rel="noreferrer" className="text-white">
                            <BsInstagram className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a href="https://www.linkedin.com/in/jose-echeverria-0171b65a/" target="_blank" rel="noreferrer" className="text-white">
                            <BsLinkedin className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a href="https://twitter.com/joseecheve" target="_blank" rel="noreferrer" className="text-white">
                            <BsTwitter className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a href="https://www.tiktok.com/@jose.echeve" target="_blank" rel="noreferrer" className="text-white">
                            <BsTiktok className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a href="https://www.youtube.com/@CivitasPodcast" target="_blank" rel="noreferrer" className="text-white">
                            <BsYoutube className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a href="https://open.spotify.com/show/7Mry4XjWu3FjemmeYS2TlL?si=2ebd6daf370149df" target="_blank" rel="noreferrer" className="text-white">
                            <BsSpotify className="h-6 w-6" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>
            <section id='footer' className="flex-shrink-0 bg-je-black h-[448px]">
            </section>
            <div className="flex flex-col bottom-4 right-4 fixed">
                    <button className="py-1 px-2 md:py-2 md:px-4 rounded" onClick={() => i18n.changeLanguage('en')}>
                        <img src="/images/en.svg" alt="English" className="en h-6 w-6 md:h-8 md:w-8" />
                    </button>
                    <button className="py-1 px-2 md:py-2 md:px-4 rounded" onClick={() => i18n.changeLanguage('es')}>
                        <img src="/images/es.svg" alt="Spanish" className="es h-6 w-6 md:h-8 md:w-8" />
                    </button>
                </div>
        </div>
        
    );
}

export default PrincipalPage;