import React from 'react'
import B from './B'

const A = () => {
    return (
        <>
            <div>
                I am <span style={{ color: "green", fontWeight: "bold" }}>A</span> and my parrent is App.js
            </div>
            <B />
        </>
    )
}

export default A