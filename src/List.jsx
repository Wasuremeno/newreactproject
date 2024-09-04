function List(props){

    const category = props.category;
    const ItemList = props.items;

const listItems = ItemList.map(item =>   <li key={item.id}>
                                        {item.name}: &nbsp;
                                        <b>{item.calories}</b></li>);

return(<>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
</>);

} 
export default List     