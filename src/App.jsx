import { useState } from 'react'
import './App.css'

let inputText = ''
let count = 0

function App() {
  const [list, setList] = useState([])

  function handleChange(event) {
    inputText = event.target.value
  }

  function handleAdd() {
    const item = { title: inputText, done: false, id: count++ }

    const newList = [...list]

    newList.push(item)

    setList(newList)
  }

  function changeDone(id, done) {
    const newList = [...list]
    newList.forEach(item => {
      if (item.id == id) {
        item.done = !done
      }
    })

    setList(newList)
  }

  function deleteItem(id) {
    const newList = [...list]
    const index = newList.indexOf(newList.filter(item => item.id == id)[0])
    newList.splice(index, 1)

    setList(newList)
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>
              <span className={item.done ? "done" : ''}>{item.title}</span>
              <ToDoItem item={item} changeDone={changeDone} deleteItem={deleteItem} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function ToDoItem({ item, changeDone, deleteItem}) {
  return (
    <>
      <button onClick={() => changeDone(item.id, item.done)}>{item.done ? 'Undo' : 'Done'}</button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </>
  )
}

export default App
