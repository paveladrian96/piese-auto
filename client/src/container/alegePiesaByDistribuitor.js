import React, {useState, useEffect} from  "react"
import { getPieseByDistribuitor } from "../apiFunctions/getProducts"
import { Distribuitor, } from "../components"
import CatalogContainer from "./catalog"
import CardPiesa from "./card"

export function AlegePiesaByDistribuitorContainer ({props}){

    const [pieseByDistribuitor, setPieseByDistribuitor] = useState([])
    const [error, setError] = useState(false)

    const loadPieseByDistribuitor = () => {
        
        getPieseByDistribuitor(props.match.params.distribuitorId)
        .then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setPieseByDistribuitor(data)
                console.log(data)
            }
        })
    }

    useEffect(()=> {
       loadPieseByDistribuitor()
    },[props])
    return(
        <Distribuitor>
            <Distribuitor.Catalog>
                <Distribuitor.Title>
                    Catalog Classic Store
                </Distribuitor.Title>
                <CatalogContainer />
            </Distribuitor.Catalog>
            <Distribuitor.Piese>
            {pieseByDistribuitor.map((p, i) => (
                <CardPiesa key={i} piesa={p}  />
            ))}
            </Distribuitor.Piese>
            
        </Distribuitor>
    )
}