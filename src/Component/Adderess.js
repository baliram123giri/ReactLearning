import React from 'react'

export const Adderess = (props) => {
    return (
        <div>
            <span style={{ color: "red" }}>Address: <span>{props?.address?.city}</span>, <span>{props?.address?.state}</span>, <span>{props?.address?.pincode}</span></span>
        </div>
    )
}
