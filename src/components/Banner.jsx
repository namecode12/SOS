import React from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import wheel from '../wheelchair.svg'
import refresh from '../refresh.svg'
const Wrapper=styled.div`
width:100%;
height:68px;
display:flex;
padding:20px 58px;
box-sizing:border-box;
position:fixed;
    top:0;
    left:0;
    right:0;
z-index:9000;
align-items:center;
background-color:black;


`

const Logo=styled.img`
height:60px;
width:60px;
margin-right:30px;
`

const NavText=styled.ul`
align-items:center;
display:flex;
flex:1;
color:gray;
font-weight:bolder;
padding-left:20px;
padding-right:20px;
`
const NavTextItem=styled.li`
        list-style:none;
        margin-left:20px;
        margin-right:20px;
&>a{
color:gray;
&:hover{
        font-weight:bold;
        color: white;
}; 
}
&:hover{font-weight:bold;
        color: white;};
`
const NavIcon=styled.ul`
        display: flex;
        
`
const NavIconItem=styled.li`
        height: 100%;
        width: fit-content;
        list-style:none;
        margin-right:3px;
`
const Img=styled.img`
        margin-left: 10px;
        list-style:none;
        height: 25px;
        width:25px;
`
// const setFont=(event)=>{
//         let asd =document.getElementsByClassName('asd')
//         for(let a=0;a<asd.length;a++){
//                 asd[a].style.fontWeight='normal'
//                 asd[a].style.color='#e5e5e5'
//         }
//         event.target.style.fontWeight='bold'
//         event.target.style.color='#fff'
                
// }
const setFont=()=>{
      
}
const Banner = props => {

        return (
        <>
                <Wrapper>
                        
                       <Logo src={wheel}></Logo>
                        <NavText>
                        <NavTextItem className='asd'><a href="/bus"> 버스</a></NavTextItem>
                        <NavTextItem className='asd' ><a href="/subway">지하철</a></NavTextItem>
                        {props.bus? <NavTextItem className='asd' onClick={props.haha}>버스 번호 바꾸기</NavTextItem>:<></>}
                        <Img src={refresh} onClick={props.click}></Img>
                        
                        </NavText>
                </Wrapper>
        </>
        )
}
export default Banner