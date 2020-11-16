import React from  "react"
import { Distribuitor, Piesa} from "../components"
import CatalogContainer from "./catalog"
import PiesaContainer from "./piesa"

export function AlegePiesaByNameContainer ({props}){
    return(
        <Distribuitor>
            <Distribuitor.Catalog>
                <Distribuitor.Title>
                    Catalog Classic Store
                </Distribuitor.Title>
                <CatalogContainer />
            </Distribuitor.Catalog>
            <Distribuitor.Piese>
             <PiesaContainer piesaNume={props.match.params.search}/>
            </Distribuitor.Piese>
        </Distribuitor>
    )
}