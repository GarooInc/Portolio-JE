import NavBar from "../components/NavBar/NavBar"
import i18n from "../../i18n"

const PrincipalPage = () => {
    return (
        <div className='principalPage'>
            <NavBar/>
            <section id='/' className="bg-je-blue w-full h-screen bg-je-blue w-full h-screen pt-20 rounded-b-6xl">
                <h1>HOME</h1>
            </section>
            <section id='/podcast' className="bg-je-blue w-full h-screen bg-je-blue w-full h-screen pt-20 rounded-6xl">
                <h1>PODCAST</h1>
            </section>
            <section id='/recursos' className="w-full h-screen">
                <h1>RECURSOS</h1>
            </section>
            <section id='/analisis' className="bg-je-red w-full h-screen bg-je-blue w-full h-screen pt-20 rounded-t-6xl">
                <h1>ANALISIS</h1>
            </section>
            <section id='/contacto' className="bg-je-red w-full h-screen bg-je-blue w-full h-screen pt-20 ">
                <h1>CONTACTO</h1>
            </section>
            <section id='footer' className="flex-shrink-0 bg-je-black h-[448px]">
            </section>
            <div className="flex flex-col bottom-4 right-4 fixed">
                    <button className="py-1 px-2 md:py-2 md:px-4 rounded" onClick={() => i18n.changeLanguage('en')}>
                        <img src="/images/en.svg" alt="English" className="en h-4 w-4 md:h-6 md:w-6" />
                    </button>
                    <button className="py-1 px-2 md:py-2 md:px-4 rounded" onClick={() => i18n.changeLanguage('es')}>
                        <img src="/images/es.svg" alt="Spanish" className="es h-4 w-4 md:h-6 md:w-6" />
                    </button>
                </div>
        </div>
        
    );
}

export default PrincipalPage;