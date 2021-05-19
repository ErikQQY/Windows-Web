import React from 'react'
import { Button, TextInput} from 'react-desktop/windows'

function LoginButton() {
    return (
    <TextInput ref="input" label="PWD" />
    )
}

export default function Welcome(){
    return (
        <LoginButton />
    );
}