import React from 'react'
import styled from "styled-components"

const Informations = ({title,description}) => {
    return (
        <Wrap>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </Wrap>
    )
}

const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:0px 20px;
    h2{
        max-width:800px;
        font-size:15px;
        color:white;
    }
`

export default Informations
