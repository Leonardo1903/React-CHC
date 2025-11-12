import { Container, Typography } from "@mui/material";
import "./App.css";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import HabitStats from "./components/HabitStats";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" align="center">
          Habit Tracker
        </Typography>
        <HabitForm />
        <HabitList />
        <HabitStats />
      </Container>
    </>
  );
}

export default App;
