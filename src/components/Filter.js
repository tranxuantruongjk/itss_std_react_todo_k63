import { useState } from 'react';

/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({items, handleFilter}) {
  const [fil, setFil] = useState('ALL');
  // console.log(1);
  // const datas = items;
  const handleClick = (type=null) => {
    if (type === null) {
      setFil('ALL');
      handleFilter(items);
    }
    else {
      if (type === true) {
        setFil('DONE');
      }
      else {
        setFil('TODO');
      }
      let filterItems = items.filter((item) => item.done === type);
      handleFilter(filterItems);
    }
  }

  return (
    <div className="panel-tabs">
      <a className={fil === 'ALL' ? 'is-active': ''} onClick={() => handleClick()}>すべて</a>
      <a className={fil === 'TODO' ? 'is-active': ''} onClick={() => handleClick(false)}>未完了</a>
      <a className={fil === 'DONE' ? 'is-active': ''} onClick={() => handleClick(true)}>完了済み</a>
    </div>
  );
}

export default Filter