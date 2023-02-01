import { Task } from "../types/types";

export const defaultTaskState = {
  name: '',
  description: '',
  points: '',
  priority: '',
  status: '',
  deadline: new Date().toISOString().split('T')[0],
  estimateTime: ''
}

interface TaskAction {
  type: string,
  payload: Partial<Task>
}
export default function taskReducer(state: Task, action: TaskAction ): Task {
  switch(action.type) {
    case 'UPDATE_TASK':
      return {...state, ...action.payload}
    default:
      return state
  }
}