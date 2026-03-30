export default function FlexboxGrid() {
    return (
        <nav className="flex justify-between items-center p-4 text-white transition-all duration-300 bg-pink-500 hover:bg-pink-600 shadow-md">
            <h1 className="text-xl font-bold italic">MyWebsite</h1>
            <ul className="flex space-x-6 font-medium">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}