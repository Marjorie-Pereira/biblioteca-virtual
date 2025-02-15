import { NavLink } from 'react-router'
export default function Header({ title }) {
    return (
        <header className="w-full flex-column bg-slate-800 shadow-md text-center text-white p-4 sticky top-0">
            <h1 className="text-3xl">{title}</h1>
            <nav className='text-xl'>
                <ul className='flex justify-center gap-4'>
                    <li className='hover:text-red-600'><NavLink to={"/"} className={({ isActive }) => isActive ? "text-red-600" : ""}>Home</NavLink></li>
                    <li className='hover:text-red-600 '><NavLink to={"/produtos"} className={({ isActive }) => isActive ? "text-red-600 animate-none" : "animate-pulse"}>Livros</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}