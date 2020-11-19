import React , {useState, useEffect} from "react"
import { Header } from "../components"
import * as ROUTES from "../constants/routes"
import {isAutheticated, signout} from "../apiFunctions/auth"
import { useHistory } from 'react-router-dom'
import * as pallete from "../constants/theme"
import {getCart} from "../apiFunctions/cartHelpers"



export const HeaderContainer =  ({run}) =>{

    const [data, setData] = useState({
        tipuri: [],
        tip: '',
        search: '',
        results: [],
        searched: false,
        
    })
    const [items, setItems] = useState([])
    const [pret, setPret] = useState(0)

    const { search } = data


    useEffect(() =>{
        setItems(getCart())
        
    },[run])

    useEffect(() =>{
       PretTotal()
    },[items])


    const isActive = (history, path) => {
        if (history.location.pathname === path) {
            return {color: pallete.constrast_color,
                    borderBottom: `1px solid ${pallete.constrast_color}`}
        } else {
            return {color: pallete.light_color}
        }
    }

    const history = useHistory()

    const handleSignout = (history) => {
        signout(()=> {
            
        })
    }

    const handleChange = (nume) => e  => {
        setData({...data, [nume]: e.target.value, searched:false})
    }

    const PretTotal = () => {
        let pretCalculat = 0
        items.map((item) => {
            pretCalculat +=item.pret*item.count
        })
        setPret(pretCalculat)
    }

    const showPreHeader = () => {
        return(
            <Header.ContainerMax>
                <Header.PreHeader>
                    
                    <Header.Logo to={ROUTES.HOME}>
                        <Header.LogoImg  src={require("../images/logos/classic-auto-logo.jpg")} alt="Classic-Auto" />
                        <Header.LogoText>Classic Auto</Header.LogoText>
                    </Header.Logo>
                    {searchForm()}
                    <Header.Details>
                        <Header.AdminDetails>Contacteaza-ne: <span style={{color: `${pallete.constrast_color}`, fontWeight: "800"}}>0752107410</span></Header.AdminDetails>
                        <Header.AdminDetails>Program: Lun-Vin: 09:00 - 18:00</Header.AdminDetails>
                        <Header.AdminDetails>E-mail: office@classicauto.ro</Header.AdminDetails>
                    </Header.Details>
                    
                </Header.PreHeader>
            </Header.ContainerMax>
        )
    }

    const searchForm = () => {
        return(
            <Header.SearchField >
                <Header.Search 
                    type="search"
                    placeholder="Cauta piese dupa nume"
                    onChange={handleChange('search')}
                />
                <Header.SearchButton
                    to={`${ROUTES.alegePiesaByName}/${search}`}
                >
                    Cauta
                </Header.SearchButton>
            </Header.SearchField>
        )
    }

    const showShopInfo = () => {
        return (
            <>
                    <Header.Button
                            src={require("../images/logos/home2.png")}
                            to={ROUTES.HOME}
                            style={isActive(history, ROUTES.HOME)}
                    >
                        Pagina principala
                    </Header.Button>

                    <Header.Button
                            to={ROUTES.alegePiesa}
                            style={isActive(history, ROUTES.alegePiesa)}
                            src={require("../images/logos/piesa.png")}
                    >
                        Piese auto
                    </Header.Button>

                    <Header.Button
                            to={ROUTES.alegeMarca}
                            style={isActive(history, ROUTES.alegeMarca)}
                            src={require("../images/logos/marca.png")}
                    >
                        Marca auto
                    </Header.Button>
                    <Header.Button
                            to={ROUTES.alegeProducatori}
                            style={isActive(history, ROUTES.alegeProducatori)}
                            src={require("../images/logos/producatori.png")}
                    >
                        Producatori
                    </Header.Button>
            </>
        )
    }

    const showInfoClient = () => {
        return (
                <Header.InfoClient>
                            <Header.ButtonSmall  
                                to={ROUTES.userDashboard}
                                style={isActive(history, ROUTES.userDashboard)}
                                src={require("../images/logos/favorite.png")}
                            >
                            Salvate
                            </Header.ButtonSmall>
                    {isAutheticated() && isAutheticated().user.role === 0 &&
                            <Header.ButtonSmall  
                                to={ROUTES.userDashboard}
                                style={isActive(history, ROUTES.userDashboard)}
                                src={require("../images/logos/account.png")}
                            >
                                    Contul meu
                            </Header.ButtonSmall>}
                        {isAutheticated() && isAutheticated().user.role === 1 &&
                            <Header.ButtonSmall   
                                to={ROUTES.adminDashboard}
                                style={isActive(history, ROUTES.adminDashboard)}
                                src={require("../images/logos/account.png")} 
                            >
                                Contul meu
                            </Header.ButtonSmall>}
                    
                        {!isAutheticated() &&
                            <Header.ButtonSmall src={require("../images/logos/login.png")} 
                            style={isActive(history, ROUTES.REGISTER)}
                                            to={ROUTES.REGISTER}>Intra in cont 
                            </Header.ButtonSmall>}
                            {isAutheticated() && 
                            <Header.ButtonSmall 
                                src={require("../images/logos/logout.png")} 
                                to={ROUTES.HOME}
                                onClick={handleSignout}
                                style={isActive(history, ROUTES.REGISTER)}
                            >
                                Iesi din cont 
                            </Header.ButtonSmall>}
                        </Header.InfoClient>
        )
    }

    const showMain = () => {
        return (
            <Header.ContainerMaxMain>
            <Header.Main>
                <Header.InfoShop>
                    {showShopInfo()}
                </Header.InfoShop>
                <Header.RightSide>
                        {showInfoClient()}
                        <Header.Basket
                        src={require("../images/logos/cart.png")}
                            to={ROUTES.cart}
                        >
                            <span style={{fontSize: ".8rem", color: `${pallete.light_color}`, marginRight: "1em"}}>{items.length > 0  ? `${items.length} articole salvate` : "Niciun articol salvat" }</span>
                                {pret} RON 
                        </Header.Basket>
                    </Header.RightSide>
            </Header.Main>
            </Header.ContainerMaxMain>
        )
    }

    const showMobileHeader = () => {
        return (
            <Header.ContainerMobile>
            
                <Header.SectionMobile>
                    <Header.Extension />
                    <Header.Logo to={ROUTES.HOME}>
                            <Header.LogoImg  src={require("../images/logos/classic-auto-logo.jpg")} alt="Classic-Auto" />
                            <Header.LogoText>Classic Auto</Header.LogoText>
                    </Header.Logo>
                    <Header.ButtonSmall   
                        src={require("../images/logos/cart.png")}
                        to={ROUTES.cart}
                    >
                    </Header.ButtonSmall>
                    
                    
                </Header.SectionMobile>
                <Header.SectionMobile> 
                    {searchForm()}
                </Header.SectionMobile>
            </Header.ContainerMobile>
            
        )
    }

    const showMeniu = () => {
        return (
                    <Header.MeniuContainer>
                        <Header.Meniu>
                            <Header.MeniuList>
                                {showInfoClient()}
                                {showShopInfo()}
                            </Header.MeniuList>
                        <Header.MeniuClose />
                        
                    </Header.Meniu>
                    </Header.MeniuContainer>
        )
    }

    return(
        <Header>
            {showMeniu()}
            {showMobileHeader()}
            {showPreHeader()}
            {showMain()}
        </Header>
    )
}

