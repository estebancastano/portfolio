import '../styles/AboutMe.css';
import Profile from '../assets/profile.jpeg'
import Wave from '../assets/wave.svg'

function AboutMe() {
    return (
        <>
            <div className='mb-16 sm:-mt-52 md:-mt-52 -mt-40'>
                <div id='about' className='h-auto about-me'>
                    <img src={Wave} alt='Wave' className='w-full' />
                </div>
                <div className='relative flex flex-col md:flex-row text-white bg-green-light h-auto md:h-60 z-10'>
                    <div className='flex justify-center items-center mt-[-6rem] md:mt-0'>
                        <img src={Profile} alt='Profile' className='rounded-full w-32 md:w-48' />
                    </div>
                    <div className='flex flex-col justify-center md:ml-20 ml-8 mt-4 md:mt-0'>
                        <h2 className='text-2xl md:text-3xl'>Sobre mi</h2>
                        <p className='text-xl md:text-2xl h-auto max-w-full'>
                            Soy Esteban Andres Castaño, programador web con un año de experiencia en tecnologías como <strong>HTML, CSS, React, Tailwind y JavaScript</strong>. También sé trabajar con <strong>Git</strong>. Aunque estoy en las etapas iniciales de mi carrera y todavía tengo mucho que aprender, soy una persona proactiva que siempre busca mejorar. Trabajo bien en equipo y me esfuerzo por ser amable y respetuoso con mis compañeros.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutMe