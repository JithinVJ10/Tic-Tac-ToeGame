import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const boxStyle = 'border rounded-lg flex justify-center items-center text-7xl bg-amber-200 m-1'
  const responsiveBoxStyle = 'w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-11/12 xl:h-52'

  const [colSymbol, setColSymbol] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: '',
    nine: '',
  })

  const [playerOne, setPlayerOne] = useState(true)
  const [winner, setWinner] = useState('')

  const winningCombinations = [
    ['one', 'two', 'three'],
    ['one', 'four', 'seven'],
    ['one', 'five', 'nine'],
    ['two', 'five', 'eight'],
    ['three', 'six', 'nine'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
    ['three', 'five', 'seven']
  ]

  const checkWinner = () => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo
      if (colSymbol[a] && colSymbol[a] === colSymbol[b] && colSymbol[a] === colSymbol[c]) {
        setWinner(colSymbol[a] === 'X' ? 'Player 1' : 'Player 2')
        return
      }
    }
  }

  const handleClick = (cell) => {
    if (colSymbol[cell] === '' && winner === '') { // Only update if the cell is empty and no winner
      setColSymbol({
        ...colSymbol,
        [cell]: playerOne ? 'X' : 'O'
      });
      setPlayerOne(!playerOne);
    }
  }

  // Check for winner whenever colSymbol changes
  useEffect(() => {
    checkWinner()
  }, [colSymbol])

  const resetGame = () => {
    setColSymbol({
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      six: '',
      seven: '',
      eight: '',
      nine: '',
    })
    setPlayerOne(true)
    setWinner('')
  }

  return (
    <div className='m-2 sm:m-4 md:m-6 lg:m-8'>
      <h1 className='text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-3xl'>Tic-Tac-Toe Game</h1>
      {winner && (
        <div className='text-center'>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{winner} wins!</h2>
          <button onClick={resetGame} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg'>Reset Game</button>
        </div>
      )}
      <div className='grid grid-cols-3 gap-1 sm:gap-1 md:gap-1 lg:gap-1'>
        <div className={`${boxStyle} ${responsiveBoxStyle}`} onClick={() => handleClick('one')}>{colSymbol.one}</div>
        <div className={`${boxStyle} ${responsiveBoxStyle}`} onClick={() => handleClick('two')}>{colSymbol.two}</div>
        <div className={`${boxStyle} ${responsiveBoxStyle}`} onClick={() => handleClick('three')}>{colSymbol.three}</div>
        <div className={`${boxStyle} ${responsiveBoxStyle}`} onClick={() => handleClick('four')}>{colSymbol.four}</div>
        <div className={`${boxStyle} ${responsiveBoxStyle}`} onClick={() => handleClick('five')}>{colSymbol.five}</div>
        <div className={`${boxStyle} ${responsiveBoxStyle}`} onClick={() => handleClick('six')}>{colSymbol.six}</div>
        <div className={`${boxStyle} ${responsiveBoxStyle}`} onClick={() => handleClick('seven')}>{colSymbol.seven}</div>
        <div className={`${boxStyle} ${responsiveBoxStyle}`} onClick={() => handleClick('eight')}>{colSymbol.eight}</div>
        <div className={`${boxStyle} ${responsiveBoxStyle}`} onClick={() => handleClick('nine')}>{colSymbol.nine}</div>
      </div>
    </div>
  )
}

export default App
