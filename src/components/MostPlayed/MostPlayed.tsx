import { useState, useEffect } from "react"
import { HiOutlineArrowRight } from "react-icons/hi"
import { Link } from "react-router-dom"

import { API } from "../../api"
import { Games } from "../../types/Games"

type props={
    li:number
    games:Games[]
}

export function MostPlayed({li,games}:props) {

    games.sort((a:Games,b:Games) =>
    (b.playersNow > a.playersNow) ? 1 : -1)

    return(
        <div className='most-played-games cont'>
            <div className='most-played-games-title'>
                <div><h3>Most Played Games<HiOutlineArrowRight/></h3></div> <div> <p>Players Now</p> </div> <div> <p>Peak Today</p> </div>
            </div>
            <div >
                {games.map((item, index) => index < li &&(
                    <div className='app' key={index}> 
                        <Link to={'app/'+ item.app} > <img src={item.img} width="100"/> <p>{item.name}</p> </Link> 
                        <div className="l2"> <p>{item.playersNow}</p> </div> 
                        <div> <p>{item.peakToday}</p> </div> 
                    </div>
                ))}
                        
            </div>
        </div>
    )
}