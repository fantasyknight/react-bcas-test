import { useAtom } from "jotai"
import cn from "classnames"
import { Link } from "react-router-dom"
import { IoClose } from "react-icons/io5"

import { showMobileMenuAtom } from "../store"

const MobileMenu = () => {
    const [showMobileMenu, setShowMobileMenu] = useAtom(showMobileMenuAtom)

    const hideMobileMenu = () => {
        setShowMobileMenu(false)
    }

    return (
        <>
            <div className={cn(`fixed top-0 right-0 h-full bg-black transition-all z-[10]`, { 'translate-x-full': !showMobileMenu })}>
                <div className="flex flex-col relative h-full pl-16 pr-24 py-28">
                    <ul className="text-white text-sm">
                        <li className="mb-2">
                            <Link to="/" className="header-link">01. Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="header-link">02. About Us </Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/" className="header-link">03. Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/" className="header-link">04. Blog</Link>
                        </li>
                    </ul>

                    <div className="mt-auto text-white">
                        <span className="font-light text-xs">© BCAS 2024</span>
                    </div>

                    <button className="absolute right-5 top-10" onClick={hideMobileMenu}><IoClose color="#fff" size={30} /></button>
                </div>
            </div>

            {showMobileMenu && <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-[8]" onClick={hideMobileMenu}></div>}
        </>
    )
}

export default MobileMenu