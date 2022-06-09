import { useState } from "react";
import '../styles/main.css';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item, onChecked} ) {
  // const [checked, setChecked] = useState(false);

  const handleChange = () => {
    // setChecked(!checked);
    onChecked(item)
  }

  
  return (
    <label className="panel-block ">
      <input type="checkbox" onChange={handleChange} checked={item.done} />
      <p className={item.done ? "has-text-grey-light" : ""}>{item.text}</p>
    </label>
  );
}

export default TodoItem;