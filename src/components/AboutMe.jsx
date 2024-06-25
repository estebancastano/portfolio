import '../styles/AboutMe.css';
import Profile from '../assets/profile.jpeg'

function AboutMe() {
    return (
        <>
            <div id='about' className='h-30 about-me'>
                <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#7BAF82" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,101.3C672,107,768,181,864,186.7C960,192,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>

            </div>
            <div className='flex text-white h-60 bg-green-light pb-6'>
                <img src={Profile} className='flex rounded-xl ml-32 items-center'/>
                <div className='m-10'>
                    <h2 className='text-2xl md:text-3xl'>Sobre mi</h2>
                    <p className='text-xl md:text-2xl'>Soy apadisohe ghergiehrgoie heirhgierhg eigheir ejkkebg  </p>
                </div>

                
            </div>

        </>
    )
}

export default AboutMe