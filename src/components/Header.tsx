import { FaHamburger } from "react-icons/fa"
import { Link } from "react-router-dom"
import Reveal from "react-awesome-reveal"
import { useAtom } from "jotai"

import { showMobileMenuAtom } from "../store"
import MobileMenu from "../components/MobileMenu"
import { fadeInRightShorter } from "../utils/keyframes"

const Header = () => {
    const [, setShowMobileMenu] = useAtom(showMobileMenuAtom)

    const showMobile = () => {
        setShowMobileMenu(true)
    }

    return (
        <header>
            <div className="fixed top-0 p-8">
                <Link to="/">
                    <img src="https://www.bcas.io/hubfs/BCAS-2022-Website/Typography/bcas-logo.svg" alt="bcas-logo" loading="lazy" width="191" height="41" />
                </Link>
            </div>

            <div className="max-xxl:hidden fixed top-1/4 left-8">
                <ul className="text-white text-sm">
                    <li className="mb-2">
                        <Reveal keyframes={fadeInRightShorter} delay={200} duration={1000}>
                            <Link to='/' className="header-link active">01. Home</Link>
                        </Reveal>
                    </li>
                    <li className="mb-2">
                        <Reveal keyframes={fadeInRightShorter} delay={300} duration={1000}>
                            <Link to='/' className="header-link">02. About Us</Link>
                        </Reveal>
                    </li>
                    <li className="mb-2">
                        <Reveal keyframes={fadeInRightShorter} delay={400} duration={1000}>
                            <Link to='/' className="header-link">03. Contact Us</Link>
                        </Reveal>
                    </li>
                    <li>
                        <Reveal keyframes={fadeInRightShorter} delay={500} duration={1000}>
                            <Link to='/' className="header-link">04. Blog</Link>
                        </Reveal>
                    </li>
                </ul>
            </div>

            <div className="xxl:hidden block fixed top-0 right-0 p-8">
                <button onClick={showMobile}>
                    <FaHamburger color="#fff" size={30} className="mr-4" />
                </button>
            </div>

            <MobileMenu />
        </header>
    )
}

export default Header