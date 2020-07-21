import React from 'react'
import {Nav} from '../Layout/Nav'

export const Background = (props) => {
    return (
		<div className="background">
     
            <Nav/>
            {props.children}
        </div>
    )
}
