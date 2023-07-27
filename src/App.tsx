import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './const'
import { type TodoId, type Todo as TodoType, FilterValue, TodoTitle } from './types'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
const mockToDos = [
  {
    id: '1',
    title: 'Say Hello!',
    completed: false
  },
  {
    id: '2',
    title: 'Keep learning TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Make new project',
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
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })
  const handleRemoveallCompleted = () : void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }
  const handleAdd = ({title}: TodoTitle) : void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAdd}/>
      <Todos 
        onToggleCompleted={handleCompleted}
        onRemoveToDo={handleRemove}
        todos={filteredTodos}/>
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleRemoveallCompleted}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App
