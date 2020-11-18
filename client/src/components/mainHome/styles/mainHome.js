import styled from "styled-components"
import * as pallete from "../../../constants/theme"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    justify-content: space-between;
    padding: 3em 0;

    @media(max-width: ${pallete.phoneWidth}) {
        padding: ${pallete.paddingPhone} 0;
    }
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;

`

export const Left = styled.div`
    width: 40%;

    @media (max-width: ${pallete.phoneWidth}) {
        width: 100%;
        padding: 0 ${pallete.paddingPhone}
    }
`

export const Right = styled.div`
    width: 58%;

    @media (max-width: ${pallete.phoneWidth}) {
        display: none;
    }
`