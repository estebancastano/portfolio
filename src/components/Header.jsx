function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-blue-500 text-black">
            <div className="text-lg font-bold">
                <a href="/" className="hover:text-blue-200">MySite</a>
            </div>
            <nav className="flex gap-4">
                <a href="#" className="hover:text-blue-200">Home</a>
                <a href="#" className="hover:text-blue-200">About</a>
                <a href="#" className="hover:text-blue-200">Contact</a>
            </nav>
        </header>
    )
}

export default Header