function Header() {
    return (
        <>
        <header className="flex items-center justify-center p-6 bg-beige text-green text-2xl sticky top-0 z-20">
            <nav className="flex gap-8">
                <a href="#about" className="hover:text-green-light">Sobre mí</a>
                <a href="#skills" className="hover:text-green-light">Conocimientos</a>
                <a href="#portfolio" className="hover:text-green-light">Portafolio</a>
                <a href="#contact" className="hover:text-green-light">Contacto</a>
            </nav>
        </header>
        <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 sticky top-20" />
        </>
    )
}

export default Header