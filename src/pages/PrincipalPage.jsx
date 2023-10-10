import React, { useState } from 'react';
import NavBar from "../components/NavBar/NavBar"
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next'
import Title from "../components/Title"
import {BsInstagram, BsTwitter, BsYoutube, BsTiktok, BsLinkedin,BsSpotify} from 'react-icons/bs'
import Slider from "../components/Slider/Slider"
import podcasts from "../../podcasts"
import CategoryList from "../components/CategoryList/CategoryList"
import resources from "../../resources"
import PostList from '../components/PostList/PostList';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';


const PrincipalPage = () => {
    const { t } = useTranslation()
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todo');  // 'Todo' es la categoría predeterminada
    
    const onCategorySelect = (categoria) => {
        setCategoriaSeleccionada(categoria);
        console.log(categoria);
    };

    // Definir postsFiltrados basado en la categoría seleccionada
    const postsFiltrados = resources[categoriaSeleccionada].posts;
    const primerosTresPosts = postsFiltrados.slice(0, 3);
    const siguientesTresPosts = postsFiltrados.slice(3, 6);

    return (
        <div className='principalPage'>
            <NavBar/>
            <section id='/' className="bg-je-blue w-full h-screen pt-12 md:pt-20 rounded-b-6xl flex items-center justify-center">
                <div className="w-full max-w-screen-xl mx-4 md:mx-auto flex flex-col md:flex-row md:gap-8 rounded-6xl p-4 md:p-8">
                    <img src="/images/profilepic.jpg" alt="Logo" className="mt-8 w-full md:mt-0 md:w-1/2 h-full md:h-auto object-cover rounded-6xl"/>
                    <div className="flex flex-col justify-center w-full md:w-1/2">
                        <Title text="JOSE ECHEVERRÍA" color="text-white" textAlign="text-right" />
                        <span className="pb-4 text-l md:text-2xl text-white text-right" style={{ fontFamily: 'Syne' }}>{t('intro.description')}</span>
                    </div>
                </div>
            </section>
            <section id='/podcast' className="bg-je-blue w-full h-screen pt-12 md:pt-20 rounded-6xl flex flex-col justify-start items-center">
                <div className="md:h-1/2 bg-je-white max-w-screen-xl mx-4 md:mx-4 flex flex-col md:flex-row gap-6 md:gap-8 rounded-6xl p-2 md:p-8 overflow-hidden justify-center items-center">
                    <div className="flex flex-col justify-center w-full md:w-1/2 p-2">
                        <h1 className="text-4xl md:text-2xl text-je-black text-left my-4" style={{ fontFamily: 'Syne' }}>{t('podcast.title')}</h1>
                        <span className="text-l md:text-2xl text-je-black mb-4 font-bold text-left" style={{ fontFamily: 'Space Grotesk' }}>{t('podcast.description')}</span>
                    </div>
                    <img src="/images/podcast.svg" alt="Logo" className="w-1/2 md:w-1/2 h-auto md:h-full p-4 object-contain rounded-6xl"/>
                </div>
                <Slider podcasts={podcasts}/>
            </section>
            <section id='/recursos' className="w-full">
                <Title text={t('resources.title')} color="text-je-black" textAlign="text-center" />
                <div className="flex md:flex-row gap-6 md:gap-8 rounded-t-6xl p-2 md:p-8 overflow-hidden justify-around items-center bg-je-gray m-4">
                    <CategoryList 
                        categories={t('resources.categories', { returnObjects: true })}
                        onCategorySelect={onCategorySelect}
                    />
                </div>
                <div className="flex md:flex-row gap-6 md:gap-8 rounded-b-6xl p-2 overflow-hidden justify-center md:justify-start items-start mx-4">
                        <ul>
                            {primerosTresPosts.map((post, index) => (
                                <li key={index} className="flex flex-col m-4">
                                    <PostList post={post}/>
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {siguientesTresPosts.map((post, index) => (
                                <li key={index} className="flex flex-col m-4">
                                    <PostList post={post}/>
                                </li>
                            ))}
                        </ul>
                </div>
            </section>
            <section id='/analisis' className="bg-je-red w-full h-screen bg-je-blue w-full h-screen pt-20 rounded-t-6xl">
                <Title text={t('analysis.title')} color="text-white" textAlign="text-center" />
            </section>
            <section id='/contacto' className="bg-je-red w-full  bg-je-blue w-full pt-20 ">
                <div className="h-3/4 bg-je-white mx-4 md:mx-4 flex flex-col md:flex-row gap-6 md:gap-8 rounded-6xl p-2 md:p-8 overflow-hidden justify-around items-center">
                    <div className="flex flex-col justify-center w-full md:w-1/2 p-2">
                        <span className="text-l md:text-2xl text-je-black text-left" style={{ fontFamily: 'Space Grotesk' }}>{t('contact.subtitle')}</span>
                        <Title text={t('contact.title')} color="text-je-black" textAlign="text-left" />
                        <span className="text-l md:text-2xl text-je-black text-left" style={{ fontFamily: 'Space Grotesk' }}>{t('contact.collaborate')}</span>
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-1/2 p-2">
                        <Form/>
                    </div>
                </div>
                <div className="p-8 md:mx-4 flex flex-col md:flex-row gap-2 md:gap-6 rounded-6xl  overflow-hidden justify-center">
                    <Title text={t('contact.media')} color="text-je-white" textAlign="text-center" />
                    <div className="justify-evenly items-evenly flex flex-row lg:flex lg:items-center lg:justify-end lg:flex-1 lg:gap-x-6">
                        <a href="https://www.instagram.com/jose_echeve/" target="_blank" rel="noreferrer" className="text-white">
                            <BsInstagram className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
                        </a>
                        <a href="https://www.linkedin.com/in/jose-echeverria-0171b65a/" target="_blank" rel="noreferrer" className="text-white">
                            <BsLinkedin className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
                        </a>
                        <a href="https://twitter.com/joseecheve" target="_blank" rel="noreferrer" className="text-white">
                            <BsTwitter className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
                        </a>
                        <a href="https://www.tiktok.com/@jose.echeve" target="_blank" rel="noreferrer" className="text-white">
                            <BsTiktok className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
                        </a>
                        <a href="https://www.youtube.com/@CivitasPodcast" target="_blank" rel="noreferrer" className="text-white">
                            <BsYoutube className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
                        </a>
                        <a href="https://open.spotify.com/show/7Mry4XjWu3FjemmeYS2TlL?si=2ebd6daf370149df" target="_blank" rel="noreferrer" className="text-white">
                            <BsSpotify className="h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>
            <section id='footer' className="flex-shrink-0 bg-je-black h-100">
                <Footer/>
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