import React from 'react'
import { Adderess } from './Adderess'

export const Heading = (props) => {
    return (
        <div>
            <span>Name: {props.name}</span>
            <br />
            <span>Age: {props.age}</span>
            <br />
            <span>Mobile: {props.mobile}</span>
            <br />
            <Adderess address={props.address} />
        </div>
    )
}
