import React from 'react'
import { homeObjOne,homeObjTwo } from './data'
import Section from "../section"
import Footer from "../footer"
function home() {
    return (
        <>
            <Section {...homeObjOne}/>
            <Section {...homeObjTwo}/>
            

        </>
    )
}

export default home
