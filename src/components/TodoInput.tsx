import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

type Props = {
  refetchTodos: Function;
};

const ADD_TODO_MUTATION = gql`
  mutation AddTodo($title: String!) {
    insert_todos_one(object: { title: $title }) {
      id
    }
  }
`

const TodoInput = ({ refetchTodos }: Props) => {
  const [input, setInput] = useState('')
  const [addTodo, { loading }] = useMutation(ADD_TODO_MUTATION)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setInput('')
    await addTodo({ variables: { title: input } })
    refetchTodos()
  }

  return (
    <form onSubmit={onSubmit} className="flex items-center w-full">
      <div className="relative w-full">
        <input
          className="z-10 w-full p-4 text-2xl text-gray-700 placeholder-gray-400 rounded-sm"
          type="text"
          placeholder={loading ? 'Submitting' : 'Enter a todo...'}
          value={input}
          disabled={loading}
          onChange={(e) => setInput(e.target.value)}
        />
        <label className="hidden">Enter a todo...</label>
      </div>
      <button type="submit" className="w-32 h-full py-6 ml-4 button">Add</button>
    </form>
  )
}

export default TodoInput
