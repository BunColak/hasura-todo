import React, { useState } from 'react'

const TodoInput = () => {
  const [input, setInput] = useState('')

  return (
    <form className="w-full">
        <div className="relative w-full">
          <input
            className="z-10 w-full p-4 text-2xl text-gray-700 placeholder-gray-400 rounded-sm"
            type="text"
            placeholder="Enter a todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <label className="hidden">Enter a todo...</label>
        </div>
      </form>
  )
}

export default TodoInput
