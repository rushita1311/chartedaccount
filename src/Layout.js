import React from 'react'
import Heder from './heder'
import Footer from './footer'

export default function Layout(props) {
  return (
    <>
       <Heder name={props.name}  /> 
       {props.children}
       <Footer />
    </>
  )
}
