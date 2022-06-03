import React, { useState } from 'react';
import {getKey} from "../lib/util";
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {placeholder, handleInput} ) {

  const [item, setItem] = useState({});

  const handleChange = (e) => {
    let text = e.target.value;
    if (text)
      setItem({ key: getKey(), text: text, done: false})
  }

  const onKeyDown = (e) =>
    {
      if (e.key === 'Enter' && e.target.value) {
        handleInput(item);
        setItem({})
    }
  }

  return (
    <div className="panel-block">
      <input 
        className="input"
        value={item.text ? item.text : ''} 
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default Input;
