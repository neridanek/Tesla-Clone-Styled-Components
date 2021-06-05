import React from 'react'
import styled from "styled-components"

const Section = () => {
    return (
        <Container>
            <h1>Zaloguj się</h1>
            <h2>Adres e-mail</h2>
            <input type="text"/>
            <h2>Hasło</h2>
            <input type="password"/>
            <button>Zaloguj się</button>
        </Container>
    )
}

export default Section

const Container = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    height:100vh;
    h1{
        font-size:30px;
        margin-bottom:30px;
    }
    h2{
        font-size:13px;
        color:gray;
        font-weight:600;
    }
    input{
        border-radius:15px;
        margin:10px 0px;
        width:270px;
        height:30px;
        background-color:#E0E0E0;
        border:1px solid lightgrey;
    }
    button{
        border-radius:15px;
        background-color:#3e6ae1;
        width:270px;
        height:30px;
        color:white;
        text-transform:uppercase;
        font-weight:bold;
        font-size:10px;
        cursor:pointer;
        border-style:none;
    }

`

