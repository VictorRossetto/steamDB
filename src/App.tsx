import { Route, Routes,BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from "./components/Footer/Footer";

import { Home } from './pages/home/Home';
import { Sale } from './pages/sale/Sale';
import { Notfound } from './pages/notFound/notFound';
import { AppInfo } from './pages/appInfo/AppInfo';
import { Search } from './pages/search/Search';

import './App.css'


export const App = ()=>{
    return(
        <div>
            <div className='--navbar-height'>
                <Header/>
            </div>

            <div className='body-wrap'>
                
                    <Routes>

                        <Route path='/' element={<Home/>} />
                        <Route path='app/:id' element={<AppInfo/>}/>
                        <Route path='shop/sale' element={<Sale/>} />
                        <Route path='search' element={<Search/>}/>

                        <Route path='*' element={<Notfound/>} />

                    </Routes>
                
            </div>

           <div className='app-footer'>
                <Footer/>
           </div>

        </div>
        
    )
}