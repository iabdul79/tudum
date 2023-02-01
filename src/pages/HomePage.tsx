import AddTaskForm from "../components/AddTask"

const Home = () => {
  let taskList: string[] = ['sing', 'dance'];
  const addTask = (task: string) => {
    taskList = [...taskList, task]
    console.log(taskList)
  }

  return (
    <>    
      <h1>This is home</h1>
      <ul>
        {taskList.map((task, indx) => (
          <li key={indx}>{task}</li>
        ))}
      </ul>
      <AddTaskForm addTask={addTask}/>
    </>
  )
}

export {Home as default}