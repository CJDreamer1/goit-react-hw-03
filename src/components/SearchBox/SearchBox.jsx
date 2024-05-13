import css from "../SearchBox/SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.inputDecoration}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
