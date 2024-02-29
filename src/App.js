import React from 'react'
import { Heading } from './Component/Heading'
import A from './A'
export const App = () => {
    return (
        <>
            <Heading name="Baliram Giri" age={25} mobile={8208892771} address={{ city: "Bengaluru", state: "Karnatka", pincode: 560066 }} />
            <br />
            <Heading name="Aniket" age={21} mobile={8208892771} address={{ city: "Jalna", state: "Maharastra", pincode: 431501 }} />
            <br />
            <Heading name="Anil" age={20} mobile={8208892771} address={{ city: "Pune", state: "Maharastra", pincode: 432455 }} />

            {/* //nestead Component  */}
            <br />
            <A />
        </>
    )
}
