import React from 'react'
import { C } from './C'

const B = () => {
    return (
        <>
            <div>
                I am <span style={{ color: "blue", fontWeight: "bold" }}>B</span> and my parrent is A.js
            </div>
            <C />
        </>
    )
}

export default B