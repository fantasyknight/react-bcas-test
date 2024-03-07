import React from "react"
import { FaHamburger } from "react-icons/fa"
// import { Plus_Jakarta_Sans } from '@next/font/google'
import { Link } from "react-router-dom"
// import Image from "next/image"
import { useAtom } from "jotai"

import { showMobileMenuAtom } from "../store"
import MobileMenu from "./MobileMenu"

type LayoutProps = {
    children?: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
    const [, setShowMobileMenu] = useAtom(showMobileMenuAtom)

    const showMobile = () => {
        setShowMobileMenu(true)
    }

    return (
        <div className="page-wrapper">
            <header>
                <div className="fixed top-0 p-8">
                    <Link to="/">
                        <img src="https://www.bcas.io/hubfs/BCAS-2022-Website/Typography/bcas-logo.svg" alt="bcas-logo" loading="lazy" width="191" height="41" />
                    </Link>
                </div>

                <div className="fixed top-0 right-0 p-8">
                    <button onClick={showMobile}>
                        <FaHamburger color="#fff" size={30} className="mr-4" />
                    </button>
                </div>

                <MobileMenu />
            </header>

            <main>{children}</main>
        </div>
    )
}

export default Layout