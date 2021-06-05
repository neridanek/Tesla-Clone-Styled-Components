import React from 'react'
import styled from "styled-components"


const Infos = ({range,power,time,speed}) => {
    return (
        <Wrap>
            <WrapItem>
                <h1>{`${range}km`}</h1>
                <p>Zasieg</p>
            </WrapItem>
            <WrapItem>
                <h1>{`${time}s`}</h1>
                <p>0-100km/h</p>
            </WrapItem>
            <WrapItem>
                <h1>{`${speed}km/h`}</h1>
                <p>Maksymalna predkosc</p>
            </WrapItem>
            <WrapItem>
                <h1>{`${power}hp`}</h1>
                <p>Moc szczytowa</p>
            </WrapItem>
            <Button>
                Zamów teraz
            </Button>


        </Wrap>
    )
}

const Wrap = styled.div`
    color:white;
    position:absolute;
    bottom:80px;
    left:0px;
    right:0px;
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:center;
    h1{
        color:white;
    }
    p{
        color:white;
    }
    @media only screen and (max-width: 768px) {
        font-size:9px;
        padding:0px 20px;
        bottom:80px;
      }
`

const WrapItem = styled.div`
    display:flex;
    flex-direction:column;
    padding:0px 50px;
    @media only screen and (max-width: 768px) {
        padding:0px 13px;
      }

`
const Button = styled.div`
    text-transform: uppercase;
    color:white;
    font-size:13px;
    font-weight:600;
    height:40px;
    white-space:nowrap;
    width:160px;
    border:2px solid white;
    border-radius:20px;
    padding:10px 20px;
    @media only screen and (max-width: 768px) {
        height:35px;
        width:120px;
        font-size:11px;
        padding:10px 8px;
      }
`
export default Infos
