import { useState } from "react";
import styles from "./App.module.css";
import { UserInput } from "./components/UserInput/UserInput";
import { UserList } from "./components/UserList/UserList";
function App() {
  const [users, setUsers] = useState([]);
  const addNewUser = function (user) {
    setUsers((prev) => {
      return [{ ...user }, ...prev];
    });
  };

  let content;

  const valid = users.length > 0 ? true : false;
  if (users.length > 0) content = <UserList users={users}></UserList>;
  return (
    <div>
      <section id={styles["user-form"]}>
        <UserInput addNewUser={addNewUser} />
      </section>

      <section id={styles["users"]} className={`${!valid && styles.hidden}`}>
        {content}
      </section>
    </div>
  );
}

export default App;
