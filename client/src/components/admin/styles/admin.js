import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    display: flex;
    max-width: ${pallete.widthMax};
    margin: 1.5em auto;
    justify-content: space-between;

    @media (max-width: ${pallete.windowsWidth}) {
        padding: ${pallete.paddingMac};
    }

    @media(max-width: ${pallete.phoneWidth}) {
        padding: ${pallete.paddingPhone};
        margin: 1em auto;
    }
`

export const Info = styled.div`
    width: 35%;

    @media(max-width: ${pallete.phoneWidth}) {
        width: 100%;
    }
`

export const Manager = styled.div`
    width: 60%;

    @media(max-width: ${pallete.phoneWidth}) {
        display: none;
    }
`

export const Title = styled.h1`
    @media(max-width: ${pallete.phoneWidth}) {
        font-size: 1.2rem;
    }
`

export const InfoList = styled.div`
    margin-top: 1.5em;
    border: ${pallete.light_color} 1px solid;
    padding: .5em;

    @media(max-width: ${pallete.phoneWidth}) {
        margin-top: 1em;
    }
`

export const InfoListItem = styled.p`
    font-size: 1.1rem;

    @media(max-width: ${pallete.phoneWidth}) {
        font-size: .9rem;
    }
`

export const Button = styled(ReachRouterLink)`
    display: block;
    border: none;
    width: fit-content;
    font-size: 1rem;
    cursor: pointer;
    background: ${pallete.constrast_color};
    color: ${pallete.light_color};
    text-decoration: none;
    padding: .3em .9em;
    margin: 1em 0;
`
export const ButtonRow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ButtonColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
