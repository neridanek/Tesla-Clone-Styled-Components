import React,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from "../features/counter/carSlice"
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const [burgerStatus,setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
            <a>
                <img onClick={()=>history.push("/")} src="/images/logo.svg" alt=""/>

            </a>
            <Router>
                <Menu>
                    {cars && cars.map((car,index)=>(
                    
                            <a onClick={()=>history.push(`/models/${car}`)} key={index} href="#">{car}</a>
    
                    ))}
                </Menu>
            </Router>
            <RightMenu>
                <Router>
                    {/* <a onClick={()=>history.push("/Shop")} href="#">Shop</a> */}
                    <a onClick={()=>history.push("/Account")} href="#">Tesla Account</a>
                </Router>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car,index)=>(
                    <li><Link to={`/models/${car}`} onClick={()=>setBurgerStatus(false)} >{car}</Link></li>
                ))}
                <li><a href="#">Existing Invetory</a></li>
                <li><a href="#">Used Invetory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    z-index:1;
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    font-size:13px;
    a{
        cursor:pointer;
    }
    @media(max-width:768px){
        a{  
            padding-right:20px;
            
        }   
    }
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    margin-left:100px;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0px 10px;
        flex-wrap:no-wrap;
    }
    @media(max-width:768px){
        display:none;
    }
    
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:15px;
        flex-wrap:no-wrap;
    }
    @media(max-width:768px){
        margin-left:10px;
        padding-left:20px;
        a{
            margin-right:0px;
            font-size:12px;
            white-space:no-wrap;
            flex-wrap:no-wrap;
    }

`

const CustomMenu = styled(MenuIcon)`
     cursor:pointer;
     margin-left:5px;

`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:100;
    list-style-type:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props=>props.show ? "translateX(0)": "translateX(100%)"};
    transition:transform 0.2s ease-in;
    li{
        padding:15px 0 ;
        border-bottom:1px solid rgba(0,0,0,.2);
        a{
            font-weight:600;

        }
    }
    @media(max-width:768px){
        width:150px;
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
    
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`