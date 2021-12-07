import React, {useState} from "react";
import Header from "./header";
import CardFrame from "./cardFrame";
import { rmData } from "./data";

function GameBoard(props) {
    const [squares, setSquares] = useState([...rmData])
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [board, setBoard] = useState([])
    const [gameOver, setGameOver] = useState(null)
    

    function shuffle(array) {
        return array.sort( ()=>Math.random()-0.5 );
    }
    const restart = () =>{
        setGameOver(null)
        setSquares(squares => [...rmData])
        setBoard(prevState => [])
        setScore(prevState => 0)
    }

    const onClick = (e)=>{
        if(!board.includes(e.target.id)){
        setBoard(board => [...board, e.target.id])
        setSquares(squares => shuffle(squares))
        setScore(score => score + 1)
        }else{
            console.log('stop')
            endGame()
            setTimeout(restart, 5000)
        }
    }
    const endGame = () =>{
        if(score > highScore){
            setHighScore(prevState => score)
            setGameOver(prevState => "Congratulations!! You have a New High Score "  + score + "!")
        }else{
            setGameOver(prevState => "Game Over! Try Again!")
        }
    }


    console.log(board)
    


    return(
        <>
            <Header score={score} highScore={highScore} gameOver={gameOver}/>
            <div id="game-board">
               {squares.map((data, key)=>{
                   return(
                    <CardFrame key={key}
                    title={data.name}
                    id={data.name}
                    src={data.src}
                    alt={data.alt}
                    onClick={onClick}
                    />
                    )})
                }                
            </div>
        
        </>
    )
}
export default GameBoard
