import { Container, Paper } from "@mui/material";
import CreateTaskForm from "../components/TaskForm";

export default function CreateTask() {
  return (
    <Container>
      <Paper elevation={3}>
        <CreateTaskForm />
      </Paper> 
    </Container>
  )
}