import React, { useState } from  "react"
import {Register} from "../components"
import {signup, signin, authenticate} from "../apiFunctions/auth"
import { Redirect } from "react-router-dom"
import {isAutheticated} from "../apiFunctions/auth"
import * as ROUTES from "../constants/routes"
import { SignUpContainer } from "./signup"


export function RegisterContainer(){
    const [values, setValues] = useState({
        nume: '',
        prenume: '',
        email: '',
        telefon: '',
        judet: '',
        localitate: '',
        adresa: '',
        codPostal: '',
        password: '',
        passwordConfirmation: '',
        error: '',
        success: false,
        emailLogin: 'pavel10@gmail.com',
        passwordLogin: 'capita999',
        loading: false,
        redirectToRefferrer: false
    })
    const [toggle, setToggle] = useState(false)
    const {user} = isAutheticated()

    const {nume, prenume, email, telefon, judet, localitate, adresa, codPostal, 
        password, passwordConfirmation, error, success,
        emailLogin, passwordLogin, redirectToRefferrer }= values


    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const clickSubmitSignup = event => {
        event.preventDefault()
        setValues({...values, error: false})
        signup({nume, prenume, email, telefon, judet, localitate, adresa, codPostal, password})
            .then(data => {
                if(data.error) {
                    setValues({...values, error: data.error, success: false} )
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true,
                    })
                    signin({email, password})
                    .then(data => {
                        if(data.error) {
                            setValues({...values, error: data.error, loading: false} )
                        } else {
                            authenticate(
                                data,
                                () => {
                                    setValues({
                                        ...values,
                                        redirectToRefferrer: true
                                    })
                                }
                            )
                        }
                    })
                }
            })

    }

    const clickSubmitLogin = event => {
        event.preventDefault()
        setValues({...values, error: false, loading: true})

        const user = {
            email: emailLogin,
            password: passwordLogin
        }
        signin(user)
            .then(data => {
                if(data.error) {
                    setValues({...values, error: data.error, loading: false} )
                } else {
                    authenticate(
                        data,
                        () => {
                            setValues({
                                ...values,
                                redirectToRefferrer: true
                            })
                        }
                    )
                }
            })
    }

    const redirectUser = () => {
        if(redirectToRefferrer) {
            if(user && user.role === 1){
                return <Redirect to={ROUTES.adminDashboard} />
            } else {
                return <Redirect to={ROUTES.userDashboard}/>
            }
        }
        if(isAutheticated()) {
            return <Redirect to="/"/>
        }
    }

    const ShowError = () => {
        return <Register.Alert style={{display: error ? '' : 'none'}}>
             {error}
             </Register.Alert>
     }

    const signInForm = () => {
        return(
            <Register.Signin>
                <Register.Subtitle>
                    Contul tau
                </Register.Subtitle>
                <Register.Paragraph>
                    Ai mai cumparat de la noi sau esti deja inregistrat?
                </Register.Paragraph>
                <Register.LoginForm>
                    <Register.Label style={{width: "100%"}}>
                            Email:
                            <Register.Input 
                                value={emailLogin}
                                onChange = {handleChange('emailLogin')}
                            />
                        </Register.Label>
                        
                        <Register.Label style={{width: "100%"}}>
                            Parola:
                            <Register.Input 
                                type="password"
                                value={passwordLogin}
                                onChange = {handleChange('passwordLogin')}
                            />
                        </Register.Label>
                        
                        <Register.Submit 
                            type="submit"
                            onClick={clickSubmitLogin}
                            >
                        Intra in cont
                    </Register.Submit>
                </Register.LoginForm>
            </Register.Signin>
        )
    }


    return (
        <Register>
            <Register.Flex>
                {ShowError()}  
                {!toggle && <Register.Signup>
                    <Register.Subtitle>
                    Nu ai un cont?
                </Register.Subtitle>
                <Register.Paragraph>
                    Inregistreaza-te pentru a beneficia de ultimele oferte!
                </Register.Paragraph>
                <Register.Submit
                    onClick={() => setToggle(true)}
                >
                    Inregistreaza-te
                </Register.Submit> 
                </Register.Signup>}
                {toggle && <SignUpContainer values={values} 
                    setValues={setValues} 
                    type={'register'} 
                    clickSubmitSignup={clickSubmitSignup}
            /> }
            </Register.Flex>
            <Register.Flex>
                {signInForm()}
            </Register.Flex>     
            {redirectUser()}    
        </Register>
    )
}