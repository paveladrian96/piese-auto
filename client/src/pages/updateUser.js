import React from 'react'
import { FooterContainer } from '../container/footer'
import { HeaderContainer } from "../container/header"
import { UpdateUserContainer } from "../container/updateUser"

export default function UpdateUser() {
    return (
        <>
            <HeaderContainer />
            <UpdateUserContainer />
            <FooterContainer />
        </>
    )
}