import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './const'
import { type TodoId, type Todo as TodoType, FilterValue } from './types'
import { Footer } from './components/Footer'
const mockToDos = [
  {
    id: '1',
    title: 'Learn React',
    completed: false
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Learn GraphQL',
    completed: false
  }
]

const App : React.FC = () => {

  const [todos, setTodos] = useState(mockToDos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId) : void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed } : Pick<TodoType, 'id' | 'completed'>) 
    : void => {
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo
      })
      setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue) : void => {
    setFilterSelected(filter)
  }
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  return (
    <div className='todoapp'>
      <Todos 
        onToggleCompleted={handleCompleted}
        onRemoveToDo={handleRemove}
        todos={todos}/>
        <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={() => {}}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App
