import React, {useState, useContext, createContext } from "react"
import {Container, PreHeader, Main, AdminDetails, Logo, Button, InfoClient, InfoShop,
        LogoText, LogoImg, Search, Details, SearchButton, SearchField, ContainerMax,
        RightSide, Basket, ButtonSmall, Select, Option, ContainerMaxMain,
        ContainerMobile, SectionMobile, Extension, Meniu} from "./styles/header"

const ToggleContext = createContext()


export default function Header({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.ContainerMax = function HeaderContainerMax({children, ...restProps}) {
    return <ContainerMax {...restProps}>{children}</ContainerMax>
}

Header.PreHeader = function HeaderPreHeader({children, ...restProps}) {
    return <PreHeader {...restProps}>{children}</PreHeader>
}

Header.AdminDetails = function HeaderAdminDetails({children, ...restProps}){
    return <AdminDetails {...restProps}>{children}</AdminDetails>
}

Header.Main = function HeaderMain({children, ...restProps}){
    return <Main {...restProps}>{children}</Main>
}
Header.LogoText = function HeaderLogoText({children, ...restProps}){
    return <LogoText {...restProps}>{children}</LogoText>
}

Header.Logo = function HeaderLogo({children, ...restProps}){
    return <Logo {...restProps}>{children}</Logo>
}

Header.LogoImg = function HeaderLogoImg({to, ...restProps}){
    return  <LogoImg {...restProps} />
    
}

Header.Button = function HeaderButton({children, src,...restProps}){
    return <Button {...restProps}> {src && <img src={src} alt="Login"/>} {children}</Button>
}

Header.ButtonSmall = function HeaderButtonSmall({children, src,...restProps}){
    return <ButtonSmall {...restProps}> {src && <img src={src} alt="Login"/>} {children}</ButtonSmall>
}

Header.InfoClient = function HeaderInfoClient({children, ...restProps}){
    return <InfoClient {...restProps}>{children}</InfoClient>
}

Header.InfoShop = function HeaderInfoShop({children, ...restProps}){
    return <InfoShop {...restProps}>{children}</InfoShop>
}

Header.Search = function HeaderSearch({children, ...restProps}){
    return <Search {...restProps}>{children}</Search>
}

Header.Select = function HeaderSelect({children, ...restProps}){
    return <Select {...restProps}>{children}</Select>
}

Header.Option = function HeaderOption({children, ...restProps}){
    return <Option {...restProps}>{children}</Option>
}

Header.SearchButton = function HeaderSearchButton({children, ...restProps}){
    return <SearchButton {...restProps}>{children}</SearchButton>
}

Header.SearchField = function HeaderSearchField({children, ...restProps}){
    return <SearchField {...restProps}>{children}</SearchField>
}

Header.Details = function HeaderDetails({children, ...restProps}){
    return <Details {...restProps}>{children}</Details>
}

Header.RightSide = function HeaderRightSide({children, ...restProps}){
    return <RightSide {...restProps}>{children}</RightSide>
}

Header.Basket = function HeaderBasket({children, src, ...restProps}){
    return <Basket {...restProps}>{src && <img src={src} alt="Login"/>} {children}</Basket>
}

Header.ContainerMaxMain = function HeaderContainerMaxMain({children, ...restProps}){
    return <ContainerMaxMain {...restProps}>{children}</ContainerMaxMain>
}

Header.ContainerMobile = function HeaderContainerMobile({children, ...restProps}){
    return <ContainerMobile {...restProps}>{children}</ContainerMobile>
}

Header.SectionMobile = function HeaderSectionMobile({children, ...restProps}){
    const[toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
         <SectionMobile {...restProps}>{children}</SectionMobile>
         </ToggleContext.Provider>
    )
}

Header.Extension = function HeaderExtension({children, src, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext)

    return <Extension onClick={()=>setToggleShow(!toggleShow)} {...restProps}> 
                
                {toggleShow ? (
                <img  src={require("../../images/logos/close.png")} alt="Close"/>
                ) : (
                <img  src={require("../../images/logos/hamburger.png")} alt="Add"/>
                )}
                {children}
           </Extension>
}

Header.Meniu = function HeaderContainerMeniu({children, ...restProps}){
    const {toggleShow} = useContext(ToggleContext)

    return (
        toggleShow ? <Meniu {...restProps}>{children}</Meniu> : null
    )
    
}

