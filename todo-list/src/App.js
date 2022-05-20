import { useState } from "react";
import { CourseInput } from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.scss";
import { CourseGoalList } from "./components/CourseGoals/CourseGoalList/CourseGoalList";

function App() {
  const [courseGoal, setCourseGoal] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addNewGoal = function (goal) {
    setCourseGoal((prev) => {
      return [goal, ...prev];
    });
  };
  const deleteGoal = function (id) {
    setCourseGoal((prev) => {
      const updatedGoals = prev.filter((prevGoal) => prevGoal.id !== id);
      return updatedGoals;
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one</p>
  );

  if (courseGoal.length > 0) {
    content = <CourseGoalList goals={courseGoal} deleteGoal={deleteGoal} />;
  }
  return (
    <div>
      <section id="goal-form">
        <CourseInput getGoalData={addNewGoal} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
