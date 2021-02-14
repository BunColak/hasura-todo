import { gql, useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Todo } from '../types'

type Props = {
  todo: Todo;
  refetch: Function;
};

const TOGGLE_COMPLETED_MUTATION = gql`
  mutation ToggleTodo($id: Int!, $isCompleted: Boolean!) {
    update_todos(
      where: { id: { _eq: $id } }
      _set: { is_completed: $isCompleted }
    ) {
      affected_rows
    }
  }
`

const TodoItem = ({ todo, refetch }: Props) => {
  const [isCompleted, setIsCompleted] = useState(todo.is_completed)
  const [toggleCompleted] = useMutation(TOGGLE_COMPLETED_MUTATION, {
    variables: { id: todo.id, isCompleted: !todo.is_completed }
  })

  useEffect(() => {
    setIsCompleted(todo.is_completed)
  }, [todo])

  const hoverStates = isCompleted
    ? 'line-through bg-gray-300 hover:no-underline hover:bg-gray-100'
    : 'no-underline bg-gray-100 hover:line-through'

  const handleClick = async () => {
    setIsCompleted(!todo.is_completed)
    await toggleCompleted()
    await refetch()
  }

  return (
    <div
      className={`flex-wrap cursor-pointer w-2/3 p-2 mt-2 text-lg text-center text-gray-700 cursor-pointerhover:bg-gray-300 ${hoverStates}`}
      onClick={handleClick}
    >
      {todo.title}
    </div>
  )
}

export default TodoItem
