import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ tasks, onDelete }) {
  return (
    <ul className={css.uList}>
      {tasks.map((task) => (
        <li className={css.list} key={task.id}>
          <Contact data={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
