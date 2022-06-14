import { useEffect, useState } from "react"
import { arrayUsers } from "../helpers/arrayUsers"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [bool, setBool] = useState(true)
    const [users, setUsers] = useState(arrayUsers)
    const [text, setText] = useState('')

    useEffect(() => {
        console.log('ItemListContainer: useEffect')
    })

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleAgregar = () => {
        setUsers([
            ...users, 
            { id: users.length + 1, name: text }
        ])
    }

    // console.log(text)

    return (
        <>
            <button onClick={() => setBool(!bool)}>Cambio de estado</button>
            <br />
            <br />
            <input 
                type='text'  
                name='text'
                onChange={handleChange}
            />
            <button onClick={handleAgregar}>agregar</button>
            <ItemList users = {users} />
        </>
    )
}

export default ItemListContainer