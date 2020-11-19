import styled from "styled-components"
import * as pallete from "../../../constants/theme"

export const Container = styled.div`
    display: flex;
    max-width: ${pallete.widthMax};
    margin: 0 auto;
    justify-content: space-between;
    padding: 2em 0;

    @media (max-width: ${pallete.phoneWidth}) {
        flex-direction: column;
    }
`

export const Signin = styled.div`
    
    width: 100%;

    @media (max-width: ${pallete.windowsWidth}) {
        padding: 0 ${pallete.paddingMac};
    }

    @media (max-width: ${pallete.phoneWidth}) {
       width: 100%;
       padding: ${pallete.paddingPhone};
    }
`

export const Signup = styled.div`
    width: 90%;

    @media (max-width: ${pallete.windowsWidth}) {
        padding: 0 ${pallete.paddingMac};
    }

    @media (max-width: ${pallete.phoneWidth}) {
        width: 100%;
        padding: ${pallete.paddingPhone};
    }
`

export const Subtitle = styled.h2`
    font-size: 2.5em;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: 1.3rem;
        margin-top: 1em;
    }

`

export const Paragraph = styled.p`
    font-size: 1.2em;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .9rem;
    }
`

export const SignupButton = styled.button`
    font-size: 1.4rem;
    border: none;
    color: ${pallete.light_color};
    background: ${pallete.constrast_color};
    border-radius: 4px;
    font-weight: 300;
    padding: .35em .9em;
    cursor: pointer;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: 1rem;
    }
`

export const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 1.2em;
    display: block;
    width: fit;
    width: 45%;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .8rem;
    }
`
export const Input = styled.input`
    font-size: 1.2em;
    color: ${pallete.dark_color};
    display: block;
    max-width: 100%;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: .8rem;
    }
`

export const Submit = styled.button`
    font-size: 1.4rem;
    border: none;
    color: ${pallete.light_color};
    background: ${pallete.constrast_color};
    border-radius: 4px;
    font-weight: 300;
    padding: .35em .9em;
    width: fit-content;
    margin-top: 1em;
    cursor: pointer;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: 1rem;
    }
`

export const Subheader = styled.h2`
    display: block;
    background: ${pallete.light_color};
    padding: .3em;
    box-shadow: 2.5px 5px;

    @media (max-width: ${pallete.phoneWidth}) {
        font-size: 1rem;
    }

`

export const Section = styled.div`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
`

export const LoginForm= styled.form``


export const Alert = styled.div`
  padding: 20px;
  background-color: ${pallete.red_color}; /* Red */
  color: white;
  margin-bottom: 15px;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`