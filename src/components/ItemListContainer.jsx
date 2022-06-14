import { useCallback, useEffect, useMemo, useState } from "react"
import { arrayUsers } from "../helpers/arrayUsers"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [bool, setBool] = useState(true)
    const [users, setUsers] = useState(arrayUsers)
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        // console.log('ItemListContainer: useEffect')
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

    const handleSearch = () => {
        setSearch(text)
    }
    const usuariosFiltrados = useMemo(() => users.filter(user => {
        // console.log('proceso de filtrado')
        return user.name.toLowerCase().includes(search.toLowerCase())
    }), [users, search])

    const handleDelete = useCallback((id) => {
        setUsers(users.filter(user => user.id !== id))
    }, [users])

    const printUsers = useCallback(() => {
        // console.log(users)
        console.log(`render usuarios: `, users)
    },[users])

    useEffect(() => {
        printUsers()
    }, [users, printUsers])

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
            <button onClick={handleSearch}>buscar</button>
            <ItemList 
                users={usuariosFiltrados} 
                handleDelete={handleDelete}
            />
        </>
    )
}

export default ItemListContainer