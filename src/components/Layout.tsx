import React from "react"

import Header from "../components/Header"

type LayoutProps = {
    children?: React.ReactElement
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="page-wrapper">
            <Header />

            <main>{children}</main>
        </div>
    )
}

export default Layout