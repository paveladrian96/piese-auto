import React, {useState, useEffect} from  "react"
import { getDistribuitori} from "../apiFunctions/getProducts"
import ShowImage from "../utils/ShowImage"
import { Car } from "../components"
import * as ROUTES from "../constants/routes"
import {Redirect} from "react-router-dom"

export function AlegeProducatorContainer({dimension="big"}){

    const [distribuitori, setDistribuitori] = useState([])
    const [error, setError] = useState([])
    const [redirect, setRedirect] = useState(false)
    const [distribuitorId, setDistribuitorId] = useState('')


    const init = () => {
        getDistribuitori()
            .then(data => {
                if(data.error) {
                    setError(data.error)
                } else {
                    setDistribuitori(data)
                }
            })
    }

    useEffect(() =>{
        init()
    },[])

    const handleClick = id => {
        setRedirect(true)
        setDistribuitorId(id)
        console.log(id)
    }

    const redirectPage = (redirect) => {
        if(redirect)
        {
            return <Redirect to={`${ROUTES.alegePiesaByMarca}/${distribuitorId}`} />
        }
    }

    const showDistribuitori = () => {
        return (
            <Car>
                
                <Car.TitleLink to={ROUTES.alegeProducatori}>
                    Alege producatori
                </Car.TitleLink>
            {dimension === "big" ?
             <Car.MarciAuto>
                {distribuitori.map((d, i) =>(
                <Car.MarciAutoCard key={i} onClick={()=> handleClick(d._id)}>
                    <ShowImage item={d} url="distribuitori" />
                    <Car.Name>{d.nume}</Car.Name>
                </Car.MarciAutoCard>
                ))}
            </Car.MarciAuto>
             :
             <Car.MarciAutoSmall>
                {distribuitori.map((d, i) =>(
                <Car.MarciAutoCard key={i} onClick={()=> handleClick(d._id)}>
                    <ShowImage item={d} url="distribuitori" />
                    <Car.Name>{d.nume}</Car.Name>
                </Car.MarciAutoCard>
                ))}
            </Car.MarciAutoSmall>}
            {redirectPage(redirect)}
        </Car>
        ) 
    }

    return (
            showDistribuitori()
    )
}