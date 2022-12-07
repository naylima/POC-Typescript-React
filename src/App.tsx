import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { Container, Item } from './styles';
import ItemType from './protocols/Item';
import Tasks from './components/Tasks';

function App() {
  const [task, setTask] = useState<string>('');
  const [list, setList] = useState<ItemType[]>([]);

  const addTask = () => {
    if(!task) return alert('Please enter a task!');  

    const newTask: ItemType = {
      id: Math.random(),
      description: task,
      checked: false
    };

    setList([...list, newTask]);
    setTask('');
  }

  const removeTask = (id: number) => {
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  };

  const toggleChecked = (id: number, checked: boolean) => {
    const index = list.findIndex((task) => task.id === id);
    const newList = list;
    newList[index].checked = !checked;
    setList([...newList]);
  };

  return (
    <Container>
      <h1>TODO LIST</h1>

      <div>
        <input 
          placeholder='Add new task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>add</button>
      </div>

      <Tasks 
        list = {list}
        render = {(task: ItemType) => {
          return (
            <Item checked = {task.checked} key={task.id}>
              <p>{task.description}</p>
              <div>
                <AiOutlineCheck 
                  className='icon' 
                  onClick={() => toggleChecked(task.id, task.checked)}
                />
                <BsTrash 
                  className='icon'
                  onClick={() => removeTask(task.id)}
                />
              </div>
            </Item>
          )
        }}
      />

    </Container>
  )
}

export default App;


