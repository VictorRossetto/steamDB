import { Link } from "react-router-dom"
import { Games } from "../../types/Games"


type props={
    li:number
    games:Games[]
}


export function TrendingGames({li,games}:props) {

    return(
        <div className='trending-games cont'>
            <div className='most-played-games-title'>
                <div><h3>Trending Games</h3></div> <div><p>Last 7 days</p> </div> <div><p>Players Now</p> </div>
            </div>
            
            
                {games.map((item,index)=> index < li &&(
                    <div className='app' key={index}>
                    <Link to={'app/'+ item.app} > <img src={item.img} width="100"/> <p>{item.name}</p> </Link>
                    <div className="l2"> <p>5</p></div>
                    <div> <p>{item.playersNow}</p></div>
                </div>
            ))}
            
        </div>
    )
    
}