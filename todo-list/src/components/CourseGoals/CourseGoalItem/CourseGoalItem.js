import "./CourseGoalItem.scss";

export const CourseGoalItem = function (props) {
  const deleteGoal = function (e) {
    props.delete(props.id);
  };
  return (
    <li onClick={deleteGoal} className="goal-item">
      {props.children}
    </li>
  );
};
