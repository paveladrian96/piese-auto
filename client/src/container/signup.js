import React, {useState, useEffect} from "react"
import {Register} from "../components"

export function SignUpContainer ({values, setValues, type, handleUpdate, clickSubmitSignup}) {

    const {nume, prenume, email, telefon, judet, localitate, adresa, codPostal, 
        password, passwordConfirmation, error, success, redirectToRefferrer }= values

    const handleChange = name => event => {
            setValues({...values, error: false, [name]: event.target.value})
    }

    return(
       <Register.Signup>
                <Register.SignupForm>
                    <Register.Subheader>
                        Date de contact
                    </Register.Subheader>
                    <Register.Section>
                        <Register.Label>
                            Email:
                            <Register.Input 
                                value={email}
                                onChange = {handleChange('email')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Nume:
                            <Register.Input 
                                value={nume}
                                onChange = {handleChange('nume')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Prenume:
                            <Register.Input 
                                value={prenume}
                                onChange = {handleChange('prenume')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Telefon:
                            <Register.Input 
                                value={telefon}
                                onChange = {handleChange('telefon')}
                            />
                        </Register.Label>
                    </Register.Section>
                    <Register.Subheader>
                        Adresa
                    </Register.Subheader>
                    <Register.Section>
                        <Register.Label>
                            Judet:
                            <Register.Input 
                                value={judet}
                                onChange = {handleChange('judet')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Localitate:
                            <Register.Input 
                                value={localitate}
                                onChange = {handleChange('localitate')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Adresa:
                            <Register.Input 
                                value={adresa}
                                onChange = {handleChange('adresa')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Cod Postal:
                            <Register.Input 
                                value={codPostal}
                                onChange = {handleChange('codPostal')}
                            />
                        </Register.Label>
                    </Register.Section>
                    {type !== 'update' && 
                    <>
                    <Register.Subheader>
                        Parola
                    </Register.Subheader>
                   <Register.Section>
                        <Register.Label>
                            Parola:
                            <Register.Input 
                                value={password}
                                type="password"
                                onChange = {handleChange('password')}
                            />
                        </Register.Label>
                        <Register.Label>
                            Confirma parola
                            <Register.Input 
                                value={passwordConfirmation}
                                type="password"
                                onChange = {handleChange('passwordConfirmation')}
                            />
                        </Register.Label>
                    </Register.Section>
                    </>
                    }
                    {type === 'update' ?
                    <Register.Submit 
                    type="submit"
                    onClick={(e) => handleUpdate(e)}
                    >
                        Modifica datele
                    </Register.Submit> :
                    <Register.Submit 
                    type="submit"
                    onClick={(e) => clickSubmitSignup(e)}
                    >
                        Inregistreaza-te
                    </Register.Submit>
                    }

                </Register.SignupForm>
            </Register.Signup>
    )
}