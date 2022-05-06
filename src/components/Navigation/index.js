import react from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <header className="w-full h-fit bg-white border-b-2 border-gray-200 px-24 py-6 flex justify-center">
            <nav className="w-5/6">
                <Link to="/">
                    <h1 id="logo" className="text-2xl text-sky-400 tracking-wide font-semibold">
                        CardFlare
                    </h1>
                </Link>
            </nav>
        </header>
    )
}