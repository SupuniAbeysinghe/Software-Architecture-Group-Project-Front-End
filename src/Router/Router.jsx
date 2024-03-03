import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import pages

import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound/NotFound'

// import Components
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import About from '../Pages/About'
import Shop from '../Pages/Shop'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login/Login'

export default function Router(){
    return(
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<NotFound />}/>
            <Route path='about' element={<About/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='login' element={<Login/>}/>






        </Routes>
        <Footer />
        </BrowserRouter>
    )
}