import React from 'react'
import { FooterContainer } from '../container/footer'
import { HeaderContainer } from "../container/header"
import {AlegePiesaByDistribuitorContainer} from "../container/alegePiesaByDistribuitor"

export default function AlegePiesaByDistribuitor (props) {
    return (
        <>
            <HeaderContainer />
            <AlegePiesaByDistribuitorContainer props={props}/>
            <FooterContainer />
        </>
    )
}
