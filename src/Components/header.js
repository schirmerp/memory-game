import React from "react";


export default function Header(props){

    return(
        <div className ="header">
            <h1 className="big-font">Rick and Morty Memory Game</h1>
            <h2 className="gameover" >{props.gameOver}</h2>
            <h2 className="score"> Score = {props.score}</h2>
            <h2 className = "high-score">High Score = {props.highScore} </h2>
        </div>
    )
}