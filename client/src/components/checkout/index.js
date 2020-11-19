import React from "react"
import { Container, Total, TextArea} from "./styles/checkout"

export default function Checkout({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Checkout.Total = function CheckoutTotal({children, ...restProps}){
    return <Total {...restProps}>{children}</Total>
}

Checkout.TextArea = function CheckoutTextArea({children, ...restProps}){
    return <TextArea {...restProps}>{children}</TextArea>
}

