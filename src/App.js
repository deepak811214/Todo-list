import "./styles.css";
import { useState } from "react";

export default function App() {
  let [value, setValue] = useState("");
  let [list, addList] = useState([]);
  const handleClick = () => {
    let key = new Date().getTime().toString();
    list.push({ value: value, key: key });
    setValue("");
    addList([...list]);
  };
  const handleKey = (e) => {
    if (e.keyCode === 13) {
      let key = new Date().getTime().toString();
      list.push({ value: value, key: key });
      setValue("");
      addList([...list]);
    }
  };
  const removeItem = (e, key) => {
    list = list.filter((ele) => {
      return ele.key !== key;
    });
    addList([...list]);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onKeyDown={(e) => handleKey(e)}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button onClick={handleClick}>Add</button>
      <ul>
        {list.map((ele, key) => {
          return (
            <li key={ele.key}>
              {ele.value}
              <button onClick={(e) => removeItem(e, ele.key)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
