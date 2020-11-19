import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    background: ${pallete.dark_color};
    color: ${pallete.light_color};
    display: flex;
    flex-direction: column;

   
`

export const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;

    margin: 1em auto;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: 1.1rem;
        margin: .8em auto;
    }
`

export const Link = styled.a`
    text-decoration: none;
    font-size: .9rem;
    color:inherit;
    margin: .5em 0;

    &:hover {
        color: ${pallete.constrast_color};
    }

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .8rem;
        font-weight: 300;
    }
`

export const Copyright = styled.div`
    background: black;
    color: ${pallete.gray_color};
    text-align: center;
    font-size: .8rem;
    padding: 0;
    margin-top: .5em;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .6rem;
    }
`

export const Subtitle = styled.div`
    font-size: 1rem;
    margin: 1em 0;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: 1rem;
        margin: .5em 0;
    }
`

export const Row = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 1em;
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    margin-bottom: 1em;

    @media (max-width: 900px) {
       display: flex;
       flex-wrap: wrap;
       padding: 0 1em;
       justify-content: space-between;
    }

    @media (max-width: ${pallete.phoneWidth}) {
        display: flex;
        flex-direction: column;
        padding: 0 1em;
        justify-content: space-between;
        margin-bottom: .5em;
     }

     @media(max-width: ${pallete.windowsWidth}) {
        padding: ${pallete.paddingMac};
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`
export const InternalRoute = styled(ReachRouterLink)`
    text-decoration: none;
    font-size: .8rem;
    color: white;
    margin: 1em 0;

    &:hover {
        color: ${pallete.constrast_color};
    }

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .8rem;
        margin: .5em 0;
        font-weight: 300;
    }


`

export const SuportInfo = styled.p`
    text-decoration: none;
    font-size: .8rem;
    color:inherit;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .8rem;
        margin: .5em 0;
        font-weight: 300;
    }
`