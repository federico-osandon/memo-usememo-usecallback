import { memo, useEffect } from "react"
import Item from "./Item"


const ItemList = memo(({users}) => {

    useEffect(() => {
        console.log('ItemList: useEffect')
    })

    return (
        <ul>
            {users.map(user => <Item 
                                    key={user.id} 
                                    {...user}
                                />
            )}
        </ul>
    )
})

export default ItemList