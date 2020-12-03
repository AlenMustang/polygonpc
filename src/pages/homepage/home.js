import React from 'react'
import { homeObjOne,homeObjTwo,homeObjThree, homeObjFour } from './data'
import Section from "../section"
import Footer from "../footer"

function home() {
    return (
        <>
            <Section {...homeObjOne}/>
            <Section {...homeObjTwo}/>
            <Section {...homeObjThree}/>
            <Section {...homeObjFour}/>

        </>
    )
}

export default home
