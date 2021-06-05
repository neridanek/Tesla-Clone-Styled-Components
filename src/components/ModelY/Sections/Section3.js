import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import Informations from "./Informations";
import Fade from 'react-reveal/Fade';

const Section3 = ({backgroundImg}) => {

    const [index,setIndex] = useState(0)
    const [data,setData] = useState([])
    const getSelectedData = () => data.find(element=>element.id === index);
    const selectedData = getSelectedData()


    useEffect(()=>{
        async function fetchData(){
            const request = await fetch("/images/Section3.json").then(response=>response.json());
            setData(request);
        }
        return fetchData();
    },[])
    console.log(data);
    console.log(selectedData);

    const prevSlide = () =>{   
        if(index>0){
            setIndex(index - 1)
        } 
    }    
    const nextSlide = () =>{
        if(index>2){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }
    console.log(selectedData)
    return (
        <Wrap>
            <Block>
            </Block>
            <Fade left>
            <Options>
            
                <ArrowLeft onClick={prevSlide}/>
                <ArrowRight onClick={nextSlide}/>
                
                {selectedData && <Images bgImage={selectedData.image}/> }
                <Description>
                    {selectedData && <Informations key={selectedData.key} title={selectedData.title} description={selectedData.description}/> }
                </Description>
            </Options>
            </Fade>

            <Block>
            </Block>
        </Wrap>
    )
}

const Wrap = styled.div`
    height:100vh;
    
`
const Block = styled.div`
    background-color:black;
    height:10vh;

`

const Options = styled.div`
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:black;
`
const Images = styled.div`
    height:55vh;
    width:115vh;
    background-image:${props=>`url("/images/${props.bgImage}")`};
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    @media only screen and (max-width: 768px) {
        width:70vh;
        height:50vh;
      }
`
const Description = styled.div`
    height:10vh;
    text-align:left;
    padding:40px 50px;

    h1{
        font-weight:bold;
        padding-bottom:10px;
        color:white;
        white-space:nowrap;
    }
    p{
        color:white;
    }
    @media only screen and (max-width: 768px) {
        width:100vh;
        h1{
            font-size:15px;
        }
        p{
            font-size:10px;
        }
      }
`
const ArrowLeft = styled(ArrowBackIosOutlinedIcon)`
    position:absolute;
    left:45vh;
    border:2px solid white;
    padding:5px;
    background-color: rgba(0,0,0,.4);
    font-size: 2.0rem !important;
    path{
        color: white;
      }
`
const ArrowRight = styled(ArrowForwardIosOutlinedIcon)`
    position:absolute;
    right:45vh;
    border:2px solid white;
    padding:5px;
    background-color: rgba(0,0,0,.4);
    font-size: 2.0rem !important;
    path{
       color:white;
      }

`


export default Section3
