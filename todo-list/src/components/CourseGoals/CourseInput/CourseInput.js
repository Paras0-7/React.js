import "./CourseInput.css";
import { Button } from "../../UI/Button";
import { useState } from "react";
export const CourseInput = function (props) {
  const [goal, setGoal] = useState("");

  const goalInputHandler = function (e) {
    setGoal(e.target.value);
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();
    if (goal === "") return;

    const newGoal = {
      text: goal,
      id: Math.random().toString(),
    };

    props.getGoalData(newGoal);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="course-form">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputHandler} />
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};
