import React,{useState,useEffect} from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import Infos from "./Infos"

const Section1 = ({title,description,backgroundImg}) => {

    const [data,setData] = useState([])
    const getSelectedData = () => data.find(element=>element.id === 3);
    const selectedData = getSelectedData()

    useEffect(()=>{
        async function fetchData(){
            const request = await fetch("/images/carInfo.json").then(response =>response.json());
            setData(request);
        }
        return fetchData();
    },[])
    console.log(data)
    console.log(selectedData);
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom/>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            <Fade/>
            <CarInfo>
                { selectedData && <Infos key={selectedData.id} range={selectedData.range} power={selectedData.peakPower} time={selectedData.time} speed={selectedData.topSpeed} />}
                
            </CarInfo>

        </Wrap>

    )
}

const Wrap = styled.div`
    background-image:${props=>`url("/images/${props.bgImage}")`};
    z-index:10;
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

  
`
const ItemText = styled.div`
    margin-top:-15vh;
    padding-top:0vh;
    text-align:center;

`
const CarInfo = styled.div`
    color:white;
    padding-bottom:15vh;
    

`
export default Section1
