import { Button, TextField } from '@mui/material'
import { ChangeEvent } from 'react'

type AddTask = (title: string) => void


export default function AddTaskForm({addTask}: {addTask: AddTask}) {
  let taskTitle = 'Default task';
  const updateTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
    taskTitle = e.target.value
  }

  const onAddTask = () => {
    addTask(taskTitle)
  }
  return (
    <>
      <TextField
        type="text"
        label="Task name"
        placeholder="Enter task"
        onChange={updateTaskTitle}
      />
      <Button
        variant="outlined"
        onClick={onAddTask}
      >
        Save Task
      </Button>
    </>
  )
}