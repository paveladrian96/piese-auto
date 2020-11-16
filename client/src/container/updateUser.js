import React, {useState, useEffect} from "react"
import {isAutheticated} from "../apiFunctions/auth"
import { updateUser, update} from "../apiFunctions/user"
import { SignUpContainer } from "./signup"
import * as ROUTES from "../constants/routes"
import {Redirect} from "react-router-dom"

export function UpdateUserContainer() {
    const [values, setValues] = useState({
        nume: '',
        prenume: '',
        email: '',
        telefon: '',
        judet: '',
        localitate: '',
        adresa: '',
        codPostal: '',
        error: '',
        success: false,
        loading: false,
        redirectToRefferrer: false
    })

    const {nume, prenume, email, telefon, judet, localitate, adresa, codPostal, success, }= values

    const {user, token} = isAutheticated()

    const init = () => {
        setValues({...values, 
            nume: user.nume, 
            prenume: user.prenume,
            telefon: user.telefon,
            email: user.email,
            judet: user.judet,
            adresa: user.adresa,
            localitate: user.localitate,
            codPostal: user.codPostal
        })
    }

    useEffect(()=> {
        init()
    },[])

    const redirectUser = success => {
        if(success) {
            return <Redirect to={ROUTES.userDashboard} />
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        update(user._id, token, {nume, prenume, email, telefon, judet, localitate, adresa, codPostal})
            .then(data => {
                if(data.error) {
                    console.log(data.error)
                } else {
                    updateUser(data, () => {
                        setValues({...values, 
                            nume: data.nume, 
                            prenume: data.prenume, 
                            email: data.email, 
                            telefon: data.telefon, 
                            judet: data.judet, 
                            localitate: data.localitate, 
                            adresa: data.adresa, 
                            codPostal: data.codPostal, 
                            success: true})
                    })
                }
            })
    }

    return(
        <>
       <SignUpContainer values={values} 
                    setValues={setValues} 
                    type={'update'} 
                    handleUpdate={handleUpdate}
        />
        {redirectUser(success)}
        </>
    )
}