import React from "react";

export default function Buttons({value,onSquareClick}){

    return(
        <button style={{color:"black"}} className="squares" onClick={onSquareClick}>{value}</button>
    )
}