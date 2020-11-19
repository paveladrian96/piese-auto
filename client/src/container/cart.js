import React, {useEffect, useState} from  "react"
import {getCart, updateItem, removeItem} from "../apiFunctions/cartHelpers"
import { Cart } from "../components"
import ShowImage from "../utils/ShowImage"
import CheckoutContainer from "./checkout"



export function CartContainer ({run, setRun}){
    const [items, setItems] = useState([])
    const [pretTotal, setPretTotal] = useState([])
    
    useEffect(()=>{
        setItems(getCart())
    },[run])

    const handleClick = pieseId => {
        removeItem(pieseId)
        setRun(!run)
    }

    const handleChange = productId => event => {
        setRun(!run) //run useEffect in parent Cart
        if(event.target.value >= 1) {
            updateItem(productId, event.target.value)
        }
    }

    return(
        <Cart>
            <Cart.Header>
                <Cart.Articol>
                    Articol
                </Cart.Articol>
                <Cart.Info>
                    Pret
                </Cart.Info>
                <Cart.Info>
                    Cantitate
                </Cart.Info>
                <Cart.Info>
                    Cost
                </Cart.Info>
            </Cart.Header>
            
            {items && items.map((piesa, i) => (
            <Cart.Content key={i}>
                <Cart.Articol>
                    <Cart.Button src={require("../images/logos/close.png")} onClick={() =>handleClick(piesa._id)}/>

                    <Cart.Img>
                        <ShowImage dimension = {'50px'} item={piesa} url="subtipPieseAuto"/>
                    </Cart.Img>
                    <Cart.Name>
                        {piesa.distribuitor} {piesa.nume}
                    </Cart.Name>
                    
                </Cart.Articol>
                <Cart.Info>
                    <Cart.InfoHelper>Pret</Cart.InfoHelper>
                    {piesa.pret} RON
                </Cart.Info>
                <Cart.Info>
                    <Cart.InfoHelper>Cantitate</Cart.InfoHelper>
                    <Cart.Count type="number"  onChange={handleChange(piesa._id)}
                        value={piesa.count}/>
                </Cart.Info>
                <Cart.Info>
                    <Cart.InfoHelper>Cost</Cart.InfoHelper>
                    {piesa.pret * piesa.count} RON
                </Cart.Info>
            </Cart.Content>
            ))}
            <Cart.ContentPayment>
                <Cart.PaymentInfo>
                    <Cart.ParagraphBig>
                        Veți primi {(pretTotal*0.12).toFixed(2)} RON în puncte bonus în 7 zile la achiziționarea acestor produse 
                    </Cart.ParagraphBig>
                    <Cart.ParagraphSmall>
                        Achitați până la 12% din valoarea comenzii dumneavoastră cu bonusurile acumulate.
                    </Cart.ParagraphSmall>
                </Cart.PaymentInfo>
                <Cart.Payment>
                    <CheckoutContainer products={items} run={run} setRun={setRun} pretTotal={pretTotal} setPretTotal={setPretTotal} />
                </Cart.Payment>
            </Cart.ContentPayment>
        </Cart>
       
    )
}