import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

import { IconType } from "react-icons";
import { 
    DiApple,
    DiWindows,
    DiLinux 
}from "react-icons/di";
import{ GiMinotaur } from "react-icons/gi"


import { Games } from "../../types/Games";
import { API } from '../../api';
import './AppInfo.css'



export function AppInfo  () {

    
    const {id} = useParams()
    
    const [game,setGame] = useState<Games[]>([])

    const loadGames = async () => {
        let json = await API.getOneGame(id)
        
        setGame(json)
    }
        
    useEffect(()=>{
        loadGames()
    },[])
    

    return(
        

        <div>
            {game.length == 0 &&(
                <div className="contnotFound">
                    <div className="mino">
                        <GiMinotaur size={300} color="blue" />
                    </div>
                    <div className="Notfo">
                        <h1>The page you requested was not found.</h1>
                    </div>
                </div>
            )}

            {game.map((item,index)=>(
                
                    <div className="con" key={index}>
                        <div className="titleGame"><h2>{item.name}</h2></div>
                        <div className="conter-ma">
                            <div>
                            <div className="conter-l">
                                <div className="border">App ID</div><div className="border">{item.app}</div>
                                <div className="border">App Type</div><div className="border">{item.appType}</div>
                                <div className="border">Developer</div><div className="border">{item.developer.toString()}</div>
                                <div className="border">Publisher</div><div className="border">{item.publisher}</div>
                                <div className="border">Supported Systems</div><div className="supportedSystems border">
                                    {item.supportedSystems.map((i,t)=>(
                                        <div key={t} >
                                        {i == 'Windows' &&(
                                            <><DiWindows/></>
                                        )} 
                                        {i == 'Linux' &&(
                                            <><DiLinux/></>
                                        )}
                                        {i == 'macOs' &&(
                                            <><DiApple/></>
                                        )}
                                        <p>{i} </p></div>
                                    ))}</div>

                                <div className="border">Last Change Number</div><div className="border">{item.lasChangeNumber}</div>
                            </div>
                            </div>                    
                            <div className="conter-r">
                                <img src={item.img} />
                                <div className="play"><h2>{item.playersNow}</h2><p>in-game</p></div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )

}