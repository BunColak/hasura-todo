import { gql, useQuery } from '@apollo/client'
import React from 'react'
import TodoInput from '../../components/TodoInput'
import TodoList from '../../components/TodoList'
import { Todo } from '../../types'

export const GET_TODOS_QUERY = gql`
  query GetTodos {
    todos(order_by: { id: desc }) {
      id
      is_completed
      title
    }
  }
`

const Home = () => {
  const { data, refetch } = useQuery<{ todos: Todo[] }>(GET_TODOS_QUERY)

  return (
    <div className="w-full lg:w-1/4">
      <TodoInput refetchTodos={refetch}/>
      <TodoList todos={data?.todos ?? []} refetch={refetch}/>
    </div>
  )
}

export default Home
