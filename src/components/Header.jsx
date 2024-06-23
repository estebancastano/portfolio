function Header() {
    return (
        <>
        <header className="flex items-center justify-between p-6 bg-beige text-green text-2xl">
            <div className="font-bold">
                <a href="/" className="hover:text-green-light">MySite</a>
            </div>
            <nav className="flex gap-8">
                <a href="#" className="hover:text-green-light">Sobre mí</a>
                <a href="#" className="hover:text-green-light">Conocimientos</a>
                <a href="#" className="hover:text-green-light">Portafolio</a>
                <a href="#" className="hover:text-green-light">Contacto</a>
            </nav>
        </header>
        <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        </>
    )
}

export default Header