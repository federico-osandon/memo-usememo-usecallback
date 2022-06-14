import { memo, useEffect } from "react"


const Item = memo(({id, name, handleDelete}) => {

    useEffect(() => {
        // console.log('Item: useEffect')
    })

    return (
        <li>
            {name} {' '}
            <button onClick={() => handleDelete(id)}> X </button>
        </li>
    )
})

export default Item