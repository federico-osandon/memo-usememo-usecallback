import { useState } from "react"
import { arrayUsers } from "../helpers/arrayUsers"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [users, setUsers] = useState(arrayUsers)

    return (
        <ItemList users = {users} />
    )
}

export default ItemListContainer