import { Button } from "../../UI/Button";
import { useState } from "react";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 0.5rem 0;
//   gap: 1rem;

//   & label {
//     font-weight: bold;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }
//   & input {
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "black")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;
export const CourseInput = function (props) {
  const [goal, setGoal] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputHandler = function (e) {
    if (goal.trim().length > 0) setIsValid(true);
    setGoal(e.target.value);
  };

  const formSubmitHandler = function (e) {
    e.preventDefault();
    if (goal.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const newGoal = {
      text: goal,
      id: Math.random().toString(),
    };
    setIsValid(true);
    setGoal("");
    props.getGoalData(newGoal);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["course-form"]} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" value={goal} onChange={goalInputHandler} />
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};
