import '../styles/AboutMe.css';
import Profile from '../assets/profile.jpeg'
import Wave from '../assets/wave.svg'

function AboutMe() {
    return (
        <>
            <div className='mb-16 -mt-52'>
                <div id='about' className='h-30 about-me'>
                    <img src={Wave} />

                </div>
                <div className='flex text-white h-60 bg-green-light '>
                    <img src={Profile} className='flex rounded-full ml-32 items-center mb-5' />

                    <div className='flex m-10 sm:flex-wrap'>
                        <h2 className='text-2xl md:text-3xl'>Sobre mi</h2>
                        <p className='text-xl md:text-2xl h-auto max-w-full'>Soy un programador web con un año de experiencia en tecnologías como <strong>HTML, CSS, React, Tailwind y JavaScript</strong>. También sé trabajar con <strong>Git</strong>. Aunque estoy en las etapas iniciales de mi carrera y todavía tengo mucho que aprender, soy una persona proactiva que siempre busca mejorar. Trabajo bien en equipo y me esfuerzo por ser amable y respetuoso con mis compañeros.

                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AboutMe