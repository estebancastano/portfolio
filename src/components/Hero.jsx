import '../styles/Hero.css'

const Hero = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 hero">
            <div className="text-center text-white p-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Hola, soy Esteban Castaño</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                    +1 año de experiencia como <strong>desarrollador Front-End</strong> de Medellín, Colombia
                </p>
            </div>
        </div>
    );
};

export default Hero;
