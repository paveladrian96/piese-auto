import styled from "styled-components"
import * as pallete from "../../../constants/theme"
import {Link as ReachRouterLink} from "react-router-dom"

export const Container = styled.div`
    background: ${pallete.dark_color};
    color: ${pallete.light_color};
    display: flex;
    flex-direction: column;
    margin: 0;
    

    

`

export const ContainerMax = styled.div`
   
    background: ${pallete.light_color};
`

export const ContainerMaxMain = styled.div`
    background: ${pallete.dark_color};
`

export const PreHeader = styled.div`
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    background: ${pallete.light_color};
    color: ${pallete.dark_color};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .7em 0;
    
    @media (max-width: ${pallete.windowsWidth}) {
        display: flex;
        flex-wrap: wrap;
        padding: 0 ${pallete.paddingPhone};
        justify-content: space-between;
     }

     @media (max-width: ${pallete.phoneWidth}) {
        display: none;
     }


`

export const Main = styled.div`
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .7em 0;

    @media (max-width: ${pallete.windowsWidth}) {
        display: flex;
        flex-wrap: wrap;
        padding: 0 ${pallete.paddingPhone};
        justify-content: space-between;
     }

     @media (max-width: ${pallete.phoneWidth}) {
        display: none;
     }

`

export const AdminDetails = styled.p`
    display: block;
    margin: .1rem;
    font-size: .9rem;
    
    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .6rem;
    }

`

export const LogoImg = styled.img`
    width: 150px;
    height: 35px;
    object-fit: cover;

    margin: 0;

    @media (max-width: ${pallete.phoneWidth}) {
        width: 100px;
        height: 28px;
    }
`
export const Logo = styled(ReachRouterLink)`
    display: flex;
    flex-direction: column;
    margin:0;
    text-decoration: none;
    align-items: center;
    &:hover {
        text-decoration: none;
    }

`
export const LogoText = styled.p`
    font-size: 2rem;
    font-weight: 800;
    font-style: italic;
    color: ${pallete.constrast_color};
    margin:0;
    color: #d62d2a;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: 1.3rem;
    }
`

export const Button = styled(ReachRouterLink)`
    border: none;
    padding: 0.9em 1em;
    
    font-size: 1rem;
    height: fit-content;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: inherit;
    color: ${pallete.light_color};
    text-decoration: none;

    img {
        filter: brightness(0) invert(.9);
        width: 1.5em;
        margin-right: .4em;
    }

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .8rem;
        padding: .5rem .8rem;
    }
`

export const ButtonSmall = styled(ReachRouterLink)`
    border: none;
    padding: 0.2em 0;
    
    font-size: .8rem;
    height: fit-content;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: inherit;
    color: ${pallete.light_color};
    text-decoration: none;
    margin-bottom: .5em;

    &:hover:{
        color:  ${pallete.light_color};
    }

    img {
        filter: brightness(0) invert(.9);
        width: 1.5em;
        margin-right: .4em;
    }

    @media (max-width: ${pallete.phoneWidth}) {
        img {
            width: 2.5em;
        }
    }
`
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;

    @media (max-width: ${pallete.phoneWidth}) {
        display: none;
    }
`

export const InfoShop = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;

    @media (max-width: ${pallete.macWidth}) {
        flex-wrap: wrap;
    }

    @media (max-width: ${pallete.phoneWidth}) {
        flex-direction: column;
    }
`

export const InfoClient = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${pallete.phoneWidth}) {
        padding: ${pallete.paddingPhone};
    }

`

export const Basket = styled(ReachRouterLink)`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    background: #0a1a24;
    padding: .4rem;
    color: ${pallete.constrast_color};

    img {
        filter: brightness(0) invert(1);
        width: 2em;
        margin-right: .4em;
        text-decoration: none;
    
    }

    &:hover {
        color: inherit;
    }
    
`

export const Search = styled.input`
    padding: .5em 1em;
    border: ${pallete.constrast_color} 2px solid;
    display:block;
    @media (max-width: ${pallete.phoneWidth}) {
        width: 75%;

    }

    
`

export const SearchButton = styled(ReachRouterLink)`
    padding: .5em 1em;
    background: ${pallete.constrast_color};
    border: none;
    cursor: pointer;
    color: ${pallete.light_color};
    display:block;
    text-align: center;

    &:hover {
        text-decoration: underline;
        color: ${pallete.light_color};
        text-align: center;
    }
    
    @media (max-width: ${pallete.phoneWidth}) {
        width: 25%;

    }

`

export const SearchField = styled.form`
    display: flex;
    font-size: 1.2rem;

    @media (max-width: ${pallete.phoneWidth}) {
        margin-top: .5em;
        justify-content: space-between;
        width: 100%;
        font-size: .8rem;
     }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
`

export const Select = styled.select`
    font-size: 1.2rem;
    padding: .5em 1em;
    border: ${pallete.constrast_color} 2px solid;
`

export const Option = styled.option`
    font-size: 1.2rem;
    padding: .5em 1em;
    border: ${pallete.constrast_color} 2px solid;
    color: ${pallete.dark_color}
`

export const ContainerMobile = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${pallete.paddingPhone};
    flex-direction: column;
    

     @media (min-width: ${pallete.phoneWidth}) {
        display: none;
     }


`

export const SectionMobile = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    

`

export const Extension = styled.button`
    background: inherit;
    border: none;

    img {
        filter: brightness(0) invert(1);
        width: 3em;
        text-decoration: none;

    }
 
`

export const Meniu = styled.div`
        position: fixed;
        height: 60vh;
        top: .5em; 
        left: .5em;
        z-index: 20;
        width: 90%;
        background: ${pallete.dark_color};
`

