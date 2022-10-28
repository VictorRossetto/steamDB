import axios from "axios"

export const API={
    
    getGames:async(limit: number)=>{

        let url = `http://localhost:8819/games?limit=${limit}` 

        let response = await axios.get(url)
        return response.data
    },

    getAllGames:async () => {
        
        let url = `http://localhost:8819/games`

        let response = await axios.get(url)
        return response.data
    },

    getOneGame:async (i:string|undefined) => {
        
        let url = `http://localhost:8819/games/${i}`

        let response = await axios.get(url)
        return response.data
    },

    getNameGame:async (name:string|null) =>{

        let url = `http://localhost:8819/games/name/${name}`

        let response = await axios.get(url)
        return response.data
    }

}