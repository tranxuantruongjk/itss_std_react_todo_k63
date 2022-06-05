/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({items, handleFilter}) {
  // console.log(1);
  // const datas = items;
  const handleClick = (type=null) => {
    if (type === null) {
      handleFilter(items);
    }
    else {
      let filterItems = items.filter((item) => item.done === type);
      handleFilter(filterItems);
    }
  }

  return (
    <div className="panel-tabs">
      <a onClick={() => handleClick()}>すべて</a>
      <a onClick={() => handleClick(false)}>未完了</a>
      <a onClick={() => handleClick(true)}>完了済み</a>
    </div>
  );
}

export default Filter