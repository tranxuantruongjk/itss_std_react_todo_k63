import React, { useState, useEffect } from 'react';

/* 
  【Todoのデータ構成】
 ・key：Todoを特定するID（String）
 ・text：Todoの内容（String）
 ・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import { getKey } from "../lib/util";
// import { useEffect } from 'react/cjs/react.production.min';

function Todo() {

  // const [items, putItems] = React.useState([
  //     /* テストコード 開始 */
  //   { key: getKey(), text: '日本語の宿題', done: false },
  //   { key: getKey(), text: 'reactを勉強する', done: false },
  //   { key: getKey(), text: '明日の準備をする', done: false },
  //   /* テストコード 終了 */
  // ]);

  const [items, putItems, clearItems] = useStorage();
  console.log(items);

  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    setFilterItems(items);
  }, [items])

  console.log(filterItems);
  // setFilterItems(items);
  const handleInput = (item) => {
    putItems([...items, item])
    // setFilterItems([...items, item])
  }

  const handleFilter = (items) => {
    setFilterItems(items)
  }

  const handleCheck = checked => {
    const newItems = items.map(item => {
      if(item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    putItems(newItems);
  }

  // console.log(items);

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <div className="panel-block">
        <Input
          placeholder='Todoを入力してください'
          handleInput={handleInput}
        />
      </div>
      <Filter
        items={items}
        handleFilter={handleFilter}
      />
      {filterItems.map(item => (
        <TodoItem
          key={item.key}
          item={item}
          onChecked={handleCheck}
        />
      ))}
      <div className="panel-block">
        {filterItems.length} items
      </div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearItems}>
          全てのToDoを削除
        </button>
      </div>
    </div>
  );
}

export default Todo;