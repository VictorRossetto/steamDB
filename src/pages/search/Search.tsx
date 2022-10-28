import {useState, useEffect} from "react"
import { Link, useSearchParams } from "react-router-dom"

import { API } from "../../api"
import { Games } from "../../types/Games"

import "./Search.css"

export function Search() 
{
    const [searchParams] = useSearchParams()
    const [game, setGame] = useState<Games[]>([])
    const query = searchParams.get('q')

    const loadGame = async () =>{
        let json = await API.getNameGame(query)
        setGame(json)
    }


    useEffect(()=>{
        loadGame()
    },[query])
    

    return(
        <div className="searchGames">
            <div className="searchGames-man">

                <h1>Search: {query}</h1>

                <div className="searchTb-man">
                    <div className="searchTb">
                        <div>APPID</div>
                        <div>APP TYPE</div>
                        <div>NAME</div>
                    </div>
                    {game.map((item,index)=>(
                        <div key={index} className="searchTb">
                            <Link to={'/app/'+ item.app}>{item.app}</Link>
                            <div>{item.appType}</div>
                            <div>{item.name}</div>
                        </div>
                    ))}
                </div>
                

            </div>
        </div>
    )
}