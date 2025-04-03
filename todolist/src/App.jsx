import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const addToList = () => {
    event.preventDefault();
    setList(prevState => {
      return [
        ...prevState, 
        item
      ]
    })
    setItem('');
  }
  const handleInput = (event) => {
    setItem(event.target.value);
  }

  return (
    <div class="flex flex-col items-center gap-6">
      <div class="flex flex-col gap-6">
        <h1 class="text-xxl">To do List</h1>
        <form class="flex flex-col gap-6" action="submit" method='get' onSubmit={addToList}>
          <div>
              <label htmlFor="input">Add new item</label>
              <input class="input" id='input' type="text" value={item} onChange={handleInput} />
              <button class="btn btn-primary" type='submit'>Save</button>
          </div>
        </form>
      </div>
      <div class="flex flex-col gap-6">
        <h2 class="text-xl">List:</h2>
        <ul>
        {
          list.length > 0 &&
            list.map((item, index) => 
              <li key={index}>
              {item}
              </li>
            )
        }
        </ul>
      </div>
    </div>
  )
}

export default App
