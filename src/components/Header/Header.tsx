import './Header.css'

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import {FiMenu} from "react-icons/fi"
import {SiSteamdb} from "react-icons/si"


export function Header() {
    const [search,setSearch] = useState('')

    const naigate = useNavigate()

    const handleSubmit = (e: { preventDefault: () => void; }) =>{
        e.preventDefault()

        if(!search) return

        naigate(`/search?q=${search}`)
        setSearch('')
    }

    return(
        <div className="header">
            <div className='header-menu-container'>
                <button className='header-menu' type='button'> <FiMenu size='17px'/><span>Menu</span></button>
            </div>

            <div className='header-navbar'>
                <Link to="/" className='header-brand'><SiSteamdb size='30px'/><span> SteamDB</span></Link>

                <form onSubmit={handleSubmit} className='header-search'>

                    <input type="text"
                        name="Search..." 
                        placeholder='Search...' 
                        id=""  
                        className='field' 
                        onChange={(e)=> setSearch(e.target.value)}
                        value={search}
                    />

                    <button type="submit" 
                        className='submit'><AiOutlineSearch size='18px'/>
                    </button>
                </form>
                <Link to="/Sale">Sale</Link>
                
                <Link to="/charts">Charts</Link>
                <Link to="/calculator">Calculator</Link>
                <Link to="/patchnotes">Patch notes</Link>
                <Link to="/upcoming">Upcoming</Link>
                <Link to="/discord">Discord</Link>
            </div>

            <div className='header-user'>
                <AiOutlineUser/>
            </div>
        </div>
    )
}