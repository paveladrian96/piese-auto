import React, {useState, useContext, createContext} from "react"
import {Container, 
        Signin, 
        Signup, Subtitle, 
        Paragraph, 
        SignupButton, 
        Input, 
        Label, 
        SignupForm, 
        Submit,
        Subheader,
        Section,
        LoginForm,
        Alert,
        Flex
    } from "./styles/register"

export default function Register({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Register.Signup = function RegisterSignup({children, ...restProps}){
    return (
            <Signup {...restProps}>{children}</Signup>
    )
}

Register.Signin = function RegisterSignin({children, ...restProps}){
    return <Signin {...restProps}>{children}</Signin>
}

Register.Subtitle = function RegisterSubtitle({children, ...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Register.Paragraph = function RegisterParagraph({children, ...restProps}){
    return <Paragraph {...restProps}>{children}</Paragraph>
}

Register.SignupButton = function RegisterSignup({children, ...restProps}){
    return ( <SignupButton {...restProps}>
            {children}
        </SignupButton>
    )
}

Register.SignupForm = function RegisterSignupForm({children, ...restProps}){

    return ( <SignupForm {...restProps}>{children}</SignupForm>
    )
}

Register.Input = function RegisterInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>
}

Register.Label = function RegisterLabel({children, ...restProps}){
    return <Label {...restProps}>{children}</Label>
}

Register.Submit = function RegisterSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>
}

Register.Subheader = function RegisterSubheader({children, ...restProps}){
    return <Subheader {...restProps}>{children}</Subheader>
}

Register.Section = function RegisterSection({children, ...restProps}){
    return <Section {...restProps}>{children}</Section>
}

Register.LoginForm = function RegisterLoginForm({children, ...restProps}) {
    return <LoginForm {...restProps}>{children}</LoginForm>
}

Register.Alert = function RegisterAlert({children, ...restProps}) {
    return <Alert {...restProps}>{children}</Alert>
}

Register.Flex = function RegisterFlex({children, ...restProps}) {
    return <Flex {...restProps}>{children}</Flex>
}