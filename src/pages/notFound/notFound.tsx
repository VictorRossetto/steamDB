import "./notFound.css"

import { GiSkullCrack } from "react-icons/gi";

export function Notfound() {
    return(
        <div className="Notfound">

            <div className="Notfound-Skull">
                <GiSkullCrack size="300px"/>
            </div>
            
            <div className="Notfound-text1">
                <h1>The page you requested was not found.</h1>
            </div>
            <div className="Notfound-text2">
                <h1>That’s all we know.</h1>
            </div>
        </div>
    )
}