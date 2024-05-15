import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.uList}>
      {contacts.map((contact) => (
        <li className={css.list} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
