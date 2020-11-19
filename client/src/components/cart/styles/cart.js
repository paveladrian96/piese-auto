import styled from "styled-components"
import * as pallete from "../../../constants/theme"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${pallete.widthMax};
    margin: 2em auto;
    justify-content: space-between;
    padding: 3em ;
    border: 4px solid ${pallete.light_color};

    @media (max-width: ${pallete.phoneWidth}) {
        margin: 1em auto;
        padding: ${pallete.paddingPhone};
        border: none;
    }

`
export const Title = styled.h1`
   font-size: 2em;
`

export const Articol = styled.div`
    width: 40%;
    display: flex;
    align-items: center;

    @media (max-width: ${pallete.phoneWidth}) {
        width: 100%;
     }
`

export const Info = styled.div`
    width: 15%;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .7rem;
    }
   
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em;
    text-align: center;
    border-bottom: 1px solid ${pallete.light_color};

    @media (max-width: ${pallete.phoneWidth}) {
        flex-wrap: wrap;
     }


`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    background: ${pallete.light_color};
    text-align: center;
    box-shadow: 2px 2px 2px #555;

    @media (max-width: ${pallete.phoneWidth}) {
        display: none;
    }
`

export const Count = styled.input`
    width: 5em;
    
    @media (max-width: ${pallete.phoneWidth}) {
        width: 2em;
    }

`

export const Name = styled.h2`
    display: block;
    margin-left: 1.5em;
    font-size: 1rem;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .8rem;
        margin-left: .9em;
    }
`

export const Img = styled.div`
    margin-left: 1em;

    
`
export const Button = styled.button`
    border: none;
    background: white;
    border-right: 1px solid ${pallete.dark_color};
    img {
        width: 1em;
        margin-right: .4em;
        background: white;
    }


`

export const ContentPayment = styled.div`
    display: flex;
    margin: 2em 0 0;
    border-top: 1px solid ${pallete.dark_color};
    align-items: center;
    justify-content: space-between;
    padding-top: 2em;

    @media (max-width: ${pallete.phoneWidth}) {
       flex-direction: column;
    }
`
export const Payment = styled.div`
    width: 40%;

    @media (max-width: ${pallete.phoneWidth}) {
        width: 100%;
     }
`

export const PaymentInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (max-width: ${pallete.phoneWidth}) {
        width: 100%;
     }
`

export const ParagraphSmall = styled.p`
    display: block;
    font-size: .9rem;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .7rem;
     }
`

export const ParagraphBig = styled.h5`
    display: block;
    font-size: 1.2rem;
    margin-bottom: 1.5em;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .8rem;
        margin-bottom: .9em;
     }

`

export const InfoHelper = styled.p`
     display: none;

     @media (max-width: ${pallete.phoneWidth}) {
        display: block;
     }
`