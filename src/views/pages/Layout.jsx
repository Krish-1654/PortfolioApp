import React from 'react'
import Navbar from '../layouts/header/Navbar'
import Footer from '../layouts/footer/Footer'

const Layout = ({children}) => {
  return (
    <>
    <header>
        {/* <Navbar/> */}
    </header>
    <main>
        {children}
    </main>
    <footer>
        <Footer/>
    </footer>
    </>
  )
}

export default Layout