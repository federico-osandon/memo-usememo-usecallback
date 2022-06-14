import Item from "./Item"


const ItemList = ({users}) => {
  return (
    <div>
        {users.map(user => <Item />)}
    </div>
  )
}

export default ItemList