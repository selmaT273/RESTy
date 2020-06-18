import React from 'react';
import ReactJson from 'react-json-view'

export default function Results(props){
    return (
        <>
        <h2>Your Request Results:</h2>
            <span>
                <ReactJson src={props.data} theme="eighties" />
            </span>
        </>    
    )
}