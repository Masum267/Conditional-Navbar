import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import Contact from '../pages/Contact'

function Rout({component}) {
    console.log(component);
   const Condition =()=>{
    if(component==='Home'){
        return <Home/>
    } else if(component ==="About"){
        return <About/>
    } else if(component === "Services"){
        return <Service/>
    }else if(component === "Contact"){
        return <Contact/>
    }
   }
    return (
        <>
         <Condition/>
        </>
    )
}

export default Rout