import React from 'react'
import { Todo } from '../types'
import TodoItem from './TodoItem'

type Props ={
  todos: Todo[]
  refetch: Function
}

const TodoList = ({ todos, refetch }: Props) => {
  const incompleteTodos = todos.filter((todo) => !todo.is_completed) ?? []
  const completedTodos = todos.filter((todo) => todo.is_completed) ?? []

  return (
    <>
      <div className="flex flex-col items-center mt-6">
        {incompleteTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} refetch={refetch}/>
        ))}
      </div>
      {completedTodos.length > 0 && (
        <div className="flex flex-col items-center mt-6">
          <h2>Completed Todos</h2>
          {completedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} refetch={refetch} />
          ))}
        </div>
      )}
    </>
  )
}

export default TodoList
