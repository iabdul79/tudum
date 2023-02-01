import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { MouseEvent, useReducer } from 'react'
import taskReducer, { defaultTaskState } from '../reducers/task-reducer'

export default function CreateTaskForm() {
  const [newTask, dispatch] = useReducer(taskReducer, defaultTaskState)

  const onTaskFormSubmit = (e: MouseEvent<HTMLElement>) => {
    
  }

  const updateTask = () => {
    dispatch({type: 'UPDATE_TASK', payload: {}})
  }

  return (
    <>
      <form>
        <TextField
          variant="outlined"
          label="Task name"
          placeholder="Enter task"
          value={newTask.name}
        />
        <TextField
          label="Description"
          value={newTask.description}
          multiline
          rows={4}
        />
        <FormControl>
          <InputLabel id="task-story-points">Story points</InputLabel>
          <Select
            labelId="task-story-points"
            label="Story points"
            value={newTask.points}
          >
            <MenuItem value={'3'}>Ten</MenuItem>
            <MenuItem value={'5'}>Twenty</MenuItem>
            <MenuItem value={'8'}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="date"
          label="Deadline"
          type="date"
          value={newTask.deadline}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="time"
          label="Estimated time"
          type="time"
          value={newTask.estimateTime}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          sx={{ width: 150 }}
        />
        <Button variant="contained" onClick={onTaskFormSubmit}>Save</Button>
      </form>
    </>
  )
}