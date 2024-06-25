import '../styles/Hero.css'

const Hero = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 hero">
            <div className="text-center text-white p-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Esteban Castaño</h1>
                <p className="text-xl md:text-2xl mb-8">
                    Desarrollador Front-End
                </p>
                <a href="#contactme">
                    <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-md shadow-md hover:bg-gray-100 transition duration-300">
                        <p>Contáctame</p>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Hero;
