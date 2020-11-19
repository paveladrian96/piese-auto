import styled from "styled-components"
import * as pallete from "../../../constants/theme"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Total = styled.h2`
    font-size: 1.7rem;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: 1.4rem;
    }
`

export const TextArea = styled.textarea`
    height: 500px;  
    font-size: 1rem;
    text-aling: left;
    padding: .2em;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .8rem;
        height: auto;
    }
`