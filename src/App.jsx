import { useState } from 'react'

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

function Square() {
  const [value, setValue] = useState(null)

  const handleClick = () => setValue('X')

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  )
}
