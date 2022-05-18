import { CourseGoalItem } from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";
export const CourseGoalList = function (props) {
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => {
        return (
          <CourseGoalItem delete={props.deleteGoal} key={goal.id} id={goal.id}>
            {goal.text}
          </CourseGoalItem>
        );
      })}
    </ul>
  );
};
