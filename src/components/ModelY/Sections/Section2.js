import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

const Section2 = ({title,backgroundImg}) => {
    return (
            <Wrap bgImage={backgroundImg}>
                <Fade bottom>
                <h1>{title}</h1>
                </Fade>
            </Wrap>
        
    )
}

const Wrap = styled.div`
    background-image:${props=>`url("/images/${props.bgImage}")`};
    width:100vw;
    height:100vh;
    background-size:cover;
    background-image:${props=>`url("/images/${props.bgImage}")`};
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    h1{
        padding-top:3vh;
        color:white;
    }
  
`

export default Section2
