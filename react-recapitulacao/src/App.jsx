import { useState } from 'react'
import './App.css'
import { Moon } from 'phosphor-react'
import SearchBar from './components/SearchBar/SearchBar'
import Button from './components/Button/Button'
import TodoItem from './components/TodoItem/TodoItem'
import { useState } from 'react'

function App() {

  const [listaTodo, setListaTodo] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Clean the house', completed: true },
    { id: 3, text: 'Workout', completed: false },
  ])

  const [todo, setTodo] = useState("")

  return (
    <>
      <div className='w-full flex-col justify-center h-screen pt-10 max-w-3xl m-auto'>

        <header className='w-full'>
          <h1 className='text-center mb-5 text-[26px] font-medium '>TODO LIST</h1>
          <div className='flex w-full gap-[16px]'>
            <SearchBar />
            <Button>ALL</Button>
            <Button>
              <Moon size={32} />
            </Button>
        </div>
        </header>
      </div>

      <main>
        <TodoItem />
      </main>
    </>
  )
}

export default App
