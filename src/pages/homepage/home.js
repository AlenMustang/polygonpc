import React from 'react'
import { homeObjOne,homeObjTwo } from './data'
import Section from "../section"

function home() {
    return (
        <>
            <Section {...homeObjOne}/>
            <Section {...homeObjTwo}/>
            

        </>
    )
}

export default home
