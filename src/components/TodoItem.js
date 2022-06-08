import { useState } from "react";
import '../styles/main.css';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item} ) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    if(item.done) {
      item.done = false;
    }
    else {
      item.done = true;
    }
  }
  
  return (
    <label className="panel-block ">
      <input type="checkbox" onChange={handleClick} checked={item.done} />
      <p className={item.done ? "has-text-grey-light" : ""}>{item.text}</p>
    </label>
  );
}

export default TodoItem;