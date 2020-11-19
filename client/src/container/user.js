import React, {useState, useEffect} from "react"
import { User } from "../components"
import * as ROUTES from "../constants/routes"
import {isAutheticated} from "../apiFunctions/auth"
import {getPurchaseHistory} from "../apiFunctions/user"
import moment from "moment"

export function UserContainer() {

    const {user, token} = isAutheticated()
    const [history, setHistory] = useState([])


    const init = (token, userId) => {
        getPurchaseHistory(token, userId)
            .then(data => {
                if(data.err) {
                    console.log(data.err)
                } else {
                    setHistory(data)
                }
            })
    }

    useEffect(()=> {
        init(token, user._id)
    },[])

    const purchaseHistory = history => {
        return (

                <ul className="list-group">
                    <li className="list-group-item">
                        {history.map((h, i) => {
                            return (
                                <div key={i}>
                                    <hr />
                                    {h.products.map((p, i) => {
                                        return (
                                            <div key={i}>
                                                <h6 > <span style={{fontWeight: "300"}}>Numele piesei:</span > {p.nume}</h6>
                                                <h6 ><span style={{fontWeight: "300"}}>Pretul piesei:</span> {p.pret} RON</h6>
                                                <h6 >
                                                    <span style={{fontWeight: "300"}}>Data achizitie:</span>{" "}
                                                    {moment(p.createdAt).fromNow()}
                                                </h6>
                                                <br />
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </li>
                </ul>
        );
    };



    return(
        <User>
            <User.Title>
                Buna ziua, {user.nume}!
            </User.Title>
            <User.Content>
            <User.Left>
                <User.Card>
                    <User.Subtitle>
                        Actiunile mele
                    </User.Subtitle>
                    <User.Link to={ROUTES.cart}>
                        Cosul meu
                    </User.Link>
                    <User.Link to={ROUTES.updateUser}>
                        Update profilul meu
                    </User.Link>
                </User.Card>
            </User.Left>
            <User.Right>
                <User.Card>
                    <User.Subtitle>
                        Informatiile mele
                    </User.Subtitle>
                    <User.Paragraph>
                        {user.nume} {user.prenume}
                    </User.Paragraph>
                    <User.Paragraph>
                        {user.email}
                    </User.Paragraph>
                    <User.Paragraph>
                        {user.telefon}
                    </User.Paragraph>
                    <User.Paragraph>
                        Judet: {user.judet}, Localitate: {user.localitate}, Adresa: {user.adresa}, Cod Postal: {user.codPostal}
                    </User.Paragraph>
                    <User.Paragraph>
                        { user.role === 1 ? "Admin" : "Inregistrat"}
                    </User.Paragraph>
                </User.Card>
                <User.Card>
                    <User.Subtitle>
                        Istoria achizitiilor
                    </User.Subtitle>
                    {history && purchaseHistory(history)}
                </User.Card>
            </User.Right>
            </User.Content>
        </User>
    )
}