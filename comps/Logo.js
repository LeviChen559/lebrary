import Lottie from "lottie-react";
import openBook from "../utils/book.json";
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import {header_theme, text_theme} from'../utils/variables'
import {useTheme} from '../utils/provider'
import React, { useState, useEffect } from 'react';

const LogoCon=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:25rem;
height:45rem;

`
const TextCon=styled.p`
font-family: 'Archivo Black', sans-serif;
font-size:3rem;
position: absolute;
z-index:2;
margin-top:30rem;
color:${(props)=>props.color}
`

const Logo = () => {
  const {theme} = useTheme();
  const [load, setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 8000);

  })
  if(load==true){
  return <LogoCon>
      <Lottie style={{width:'600px'}}  loop={true}   animationData={openBook} />
      <TextCon color={text_theme[theme].title}> LEBRARY </TextCon> 
  </LogoCon>
};


return <LogoCon>
      <Lottie style={{width:'600px'}} loop={false}     animationData={openBook} />
      <TextCon color={text_theme[theme].title}> LEBRARY </TextCon> 
  </LogoCon>
}

export default Logo;