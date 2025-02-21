
import './Card.css'
import React from "react"
import ChaildCard from "./ChaildCrad"
export const CrardContext=React.createContext()
const Card=()=>{
    const info=[ 
        { imageUrl:'/T1.jpg',name:'Lakshmi', id:101,Place:'Bangalore' },
        { imageUrl:'/T2.jpg',name:'Latha', id:103,Place:'Mumbai' },
        { imageUrl:'/T3.jpg',name:'Leela', id:104,Place:'AP' }
    ]
    return(
        <div className="aa">
          <CrardContext.Provider value={info}>
            <ChaildCard />
          </CrardContext.Provider>
        </div>
    )
}
export default Card