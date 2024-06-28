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

                    <div className='flex flex-col m-10 sm:flex-wrap'>
                        <h2 className='text-2xl md:text-3xl'>Sobre mi</h2>
                        <p className='text-xl md:text-2xl h-auto max-w-full'>Soy apadisohe ghergiehrgoie heirhgierhg eigheir ejkkebg  </p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AboutMe