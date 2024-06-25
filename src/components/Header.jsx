import { IoMenu } from "react-icons/io5";
import { useState } from "react";
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <header className="flex flex-col md:flex-row items-center justify-center p-6 bg-beige text-green text-2xl sticky top-0 z-20">
                <nav className="flex flex-col md:flex-row gap-8 md:gap-10 w-full md:w-auto">
                    <button>
                        <IoMenu onClick={toggleMenu} className="md:hidden focus:outline-none" />
                    </button>

                    <div className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-8 md:gap-10 mt-4 md:mt-0 w-full md:w-auto text-center`}>
                        <a href="#about" className="hover:text-green-light">Sobre mí</a>
                        <a href="#skills" className="hover:text-green-light">Conocimientos</a>
                        <a href="#portfolio" className="hover:text-green-light">Portafolio</a>
                        <a href="#contactme" className="hover:text-green-light">Contacto</a>
                    </div>
                </nav>
            </header>
            <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 sticky top-20" />
        </>
    )
}

export default Header