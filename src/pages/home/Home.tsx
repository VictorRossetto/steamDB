import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { API } from '../../api';

import { HotReleases } from '../../components/HotReleases/HotReleases';
import { MostPlayed } from '../../components/MostPlayed/MostPlayed';
import { PopularReleases } from '../../components/PopularReleases/PopularReleases';
import { TrendingGames } from '../../components/TrendingGames/TrendingGames';
import { Games } from '../../types/Games';

import './Home.css'

export function Home() {
    
    let nuGames = 10

    const [games, setGames] = useState<Games[]>([])

    const loadGames = async () => {
        let json = await API.getAllGames()
        setGames(json)
    }
        
    useEffect(()=>{
        loadGames()
    },[])

    return(
        <div className='body-content' id='main'>
            <div className='hello'>
                <h1 className='haader-title'>Database of everything on Steam.</h1>
                <div>
                    <p>This third-party website gives you better insight into the <Link to="https://store.steampowered.com/">Steam</Link> platform and everything in its database.</p>
                    <p><Link to="/faq/" title="Frequently Asked Questions">Look through our FAQ</Link> if you have any questions about SteamDB, <Link to="/discord/">join our Discord</Link>. <Link to="https://twitter.com/SteamDB">Follow @SteamDB on Twitter</Link>.</p>
                </div>
            </div>

            <div className='conteainer-products parent'>
                <MostPlayed li={nuGames} games={games}/>
                <TrendingGames li={nuGames} games={games}/>
                <PopularReleases li={nuGames} games={games}/>
                <HotReleases li={nuGames} games={games}/>
            </div>
        </div>
    )
}