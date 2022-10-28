import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Games } from '../../types/Games'

type props={
    li:number
    games:Games[]
}


export function PopularReleases ({li,games}:props){

    
    return(
        <div className='popular-releases cont'>
            <div className='most-played-games-title'>
                <div><h3>Popular Releases<HiOutlineArrowRight/></h3></div> <div><p>Peak Today</p> </div> <div> <p>price</p> </div>
            </div>
            {games.map((item,index)=> index < li &&(
                <div className='app' key={index}>
                    <Link to={'app/'+ item.app} > <img src={item.img} width="100"/> <p>{item.name}</p> </Link>
                    <div className="l2"> <p>{item.peakToday}</p></div>
                    <div>{item.price == 0 ?(<p>Free</p>) :(<p>{item.price.toLocaleString("en-US",{style:"currency", currency:"USD"})}</p>)}</div>
                </div>
            ))}
        </div>
    )
}