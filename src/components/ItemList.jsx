import { memo, useEffect } from "react"
import Item from "./Item"


const ItemList = memo(({users, handleDelete}) => {

    useEffect(() => {
        // console.log('ItemList: useEffect')
    })

    return (
        <ul>
            {users.map(user => <Item 
                                    key={user.id} 
                                    {...user}
                                    handleDelete={handleDelete}
                                />
            )}
        </ul>
    )
})

export default ItemList